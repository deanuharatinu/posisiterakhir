import ProjectCard from "../ui/project-card";

// import data
import projects from '../data/projects.json' assert { type: 'json' };

export default function Page() {
  return (
    <div className="flex flex-col lg:max-w-3xl" >
      <div className="flex flex-col lg:max-w-2xl">
        <h1 className="text-5xl/tight font-bold tracking-tight">
          What I’ve worked on.
          <br />
          A mix of jobs, gigs, and passion projects.
        </h1>
        <p className="text-zinc-400 mt-8">
          Some of the work I've done across the years  — from full-time jobs to weekend experiments.
          They're not countless, but each has been meaningful.
          Together, they've helped define my path.
        </p>
      </div>

      <ProjectShowcase className="mt-24" />
    </div >
  );
}

function ProjectShowcase({ className = '' }: Readonly<{ className?: string }>) {
  return (
    <section className={`${className} flex flex-col gap-14 sm:grid sm:grid-cols-[repeat(auto-fit,_minmax(200,_max-content))]`}>
      {
        projects.projects?.map((project, index) => {
          return (
            <ProjectCard key={`${project.title} + ${index}`} project={project} />
          );
        })
      }
    </section>
  );
}