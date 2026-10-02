import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";

// Get these three from your EmailJS dashboard: https://dashboard.emailjs.com
const SERVICE_ID = 'service_bipup5k';
const TEMPLATE_ID = 'template_l4dpncb';
const PUBLIC_KEY = 'p_LdBJU-8bQGzT8rz';

type Status = "idle" | "sending" | "sent" | "error";

export default function EmailMe() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.currentTarget, {
        publicKey: PUBLIC_KEY,
      });
      setStatus("sent");
      e.currentTarget.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  return (
    <section id="emailme">
        <div className="wrap">
        <div className="section-head">
            <span className="section-num">05</span>
            <h2>Send a message directly</h2>
        </div>

        <form className="contact-form contact-form-wrap" onSubmit={handleSubmit}>
            <div className="field">
            <label htmlFor="from_name">Name</label>
            <input id="from_name" name="from_name" type="text" required />
            </div>

            <div className="field">
            <label htmlFor="reply_to">Email</label>
            <input id="reply_to" name="reply_to" type="email" required />
            </div>

            <div className="field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={5} required />
            </div>

            <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Send message"}
            </button>

            {status === "sent" && <p className="form-status form-status-ok">Thanks — I'll get back to you soon.</p>}
            {status === "error" && <p className="form-status form-status-err">Something went wrong — try again, or email me directly.</p>}
        </form>
        </div>
    </section>
  );
}