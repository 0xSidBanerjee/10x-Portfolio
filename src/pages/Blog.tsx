
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlogPostCard from "../components/BlogPostCard";

// Sample blog data
const blogPosts = [
  {
    id: "understanding-transformers",
    title: "Transformers: The Overhyped Backbone of Modern NLP",
    excerpt: "A sarcastic breakdown of why transformers are the tech equivalent of a viral TikTok dance.",
    date: "April 15, 2024",
    readTime: "10 min read",
    tags: ["NLP", "Transformers", "Deep Learning"],
  },
  {
    id: "reinforcement-learning-basics",
    title: "Why Your Model is Overfitting (Spoiler: It’s Your Fault)",
    excerpt: "A snarky guide to debugging ML models when “just add more data” isn’t an option.",
    date: "March 28, 2024",
    readTime: "8 min read",
    tags: ["PyTorch", "Regularization", "Common Sense"],
  },
  {
    id: "ml-systems-design",
    title: "The Kubernetes of AI: Why Everyone’s Obsessed with Orchestration",
    excerpt: "A tongue-in-cheek rant about the industry’s love affair with overengineered pipelines.",
    date: "February 12, 2024",
    readTime: "12 min read",
    tags: ["Kubernetes", "ML Ops", "Buzzword Compliance"],
  },
  {
    id: "future-of-ai-research",
    title: "Reinforcement Learning: Teaching AI to Fail Better",
    excerpt: "A cynical take on RL and its quest to make agents as indecisive as a product manager.",
    date: "January 22, 2024",
    readTime: "15 min read",
    tags: ["OpenAI Gym", "RL Frameworks", "Patience"],
  },
];

const Blog = () => {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Blog</h1>
          <p className="text-xl text-neutral-600 mb-16 max-w-xl">
            Musings on the absurdity of AI, ML, and the tech industry, served with a side of jargon and a sprinkle of existential dread.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <BlogPostCard key={post.id} {...post} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Blog;
