import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/next"

const Hero = () => {
  return (
    <section className="pt-32 pb-20">
      <Analytics/>
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-3 stagger-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
              Crafting AI Wins with Swagger
            </h1>
            <p className="text-xl text-neutral-600 mb-8 max-w-xl">
             Hi! I’m Siddhanta, a deep learning maverick crafting neural epics on my MacBook, Vim as my superpower. Forget overpriced pour-overs—I’m too busy shipping ML models that “pivot the future” and debugging with swagger. Let’s build the next unicorn.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="group inline-flex items-center rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
              >
                View my work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/blog"
                className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-6 py-3 text-sm font-medium hover:bg-neutral-50 transition-colors shadow-sm hover:shadow-md"
              >
                Read my blog
              </Link>
            </div>
          </div>
          <div className="md:col-span-2 relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-100 to-indigo-100 overflow-hidden shadow-xl transition-transform">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-[90%] h-[90%]">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-2xl transform rotate-3 shadow-md transition-transform"></div>
                  <img
                    src="../../resources/profile-picture.jpeg"
                    alt="Siddhanta, ML Engineer"
                    className="relative w-full h-full object-cover rounded-2xl shadow-lg transition-opacity"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;