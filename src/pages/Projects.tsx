
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectsComponent from "../components/Projects";

const Projects = () => {
  return (
    <div className="bg-gradient-to-br from-white to-blue-50/30 min-h-screen">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Projects</h1>
          <p className="text-xl text-neutral-600 mb-16 max-w-xl">
            Behold my portfolio of AI and ML masterpieces, each a testament to my ability to overcomplicate simple problems with bleeding-edge tech stacks.
          </p>
        </div>
        <ProjectsComponent />
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
