"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

// Helper function to extract the first image URL from the description
const extractImageFromDescription = (description: string): string | null => {
  const imgTagMatch = description.match(/<img[^>]+src="([^">]+)"/);
  return imgTagMatch ? imgTagMatch[1] : null;
};

// Define a type for the Medium post
type MediumPost = {
  title: string;
  link: string;
  thumbnail: string | null;
  pubDate: string;
};

// Define a type for Medium RSS items
interface MediumRSSItem {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  thumbnail?: string; // Optional, since it's often missing
}

const Blog: React.FC = () => {
  const [articles, setArticles] = useState<MediumPost[]>([]);

  useEffect(() => {
    const fetchMediumPosts = async () => {
      try {
        const response = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@ellissong"
        );
        const data = await response.json();

        // Map the data to extract relevant fields, parsing the image from the description
        const posts: MediumPost[] = data.items.map((item: MediumRSSItem) => ({
          title: item.title,
          link: item.link,
          thumbnail: extractImageFromDescription(item.description) ?? '/path-to-default-image.jpg', // Extract image or use fallback
          pubDate: item.pubDate,
        }));

        setArticles(posts.slice(0, 3)); // Fetch latest 3 articles
      } catch (error) {
        console.error('Error fetching Medium posts:', error);
      }
    };

    fetchMediumPosts();
  }, []);

  return (
    <section id="blog" className="py-32 bg-gray-100 text-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">Latest Medium Posts</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <HoverCard key={index}>
              <HoverCardTrigger asChild>
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Display the extracted or fallback image using next/image */}
                  <Image
                    src={article.thumbnail ?? '/path-to-default-image.jpg'}
                    alt={article.title}
                    width={500}  // Set appropriate width for the image
                    height={300} // Set appropriate height for the image
                    className="mb-4 object-contain rounded"
                    onError={(e) => {
                      e.currentTarget.src = '/path-to-default-image.jpg'; // Fallback if image fails to load
                    }}
                  />
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{article.title}</h3>
                  <p className="text-gray-500 mb-2">
                    {new Date(article.pubDate).toLocaleDateString()}
                  </p>
                  <p className="text-gray-500">Read more</p>
                </a>
              </HoverCardTrigger>
              <HoverCardContent>
                <p className="text-sm text-gray-700">Click to read the full article</p>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
