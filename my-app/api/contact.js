import { Resend } from "resend";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ message: "Method not allowed." });
  }
  const fields = ["name", "email", "subject", "message"];
  const limits = { name: 100, email: 254, subject: 200, message: 5000 };
  const body = req.body || {};
  if (fields.some(key => typeof body[key] !== "string" || !body[key].trim() || body[key].length > limits[key])) {
    return res.status(400).json({ message: "Please complete all fields within the allowed lengths." });
  }
  const { name, email, subject, message } = Object.fromEntries(fields.map(key => [key, body[key].trim()]));
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || /[\r\n]/.test(email + subject + name)) {
    return res.status(400).json({ message: "Please provide a valid email address and subject." });
  }
  if (!process.env.RESEND_API_KEY) {
    return res.status(503).json({ message: "Contact service is unavailable. Please email dongyunkim96@gmail.com directly." });
  }
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["dongyunkim96@gmail.com"],
      subject: "[Portfolio] " + subject,
      replyTo: email,
      text: "New portfolio message\n\nName: " + name + "\nEmail: " + email + "\n\n" + message
    });
    if (error) return res.status(502).json({ message: "Message could not be sent. Please try again later." });
    return res.status(200).json({ message: "Message sent successfully." });
  } catch {
    return res.status(500).json({ message: "Message could not be sent. Please try again later." });
  }
}
