import Link from "next/link";

type Props = {
  title: string;
  description: string;
  image: string;
  href: string;
};

export default function PortfolioCard({
  title,
  description,
  image,
  href,
}: Props) {
  return (
    <article style={{ display: "flex", gap: 16, alignItems: "center" }}>
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={title}
      >
        <img
          src={image}
          alt={title}
          width={300}
          height={200}
          style={{ borderRadius: 8, objectFit: "cover" }}
        />
      </Link>
      <div style={{ background: "white", padding: 12, borderRadius: 8 }}>
        <p style={{ fontWeight: 700, margin: 0 }}>{title}</p>
        <p style={{ margin: "6px 0 10px" }}>{description}</p>
        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "blue" }}
        ></Link>
      </div>
    </article>
  );
}
