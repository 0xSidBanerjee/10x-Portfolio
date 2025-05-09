import { useParams, Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowLeft, Calendar, Clock } from 'lucide-react';

// Sample blog data
const blogPosts = {
  "understanding-transformers": {
    title: "Understanding Transformers: The Architecture Behind Modern NLP",
    date: "April 15, 2024",
    readTime: "10 min read",
    content: `
      <p>The transformer architecture has become the foundation of modern natural language processing (NLP) models. Introduced in the paper "Attention Is All You Need" by Vaswani et al. in 2017, transformers have enabled significant advances in language understanding and generation capabilities.</p>
      
      <h2>Key Components of Transformer Architecture</h2>
      
      <p>The transformer model consists of several key components that make it particularly effective for sequence-to-sequence tasks:</p>
      
      <h3>Self-Attention Mechanism</h3>
      <p>Unlike recurrent neural networks (RNNs) that process tokens sequentially, the self-attention mechanism allows the model to weigh the importance of different parts of the input sequence when generating each part of the output. This enables the model to capture long-range dependencies more effectively.</p>
      
      <h3>Multi-Head Attention</h3>
      <p>Instead of performing a single attention function, transformers employ multiple attention heads that operate in parallel. Each head can focus on different aspects of the input, allowing the model to simultaneously attend to information from different representation subspaces.</p>
      
      <h3>Positional Encoding</h3>
      <p>Since transformers process all tokens in parallel rather than sequentially, they need a way to understand the order of tokens in the sequence. Positional encodings are added to the input embeddings to provide information about the position of each token.</p>
      
      <h2>Impact on Modern NLP</h2>
      
      <p>The transformer architecture has led to the development of powerful language models like BERT, GPT, and T5, which have set new benchmarks for a wide range of NLP tasks. These models can be fine-tuned for specific applications such as text classification, named entity recognition, question answering, and machine translation.</p>
      
      <p>The success of transformers extends beyond NLP. Variations of the architecture have been applied to computer vision (Vision Transformer), speech processing, and even protein structure prediction (AlphaFold). This versatility highlights the fundamental power of the attention mechanism in capturing complex patterns across different domains.</p>
    `,
    tags: ["NLP", "Transformers", "Deep Learning"],
  },
  "reinforcement-learning-basics": {
    title: "Reinforcement Learning From First Principles",
    date: "March 28, 2024",
    readTime: "8 min read",
    content: `
      <p>Reinforcement Learning (RL) is a type of machine learning where an agent learns to make decisions by taking actions in an environment to maximize some notion of cumulative reward. Unlike supervised learning, there is no labeled dataset; instead, the agent must discover which actions yield the most reward through trial and error.</p>
      
      <h2>Core Components of Reinforcement Learning</h2>
      
      <p>The RL framework consists of several key elements:</p>
      
      <h3>Agent and Environment</h3>
      <p>The agent is the learner or decision-maker that interacts with the environment. The environment is everything that the agent interacts with, providing observations and rewards in response to the agent's actions.</p>
      
      <h3>State, Action, and Reward</h3>
      <p>The state represents the current situation or configuration of the environment. The agent takes actions based on the current state, and the environment provides a reward signal that indicates how good or bad the action was.</p>
      
      <h3>Policy</h3>
      <p>A policy defines how the agent behaves at a given time. It is a mapping from perceived states to actions to be taken in those states. The goal in RL is to find an optimal policy that maximizes the expected cumulative reward over time.</p>
      
      <h2>Key Algorithms in Reinforcement Learning</h2>
      
      <p>Several algorithms have been developed to solve RL problems:</p>
      
      <h3>Q-Learning</h3>
      <p>Q-Learning is a value-based method that learns the value of taking a particular action in a particular state. It uses a table (Q-table) to store these values and updates them based on the rewards received.</p>
      
      <h3>Policy Gradient Methods</h3>
      <p>Policy gradient methods directly optimize the policy without necessarily computing a value function. These methods are particularly useful for problems with continuous action spaces.</p>
      
      <h3>Deep Reinforcement Learning</h3>
      <p>Deep RL combines deep neural networks with reinforcement learning principles. This approach has led to breakthroughs such as AlphaGo, which defeated the world champion in the board game Go, and agents that can play Atari games at superhuman levels.</p>
    `,
    tags: ["Reinforcement Learning", "AI", "Algorithms"],
  },
  // Other blog posts would be defined similarly
};

const BlogPost = () => {
  const { postId } = useParams<{ postId: string }>();
  const post = postId && blogPosts[postId as keyof typeof blogPosts];
  
  if (!post) {
    return (
      <>
        <Navbar />
        <main className="pt-32 pb-20">
          <div className="container max-w-6xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8">Post not found</h1>
            <Link to="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to blog
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container max-w-3xl mx-auto px-4">
          <Link to="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to blog
          </Link>
          
          <article>
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            
            <div className="flex items-center gap-4 text-sm text-neutral-500 mb-8">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }}></div>
            
            <div className="mt-12 pt-8 border-t border-neutral-100">
              <h3 className="text-lg font-medium mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="inline-block px-3 py-1 text-xs font-medium bg-neutral-100 rounded-full text-neutral-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BlogPost;
