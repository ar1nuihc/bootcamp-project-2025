"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert(`Thanks, ${form.name}! (demo only)`);
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "grid", gap: 12 }}>
      <label>
        Name
        <input name="name" value={form.name} onChange={handleChange} required />
      </label>

      <label>
        Email
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Message
        <textarea
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Send</button>
    </form>
  );
}
