export interface Blog {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
}

const blogs: Blog[] = [
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

export default blogs;
