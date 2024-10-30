import Intro from './components/Intro';
import AboutMe from './components/AboutMe';
import Toolkit from './components/Toolkit';
import Blog from './components/Blog';
import Projects from './components/Projects';
import Navbar from './components/Navbar';

// Helper function to extract the first image URL from the description
const extractImageFromDescription = (description: string): string | null => {
  const imgTagMatch = description.match(/<img[^>]+src="([^">]+)"/);
  return imgTagMatch ? imgTagMatch[1] : null;
};

// Define a type for Medium posts
type MediumPost = {
  title: string;
  link: string;
  thumbnail: string | null;
  pubDate: string;
};

interface MediumRSSItem {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  thumbnail?: string;
}

async function fetchMediumPosts(): Promise<MediumPost[]> {
  try {
    const response = await fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@ellissong"
    );
    const data = await response.json();

    // Ensure that `data.items` exists and is an array
    const items: MediumRSSItem[] = Array.isArray(data.items) ? data.items : [];

    // Map the fetched items to MediumPost type
    const articles: MediumPost[] = items.map((item: MediumRSSItem) => ({
      title: item.title,
      link: item.link,
      thumbnail: extractImageFromDescription(item.description) ?? '/path-to-default-image.jpg',
      pubDate: item.pubDate,
    }));

    return articles.slice(0, 3); // Return the latest 3 articles
  } catch (error) {
    console.error('Error fetching Medium posts:', error);
    return []; // Return an empty array in case of error
  }
}

export default async function Home() {
  const articles = await fetchMediumPosts(); // Fetch articles in the server component

  return (
    <main className="p-0">
       <div className="sticky top-0 z-50">
        {/* Absolute Navbar positioned on top */}
        <header className="absolute top-0 left-0 w-full flex justify-center">
          <Navbar />
        </header>
      </div>
      <Intro />
      <Projects />
      <Toolkit />
      <AboutMe />
      <Blog articles={articles} /> 
    </main>
  );
}
