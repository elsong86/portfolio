// app/components/Blog.tsx
import React from 'react';
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
  
const blogPosts = [
  {
    title: 'Understanding JavaScript Closures',
    description: 'A deep dive into closures and how they work in JavaScript.',
    url: 'https://example.com/javascript-closures',
  },
  {
    title: 'Getting Started with Next.js',
    description: 'An introductory guide to building applications with Next.js.',
    url: 'https://example.com/getting-started-nextjs',
  },
  {
    title: 'Building REST APIs with Node.js',
    description: 'A practical guide on how to build and deploy REST APIs using Node.js.',
    url: 'https://example.com/rest-apis-nodejs',
  },
];

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-32 bg-gray-100 text-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">Latest Blog Posts</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <HoverCard key={index}>
              <HoverCardTrigger asChild>
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{post.title}</h3>
                  <p className="text-gray-500">Read more</p>
                </a>
              </HoverCardTrigger>
              <HoverCardContent>
                <p className="text-sm text-gray-700">{post.description}</p>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
