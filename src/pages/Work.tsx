
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WorkExperience from "../components/WorkExperience";

const Work = () => {
  return (
    <div className="bg-gradient-to-br from-white to-blue-50/30 min-h-screen">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Work Experience</h1>
          <p className="text-xl text-neutral-600 mb-16 max-w-xl">
            A curated chronicle of my relentless pursuit of “impactful” contributions in the corporate code mines, where I’ve mastered the art of buzzword-compliant innovation.
          </p>
        </div>
        <WorkExperience />
      </main>
      <Footer />
    </div>
  );
};

export default Work;
