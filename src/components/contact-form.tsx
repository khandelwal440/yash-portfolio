"use client";

import { FormEvent, useState } from "react";
import { Loader2, Send } from "lucide-react";

type FormState = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("loading");
    setMessage("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    if (!response.ok) {
      setState("error");
      setMessage("Please check the form and try again.");
      return;
    }

    setState("success");
    setMessage(result.message);
    form.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-lg border border-ink/10 bg-white p-5 shadow-soft sm:p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-semibold text-ink">
          Name
          <input name="name" required minLength={2} className="focus-ring mt-2 w-full rounded-md border border-ink/15 px-3 py-3 font-normal" placeholder="Your name" />
        </label>
        <label className="text-sm font-semibold text-ink">
          Email
          <input name="email" required type="email" className="focus-ring mt-2 w-full rounded-md border border-ink/15 px-3 py-3 font-normal" placeholder="you@example.com" />
        </label>
      </div>
      <label className="mt-4 block text-sm font-semibold text-ink">
        Subject
        <input name="projectType" required minLength={2} className="focus-ring mt-2 w-full rounded-md border border-ink/15 bg-white px-3 py-3 font-normal" placeholder="What's this about?" />
      </label>
      <label className="mt-4 block text-sm font-semibold text-ink">
        Message
        <textarea name="message" required minLength={10} rows={5} className="focus-ring mt-2 w-full resize-none rounded-md border border-ink/15 px-3 py-3 font-normal" placeholder="Tell me what you want to build." />
      </label>
      <button type="submit" disabled={state === "loading"} className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-steel disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto">
        {state === "loading" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        Send Message
      </button>
      {message ? <p className={`mt-4 text-sm font-medium ${state === "success" ? "text-moss" : "text-clay"}`}>{message}</p> : null}
    </form>
  );
}
