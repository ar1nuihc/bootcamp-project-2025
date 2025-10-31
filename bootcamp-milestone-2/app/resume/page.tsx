// app/resume/page.tsx
import Link from "next/link";
import ResumeSection from "../../src/components/resume";

export default function ResumePage() {                     
  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: 24 }}>
      <h1 className="page-title">Resume</h1>

      <p style={{ marginBottom: 16 }}>
        <Link href="/resume.pdf" download>Download Resume</Link>
      </p>

      <ResumeSection
        heading="Education"
        items={[
          {
            title:
              "California Polytechnic State University, San Luis Obispo | Expected Graduation 2029",
            info: "Bachelor of Science in Computer Science",
          },
        ]}
      />

      <ResumeSection heading="Coursework" items={[{ title: "" }]} />

      <ResumeSection heading="Skills" items={[{ title: "" }]} />

      <ResumeSection
        heading="Projects"
        items={[{ title: "", info: "", description: "" }]}
      />

      <ResumeSection
        heading="Experience"
        items={[{ title: "", info: "", description: "" }]}
      />
    </main>
  );
}
