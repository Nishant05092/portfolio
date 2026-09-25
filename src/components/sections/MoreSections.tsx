import { copy } from "../../data/copy";
import { useState, type FormEvent } from "react";
import {
  ArrowUpRight,
  MapPin,
  Phone,
  GraduationCap,
  Award,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import {
  profile,
  education,
  credentials,
  articles,
  testimonials,
} from "../../data/portfolio";
import { Card, Heading } from "../ui/Primitives";
import { Socials } from "../layout/Layout";
export function Education() {
  return (
    <section id="education" className="section container">
      <Heading id="education" />
      {education.map((e) => (
        <Card key={`${e.institution}-${e.period}`} className="education-card">
          <GraduationCap size={30} />
          <div>
            <p className="eyebrow">{e.period}</p>
            <h3>{e.institution}</h3>
            <p>{e.degree}</p>
          </div>
          <span className="score">{e.score}</span>
        </Card>
      ))}
    </section>
  );
}
export function Certifications() {
  return (
    <section id="certifications" className="section container">
      <Heading id="certifications" />
      <div className="three-grid">
        {credentials.map((c) => (
          <Card key={c.title}>
            <Award className="accent" size={25} />
            <p className="eyebrow">{c.issuer}</p>
            <h3>{c.title}</h3>
            <p>{c.detail}</p>
            {c.url && (
              <a
                className="text-link"
                href={c.url}
                target="_blank"
                rel="noreferrer"
              >
                {copy.viewProfile}
                <ArrowUpRight size={16} />
              </a>
            )}
          </Card>
        ))}
      </div>
    </section>
  );
}
export function Blog() {
  return (
    <section id="blog" className="section container">
      <Heading id="blog" />
      <div className="three-grid">
        {articles.map((a) => (
          <Card key={a.title}>
            <p className="eyebrow">{a.category}</p>
            <h3>{a.title}</h3>
            <p>
              {a.date}
              {a.sample ? " · Sample content" : ""}
            </p>
            <a
              className="text-link"
              href={a.url}
              target="_blank"
              rel="noreferrer"
            >
              {copy.explore}
              <ArrowUpRight size={16} />
            </a>
          </Card>
        ))}
      </div>
    </section>
  );
}
export function Testimonials() {
  const [index, set] = useState(0);
  const t = testimonials[index];
  return (
    <section id="testimonials" className="section container">
      <Heading id="testimonials" />
      <Card>
        <blockquote>“{t.quote}”</blockquote>
        {t.name && <h3>{t.name}</h3>}
        <p>{t.role}</p>
        <div className="button-row">
          <button
            className="icon-button"
            aria-label={copy.previousRecommendation}
            onClick={() =>
              set((index - 1 + testimonials.length) % testimonials.length)
            }
          >
            <ChevronLeft />
          </button>
          <button
            className="icon-button"
            aria-label={copy.nextRecommendation}
            onClick={() => set((index + 1) % testimonials.length)}
          >
            <ChevronRight />
          </button>
        </div>
      </Card>
    </section>
  );
}
export function Contact() {
  const [status, set] = useState("");
  const [sending, setSending] = useState(false);
  const configured = Boolean(
    import.meta.env.VITE_EMAILJS_SERVICE_ID &&
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID &&
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  );
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;
    if (!configured) {
      set(
        "Email delivery is not configured yet. Please use the email link to get in touch.",
      );
      return;
    }
    setSending(true);
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY },
      );
      set("Message sent. Thanks for reaching out!");
      form.reset();
    } catch {
      set(
        "Your message could not be sent. Please try again or email me directly.",
      );
    } finally {
      setSending(false);
    }
  }
  return (
    <section id="contact" className="section container">
      <div className="contact-panel">
        <div>
          <p className="eyebrow">{copy.label11SayHello}</p>
          <h2>
            {copy.letSBuild}
            <br />
            {copy.something}
            <span className="gradient-text">{copy.meaningful}</span>
          </h2>
          <p>{copy.haveAnInterestingProblemAnOpportunityOr}</p>
          <a className="contact-email" href={`mailto:${profile.email}`}>
            {profile.email}
            <ArrowUpRight size={22} />
          </a>
          <div className="contact-details">
            <span>
              <MapPin size={15} />
              {profile.location}
            </span>
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>
              <Phone size={15} />
              {profile.phone}
            </a>
          </div>
          <Socials />
        </div>
        <form onSubmit={submit}>
          <div className="form-row">
            <label>
              {copy.yourName}
              <input
                name="from_name"
                autoComplete="name"
                required
                minLength={2}
                maxLength={100}
                placeholder={copy.alexMorgan}
              />
            </label>
            <label>
              {copy.emailAddress}
              <input
                name="reply_to"
                type="email"
                autoComplete="email"
                required
                maxLength={254}
                placeholder={copy.alexCompanyCom}
              />
            </label>
          </div>
          <label>
            {copy.whatSOnYourMind}
            <textarea
              name="message"
              rows={5}
              required
              minLength={10}
              maxLength={5000}
              placeholder={copy.tellMeALittleAboutYourIdea}
            />
          </label>
          <button className="button primary" disabled={sending} type="submit">
            {sending ? "Sending…" : "Send a message"}
            <ArrowUpRight size={17} />
          </button>
          <p className="form-note">
            {configured
              ? "Delivered with EmailJS."
              : "Email delivery setup is pending. You can email me directly."}
          </p>
          {status && (
            <div className="toast" role="status">
              {status}
              <button
                type="button"
                onClick={() => set("")}
                aria-label={copy.dismissNotification}
              >
                ×
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
