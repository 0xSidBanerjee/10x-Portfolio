
import { useState } from 'react';

interface WorkExperience {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string[];
}

const experiences: WorkExperience[] = [
  {
    id: 1,
    company: "RS Software",
    position: "Software Engineer",
    period: "2024 - Present",
    description: [
      "Engineered neural architectures so cutting-edge, they’re practically sentient (or at least better at overfitting than my last sprint).",
      "Orchestrated “collaboration” with cross-functional teams to deliver ML solutions, all while dodging standup meetings and Jira ticket purgatory.",
      "Published a paper on “Optimizing Transformers for Devices That Barely Work,” now the darling of niche arXiv circles.",
    ],
  },
  {
    id: 2,
    company: "Highradius",
    position: "ML Engineering Intern",
    period: "2022 - 2023",
    description: [
      "Crafted NLP models that could classify sentiments with the precision of a Reddit flame war.",
      "Slashed inference times by 35% through quantization wizardry, because “low latency” is my love language.",
      "Built data pipelines so seamless, they’d make a Kubernetes cluster blush.",
    ],
  },
  {
    id: 3,
    company: "Deloitte",
    position: "Research Assistant",
    period: "2021 - 2022",
    description: [
      "Assisted in prototyping ML algorithms so novel, they’re still looking for a problem to solve.",
      "Contributed to open-source libraries, earning me 15 GitHub stars and an inflated sense of relevance.",
      "Conducted “literature reviews” on reinforcement learning, aka skimming papers while questioning my life choices.",
    ],
  },
];

const WorkExperience = () => {
  const [activeExperience, setActiveExperience] = useState<number>(1);

  return (
    <section className="py-20" id="experience">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-16 section-fade-in">Work Experience</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <div className="sticky top-32">
              {experiences.map((exp) => (
                <button
                  key={exp.id}
                  onClick={() => setActiveExperience(exp.id)}
                  className={`block w-full text-left px-4 py-4 mb-2 rounded-lg transition-colors shadow-sm ${
                    activeExperience === exp.id
                      ? "bg-blue-50 text-blue-700 shadow-md"
                      : "text-neutral-600 hover:bg-neutral-50"
                  }`}
                >
                  <h3 className="font-medium">{exp.company}</h3>
                  <p className="text-sm text-neutral-500">{exp.position}</p>
                </button>
              ))}
            </div>
          </div>
          <div className="md:col-span-8">
            {experiences
              .filter((exp) => exp.id === activeExperience)
              .map((exp) => (
                <div key={exp.id} className="animate-fade-in p-6 bg-white rounded-xl shadow-sm">
                  <h3 className="text-xl font-medium mb-1">{exp.position}</h3>
                  <h4 className="text-lg font-medium text-blue-700 mb-2">{exp.company}</h4>
                  <p className="text-sm text-neutral-500 mb-4">{exp.period}</p>
                  <ul className="space-y-3">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex">
                        <span className="mr-2 text-blue-400">•</span>
                        <span className="text-neutral-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
