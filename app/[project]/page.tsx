import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Footer from "@/components/Footer";
import ProjectCase from "@/components/ProjectCase";
import * as projects from "@/data/results";
import Hero from "@/components/Hero";

const Project = ({
  params,
}: {
  params: {
    project: string;
  };
}) => {
  const project = params.project || "";
  const projectData = (projects as Record<string, any>)[project];

  if (!projectData) {
    return (
      <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 min-h-screen">
        <div className="max-w-7xl w-full flex flex-col items-center justify-center min-h-screen">
          <FloatingNav navItems={navItems} />
          <div className="max-w-full flex-grow flex flex-col items-center justify-center">
            <h1 className="text-5xl font-bold text-white mb-4">
              Project Not Found
            </h1>
            <p className="text-lg text-gray-400 mb-8">
              The project you are looking for does not exist.
            </p>
          </div>

          <Footer />
        </div>
      </main>
    );
  }

  const { title, caption, highlight } = projectData;

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero
          caption={caption}
          words={title}
          highlightWords={highlight}
          showIntro={false}
          showButton={false}
        />
        <ProjectCase project={project} />
        <Footer />
      </div>
    </main>
  );
};

export default Project;
