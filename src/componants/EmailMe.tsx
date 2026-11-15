import { useRef, useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";

import ReCAPTCHA from "react-google-recaptcha";

// Get these three from your EmailJS dashboard: https://dashboard.emailjs.com
const SERVICE_ID = 'service_bipup5k';
const TEMPLATE_ID = 'template_l4dpncb';
const PUBLIC_KEY = 'p_LdBJU-8bQGzT8rz';
const RECAPTCHA_SITE_KEY = '6Lel7yEuAAAAAHJfZahMxd0l22QrQtYk-otE9BU3'

type Status = "idle" | "sending" | "sent" | "error";

export default function EmailMe() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const recaptchaRef = useRef<ReCAPTCHA>(null);

const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const form = e.currentTarget; // Store reference before await

  if (!captchaVerified) {
    setStatus("error");
    return;
  }

  setStatus("sending");

  try {
    await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, {
      publicKey: PUBLIC_KEY,
    });

    setStatus("sent");
    form.reset();

    recaptchaRef.current?.reset();
    setCaptchaVerified(false);

  } catch (error: any) {
    setErrorMessage(error?.text || 'Unknown error occurred');
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
            <label htmlFor="user_name">Name</label>
            <input id="user_name" name="user_name" type="text" required />
            </div>

            <div className="field">
            <label htmlFor="user_email">Email</label>
            <input id="user_email" name="user_email" type="email" required />
            </div>

            <div className="field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={5} required />
            </div>

            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={RECAPTCHA_SITE_KEY}
              onChange={(token) => setCaptchaVerified(!!token)}
              onExpired={() => setCaptchaVerified(false)}
            />

            <button
              type="submit"
              className="btn btn-primary"
              disabled={!captchaVerified || status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "sent" && <p className="form-status form-status-ok">Thanks — I'll get back to you soon.</p>}
            {status === "error" && <p className="form-status form-status-err">Something went wrong: {errorMessage} — try again, or email me directly.</p>}
        </form>
        </div>
    </section>
  );
}