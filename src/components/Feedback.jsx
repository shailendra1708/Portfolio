import { useState } from "react";
import feedbackBackground from "../assets/contact-background.png";

export default function Feedback() {
  const [type, setType] = useState("Query");
  const [status, setStatus] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = form.get("name");
    const experience = form.get("experience");
    const subject = `${type} from ${name}`;
    const body = `Name: ${name}\n\n${type}:\n${experience}`;

    setStatus("Sending…");
    try {
      const response = await fetch("https://formsubmit.co/ajax/shailendraverma1708@gmail.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new URLSearchParams({
          name: String(name),
          message: String(experience),
          _subject: subject,
          _captcha: "false",
        }),
      });

      if (!response.ok) throw new Error("Unable to send");
      setStatus("Thanks — your message was sent.");
      event.currentTarget.reset();
    } catch {
      setStatus("Opening your email app…");
      window.location.href = `mailto:shailendraverma1708@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }
  }

  return (
    <section id="contact" className="bg-[#111111] px-6 py-20 text-white sm:py-24 lg:px-12 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] lg:items-center lg:gap-24">
        <form onSubmit={handleSubmit} className="relative isolate order-2 overflow-hidden rounded-2xl bg-black p-6 text-neutral-300 shadow-2xl shadow-black/40 sm:p-8 lg:order-1">
          <img src={feedbackBackground} alt="" aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 h-full w-full scale-110 object-cover object-right-bottom opacity-40 animate-[form-background-drift_18s_ease-in-out_infinite_alternate]" />
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[1] bg-black/45" />
          <div className="relative z-10 inline-flex rounded-full border border-white/15 p-1" role="group" aria-label="Feedback type">
            {["Query", "Review"].map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setType(option)}
                aria-pressed={type === option}
                className={`rounded-full px-5 py-2 text-sm font-medium transition ${type === option ? "bg-white/15 text-neutral-100" : "text-neutral-500 hover:text-neutral-200"}`}
              >
                {option}
              </button>
            ))}
          </div>

          <div className="relative z-10 mt-8 grid gap-6 sm:grid-cols-2">
            <label className="text-sm font-medium sm:col-span-2">
              Your name
              <input
                name="name"
                type="text"
                required
                placeholder="Enter your name"
                className="mt-2 w-full rounded-lg border border-white/20 bg-white/[0.03] px-4 py-3 text-base font-normal text-neutral-200 outline-none placeholder:text-neutral-600 transition focus:border-[#4D6CFA]"
              />
            </label>
            <label className="text-sm font-medium sm:col-span-2">
              {type === "Query" ? "Your query" : "Your review"}
              <textarea
                name="experience"
                required
                rows="4"
                placeholder={type === "Query" ? "What would you like to ask?" : "Tell me about your experience..."}
                className="mt-2 w-full resize-y rounded-lg border border-white/20 bg-white/[0.03] px-4 py-3 text-base font-normal text-neutral-200 outline-none placeholder:text-neutral-600 transition focus:border-[#4D6CFA]"
              />
            </label>
          </div>

          <button type="submit" className="relative z-10 mt-8 rounded-full bg-neutral-200 px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#4D6CFA] hover:text-white">
            Send {type.toLowerCase()}
          </button>
          {status && <p className="relative z-10 mt-4 text-sm text-neutral-400" role="status">{status}</p>}
        </form>

        <div className="order-1 lg:order-2">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-neutral-500">
            Let’s connect
          </p>
          <h2 className="instrument-serif mt-5 text-5xl leading-[0.95] tracking-tight sm:text-6xl">
            Have something to <span className="italic text-[#4D6CFA]">say?</span>
          </h2>
          <p className="mt-6 max-w-sm text-sm leading-6 text-neutral-400">
            Ask a question, share a thought (not personals okay...).
          </p>
        </div>
      </div>
    </section>
  );
}
