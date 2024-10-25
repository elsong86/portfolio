import Image from 'next/image';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

// Define a type for the Medium post
type MediumPost = {
  title: string;
  link: string;
  thumbnail: string | null;
  pubDate: string;
};

const Blog: React.FC<{ articles: MediumPost[] }> = ({ articles }) => {
  return (
    <section id="blog" className="py-32 bg-gray-100 text-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">Latest Blog Posts</h2>

        {/* Flexbox layout to center cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {articles.map((article, index) => (
            <div
              key={index}
              className="w-full sm:w-[500px] lg:w-[450px] mx-auto"  // Adjust card width for larger size
            >
              <HoverCard>
                <HoverCardTrigger asChild>
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    {/* Display the extracted or fallback image using next/image */}
                    <Image
                      src={article.thumbnail ?? '/path-to-default-image.jpg'}
                      alt={article.title}
                      width={600}  // Increased width for the image
                      height={400} // Increased height for the image
                      className="mb-4 object-contain rounded"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
