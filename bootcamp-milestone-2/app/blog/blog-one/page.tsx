import Image from "next/image";
import Link from "next/link";

export default function BlogOne() {
  return (
    <main>
      <article className="blog-post">
        <h1 className="blog-title">blog1</h1>
        <time className="blog-date">10/13/2025</time>
        <Image
          src="/siamese.jpg"
          alt="siamese cat picture"
          width={400}
          height={240}
        />
        <section className="blog-content">
          <p>
            My time at Cal Poly Slo has been pretty chill so far. People seem to
            be nice and there are cool mountains to look at in the background.
          </p>
          <br />
          <p>
            However, if there is <b>ONE</b> thing I would change, it would be to
            add some hot pot restaurants!!! I am tired of eating Chick-Fil-A
            everyday.
          </p>
        </section>
      </article>
      <p>
        <Link href="/blog">Back to all blogs</Link>
      </p>
    </main>
  );
}
