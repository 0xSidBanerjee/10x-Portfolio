
import Hero from "../components/Hero";
import WorkExperience from "../components/WorkExperience";
import Projects from "../components/Projects";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="bg-gradient-to-br from-white to-blue-50/30 min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <WorkExperience />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
