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
    if (!container) {
        console.warn("renderBlogs: No element with id=\"".concat(containerId, "\""));
        return;
    }
    // Clear any existing content
    container.textContent = "";
    var frag = document.createDocumentFragment();
    blogs.forEach(function (blog) {
        // Create the blog post container <div>
        var post = document.createElement("div");
        post.className = "blog-post";
        
        // Create child elements
        var titleEl = document.createElement("h1");
        titleEl.className = "blog-title";
        titleEl.textContent = blog.title;
       
        var imgEl = document.createElement("img");
        imgEl.className = "blog-image";
        imgEl.src = blog.image;
        imgEl.alt = blog.imageAlt;
        imgEl.loading = "lazy";
       
        var descEl = document.createElement("p");
        descEl.className = "blog-desc";
        descEl.textContent = blog.description;
        
        // Append children to the post <div>
        post.append(titleEl, imgEl, descEl);
        
        // Append the post <div> to the main container
       
        frag.appendChild(post);
    });
    container.appendChild(frag);
}

// Run after the DOM is ready
document.addEventListener("DOMContentLoaded", function () {
    renderBlogs("blog-list", Blogs);
});
