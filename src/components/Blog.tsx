import React from 'react';
import { BookOpen, ChevronRight } from 'lucide-react';

const BlogPost = ({ title, date, excerpt, link }) => (
  <div className="mb-6">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 mb-2">{date}</p>
    <p className="text-gray-700 mb-2">{excerpt}</p>
    <a
      href={link}
      className="text-blue-600 hover:underline flex items-center"
    >
      Read more <ChevronRight className="ml-1" size={16} />
    </a>
  </div>
);

const Blog = () => {
  const blogPosts = [
    {
      title: "My First Blog Post",
      date: "June 1, 2023",
      excerpt: "In this post, I discuss the importance of...",
      link: "/blog/first-post"
    },
    {
      title: "Recent Advancements in My Field",
      date: "July 15, 2023",
      excerpt: "A summary of the latest developments in...",
      link: "/blog/recent-advancements"
    }
  ];

  return (
    <section id="blog" className="mb-12 bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition duration-300">
      <h2 className="text-3xl font-bold mb-4 text-gray-800 flex items-center">
        <BookOpen className="mr-2" />
        Blog
      </h2>
      {blogPosts.map((post, index) => (
        <BlogPost key={index} {...post} />
      ))}
      <a
        href="/blog"
        className="text-blue-600 hover:underline flex items-center"
      >
        View all posts <ChevronRight className="ml-1" size={16} />
      </a>
    </section>
  );
};

export default Blog;