"use client";

import { useState, type FormEvent } from "react";
import type { ContactField } from "@/content/i18n";

/** Editorial underline-style inquiry form (front-end only — no backend in scope). */
export function ContactForm({ fields, submit, success }: { fields: ContactField[]; submit: string; success: string }) {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return <p className="font-display text-[clamp(1.5rem,3vw,2.25rem)] leading-snug">{success}</p>;
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col">
      {fields.map((f) => (
        <label key={f.label} className="grid grid-cols-1 gap-2 border-b border-black/15 py-6 sm:grid-cols-[1fr_1.4fr] sm:items-baseline sm:gap-6">
          <span className="font-sans text-[12px] uppercase tracking-[0.14em] text-black/80">
            {f.label}{f.required && <span className="text-black/35"> *</span>}:
          </span>
          {f.type === "textarea" ? (
            <textarea rows={3} required={f.required} placeholder={f.placeholder} className="resize-none bg-transparent font-sans text-[15px] text-black outline-none placeholder:text-black/30" />
          ) : f.type === "select" ? (
            <select required={f.required} defaultValue="" className="bg-transparent font-sans text-[15px] text-black outline-none [&:invalid]:text-black/30">
              <option value="" disabled>{f.placeholder}</option>
              {(f.options ?? []).map((o) => (
                <option key={o} value={o} className="text-black">{o}</option>
              ))}
            </select>
          ) : (
            <input type={f.type} required={f.required} placeholder={f.placeholder} className="bg-transparent font-sans text-[15px] text-black outline-none placeholder:text-black/30" />
          )}
        </label>
      ))}

      <button type="submit" className="font-display mt-12 w-fit text-[clamp(1.75rem,3.5vw,2.75rem)] leading-none transition-opacity hover:opacity-50">
        {submit}
      </button>
    </form>
  );
}
