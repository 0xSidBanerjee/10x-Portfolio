
import { ArrowUpRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "NeuralSynthX",
    description: "A generative AI system that churns out synthetic data so convincing, it’s ready to unionize.",
    tags: ["PyTorch", "GANs", "Data Fabrication Frameworks"],
    link: "#",
  },
  {
    id: 2,
    title: "VisionOverlord",
    description: "A computer vision model that detects “urgent” Jira tickets before they ruin your weekend.",
    tags: ["TensorFlow", "CNNs", "Deadline-Aware Processing"],
    link: "#",
  },
  {
    id: 3,
    title: "TextRoaster",
    description: "An NLP pipeline that generates snarky code review comments with unsettling accuracy.",
    tags: ["Hugging Face", "Transformers", "Sarcasm APIs"],
    link: "#",
  },
  {
    id: 4,
    title: "ChaosOptimizer",
    description: "A reinforcement learning agent that maximizes sprint velocity by strategically ignoring technical debt.",
    tags: ["OpenAI Gym", "DQN", "Procrastination Heuristics"],
    link: "#",
  },
];

const Projects = () => {
  return (
    <section className="py-20 bg-neutral-50" id="projects">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-16 section-fade-in">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <a 
              href={project.link} 
              key={project.id}
              className="group p-6 bg-white rounded-xl border border-neutral-100 hover-grow hover:border-neutral-200 transition-all hover:shadow-lg"
            >
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-medium mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <ArrowUpRight 
                  className="h-5 w-5 text-neutral-400 group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" 
                />
              </div>
              <p className="text-neutral-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="inline-block px-3 py-1 text-xs font-medium bg-blue-50 rounded-full text-blue-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
