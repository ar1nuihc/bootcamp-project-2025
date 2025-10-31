import ContactForm from "../../src/components/contact";

export default function ContactPage() {
  return (
    <main style={{ maxWidth: 720, margin: "0 auto", padding: 24 }}>
      <h1 className="page-title">Contact</h1>
      <ContactForm />
    </main>
  );
}
