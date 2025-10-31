type Item = { title: string; info?: string; description?: string };

type Props = {
  heading: string;
  items: Item[];
};

export default function ResumeSection({ heading, items }: Props) {
  return (
    <section style={{ margin: "24px 0" }}>
      <h2 style={{ marginBottom: 8 }}>{heading}</h2>
      <div style={{ display: "grid", gap: 12 }}>
        {items.map((it) => (
          <div key={it.title} style={{ background: "white", padding: 12, borderRadius: 8 }}>
            <h3 style={{ margin: 0 }}>{it.title}</h3>
            {it.info && <p style={{ margin: "4px 0" }}>{it.info}</p>}
            {it.description && <p style={{ margin: 0 }}>{it.description}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
