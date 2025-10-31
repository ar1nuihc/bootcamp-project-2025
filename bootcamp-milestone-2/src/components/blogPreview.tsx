import Image from "next/image";
import Link from "next/link";
import type { Blog } from "../app/blogData"; 

type Props = Omit<Blog, "imageAlt">;

export default function BlogPreview({ title, date, description, image, slug }: Props) {
  return (
    <article>
      <Link href={`/blog/${slug}`} style={{ textDecoration: "none", color: "inherit" }}>
        <Image src={image} alt={title} width={320} height={200} />
        <h3>{title}</h3>
      </Link>
      <p>{description}</p>
      <time dateTime={new Date(date).toISOString().slice(0, 10)}>{date}</time>
    </article>
  );
}
