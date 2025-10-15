var Blogs = [
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
function renderBlogs(containerId, blogs) {
    var container = document.getElementById(containerId);
    if (!container)
        return;
    container.textContent = "";
    var frag = document.createDocumentFragment();
    blogs.forEach(function (blog) {
        var post = document.createElement("div");
        post.className = "blog-post";
        // main link → blogs/<slug>.html
        var link = document.createElement("a");
        link.className = "blog-link";
        link.href = "blogs/".concat(blog.slug, ".html");
        link.setAttribute("aria-label", blog.title);
        var imgEl = document.createElement("img");
        imgEl.className = "blog-image";
        imgEl.src = blog.image;
        imgEl.alt = blog.imageAlt;
        imgEl.loading = "lazy";
        var titleEl = document.createElement("h1");
        titleEl.className = "blog-title";
        titleEl.textContent = blog.title;
        var descEl = document.createElement("p");
        descEl.className = "blog-desc";
        descEl.textContent = blog.description;
        // clickable area = image + title
        link.append(imgEl, titleEl);
        // build card
        post.append(link, descEl);
        frag.appendChild(post);
    });
    container.appendChild(frag);
}
document.addEventListener("DOMContentLoaded", function () {
    renderBlogs("blog-list", Blogs);
});
