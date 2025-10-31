import PortfolioCard from "../../src/components/portfolio";

export default function Portfolio() {
  return (
    <main style={{ padding: 24 }}>
      <h1 className="page-title">Portfolio</h1>

      <div style={{ display: "grid", gap: 24 }}>
        <PortfolioCard
          title="Aron's Personal Website"
          description="A website made by Aron Chiu"
          image="/S-GTotoro.jpg"
          href="https://github.com/ar1nuihc"
        />
      </div>
    </main>
  );
}
