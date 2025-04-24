import { Project } from "../data/models/project.model";
import ProjectCard from "../ui/ProjectCard";

export default function ProjectShowcase({ className = '', projects = [] }: Readonly<{ className?: string, projects?: Project[] }>) {
  return (
    <section className={`${className} flex flex-col gap-14 sm:grid sm:grid-cols-[repeat(auto-fit,_minmax(200,_max-content))]`}>
      {
        projects?.map((project, index) => {
          return (
            <ProjectCard key={`${project.title} + ${index}`} project={project} />
          );
        })
      }
    </section>
  );
}