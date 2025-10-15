type Blog = {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
};

const Blogs: Blog[] = [
  {
    title: "blog1",
    date: "10/13/2025",
    description: "first blog made",
    image: "./siamese.jpg",
    imageAlt: "siamese cat picture",
    slug: "blog-one",
  },
  {
    title: "blog2",
    date: "10/13/2025",
    description: "second blog made",
    image: "./siamese.jpg",
    imageAlt: "siamese cat picture",
    slug: "blog-two",
  },
];

function renderBlogs(containerId: string, blogs: Blog[]): void {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.textContent = "";
  const frag = document.createDocumentFragment();

  blogs.forEach((blog) => {
    const post = document.createElement("div");
    post.className = "blog-post";

    // main link → blogs/<slug>.html
    const link = document.createElement("a");
    link.className = "blog-link";
    link.href = `blogs/${blog.slug}.html`;
    link.setAttribute("aria-label", blog.title);

    const imgEl = document.createElement("img");
    imgEl.className = "blog-image";
    imgEl.src = blog.image;
    imgEl.alt = blog.imageAlt;
    imgEl.loading = "lazy";

    const titleEl = document.createElement("h1");
    titleEl.className = "blog-title";
    titleEl.textContent = blog.title;

    const descEl = document.createElement("p");
    descEl.className = "blog-desc";
    descEl.textContent = blog.description;

    // clickable area = image + title
    link.append(titleEl, imgEl);

    // build card
    post.append(link, descEl);
    frag.appendChild(post);
  });

  container.appendChild(frag);
}

document.addEventListener("DOMContentLoaded", () => {
  renderBlogs("blog-list", Blogs);
});
