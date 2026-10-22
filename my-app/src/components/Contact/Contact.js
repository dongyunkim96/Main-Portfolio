import React, { useState } from "react";
import { FiArrowUpRight, FiSend, FiMail, FiMapPin } from "react-icons/fi";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);
  async function submit(event) {
    event.preventDefault(); setSending(true); setStatus("");
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      if (!response.ok) throw new Error("Send failed");
      setStatus("success"); setForm({ name: "", email: "", subject: "", message: "" });
    } catch { setStatus("error"); } finally { setSending(false); }
  }
  return <div className="page-shell contact-page"><header className="page-heading"><p className="eyebrow">START A CONVERSATION</p><h1>Let’s build<br />something <span className="accent">together.</span></h1><p>A project, an opportunity, or a good technical conversation.<br className="desktop-break" /> I’d love to hear what you have in mind.</p></header>
    <div className="contact-grid"><aside className="contact-details"><p className="eyebrow">GET IN TOUCH</p><h2>Good work starts<br />with a conversation.</h2><a className="email-link" href="mailto:dongyunkim96@gmail.com"><FiMail /> dongyunkim96@gmail.com <FiArrowUpRight /></a><p><FiMapPin /> Northern Virginia, USA</p><div className="contact-profile-links"><a href="https://github.com/dongyunkim96" target="_blank" rel="noreferrer">GitHub <FiArrowUpRight /></a><a href="https://linkedin.com/in/dongyun-kim-363487272/" target="_blank" rel="noreferrer">LinkedIn <FiArrowUpRight /></a><a href="https://medium.com/@dongyunkim96" target="_blank" rel="noreferrer">Medium <FiArrowUpRight /></a></div></aside>
    <form className="contact-form" onSubmit={submit}><div className="form-row">{[["name", "Your name", "text", "name"], ["email", "Email address", "email", "email"]].map(([name, label, type, auto]) => <label key={name} htmlFor={"contact-" + name}>{label}<input id={"contact-" + name} name={name} type={type} autoComplete={auto} value={form[name]} required maxLength={name === "name" ? 100 : 254} onChange={e => setForm({ ...form, [name]: e.target.value })} /></label>)}</div><label htmlFor="contact-subject">Subject<input id="contact-subject" name="subject" value={form.subject} required maxLength={200} placeholder="What would you like to discuss?" onChange={e => setForm({ ...form, subject: e.target.value })} /></label><label htmlFor="contact-message">Message<textarea id="contact-message" name="message" rows={6} maxLength={5000} value={form.message} required placeholder="Tell me a little about your idea…" onChange={e => setForm({ ...form, message: e.target.value })} /></label><button className="button button-primary" disabled={sending} type="submit">{sending ? "Sending…" : "Send message"} <FiSend /></button><div role="status" aria-live="polite">{status === "success" && <p className="form-success">Thanks for reaching out. Your message has been sent.</p>}{status === "error" && <p className="form-error">Your message could not be sent. Please try again or <a href="mailto:dongyunkim96@gmail.com">email me directly</a>.</p>}</div></form></div>
  </div>;
}
