import Image from "next/image";
import Link from "next/link";

export default function BlogTwo() {
  return (
    <main>
      <article className="blog-post">
        <h1 className="blog-title">blog2</h1>
        <time className="blog-date">10/13/2025</time>
        <Image
          src="/siamese.jpg"
          alt="siamese cat picture"
          width={400}
          height={240}
        />
        <section className="blog-content">
          <p>
            Cats are way cooler than dogs. The fastest land animal is a literal
            cat (cheetah). They can take care of themselves.
          </p>
          <br />
          <p>
            Cats are way cuter and more fluffier as well as being more adorable
            and better cuddlebility.
          </p>
        </section>
      </article>
      <p>
        <Link href="/blog">Back to all blogs</Link>
      </p>
    </main>
  );
}
