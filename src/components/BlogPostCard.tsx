
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogPostCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
}

const BlogPostCard = ({ id, title, excerpt, date, readTime, tags }: BlogPostCardProps) => {
  return (
    <Link 
      to={`/blog/${id}`} 
      className="group block p-6 bg-white rounded-2xl border border-neutral-100 hover-grow hover:border-neutral-200 transition-all hover:shadow-sm"
    >
      <div className="flex items-center gap-2 text-sm text-neutral-500 mb-3">
        <Calendar className="h-4 w-4" />
        <span>{date}</span>
        <span className="w-1 h-1 rounded-full bg-neutral-300"></span>
        <span>{readTime}</span>
      </div>
      <h3 className="text-xl font-medium mb-3 group-hover:text-blue-600 transition-colors">{title}</h3>
      <p className="text-neutral-600 mb-4">{excerpt}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span 
            key={index} 
            className="inline-block px-3 py-1 text-xs font-medium bg-neutral-100 rounded-full text-neutral-600"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
};

export default BlogPostCard;
