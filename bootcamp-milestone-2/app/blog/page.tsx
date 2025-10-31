import BlogPreview from "../../src/components/blogPreview"; 
import blogs from "../../src/app/blogData";

export default function BlogPage() {
  return (
    <main>
      <h1 className="page-title">Blog</h1>

      {blogs.map((b) => (
        <BlogPreview
          key={b.slug}
          title={b.title}
          date={b.date}
          description={b.description}
          image={b.image} 
          slug={b.slug}
        />
      ))}
    </main>
  );
}
