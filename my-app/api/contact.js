import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  
  if (req.method !== "POST") {
    return res.status(405).json({
      message: "Method not allowed",
    });
  }

  try {
    const { name, email, subject, message } = req.body;

    
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        message: "All fields are required.",
      });
    }


    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",

      
      to: ["dongyunkim96@gmail.com"],

      subject: `[Portfolio] ${subject}`,

      replyTo: email,

      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          
          <h2>New Portfolio Contact</h2>

          <p>
            Someone sent you a message through your portfolio.
          </p>

          <hr />

          <p>
            <strong>Name:</strong><br />
            ${name}
          </p>

          <p>
            <strong>Email:</strong><br />
            ${email}
          </p>

          <p>
            <strong>Subject:</strong><br />
            ${subject}
          </p>

          <p>
            <strong>Message:</strong><br />
            ${message}
          </p>

          <hr />

          <p style="color: #777;">
            Sent from Dongyun Kim's Portfolio
          </p>

        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return res.status(400).json({
        message: "Failed to send message.",
      });
    }

    return res.status(200).json({
      message: "Message sent successfully!",
      data,
    });

  } catch (error) {
    console.error("Contact API error:", error);

    return res.status(500).json({
      message: "Something went wrong.",
    });
  }
}