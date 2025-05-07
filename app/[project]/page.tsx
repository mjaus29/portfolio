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
