'use client'

import { Project } from "../(public)/data/models/project.model";
import TechStack from "./TechStack";
import { Tooltip } from "react-tooltip";

export default function ProjectCard({ project = {} }: Readonly<{ project?: Project }>) {
  return (
    project.link ? (
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${project.title}`}
      >
        <CardContent project={project} />
      </a>
    ) :
      (<CardContent project={project} />)
  );
}

function CardContent({ project }: Readonly<{ project: Project }>) {
  return (
    < div className="flex flex-col group relative h-full" >
      <h2 className="text-base font-semibold tracking-tight text-zinc-100">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 scale-95 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-3 sm:rounded-2xl bg-zinc-800/50">
        </div>
        <div>
          <span className="relative z-10">{project.title}</span>
        </div>
      </h2>
      <h3 className="relative z-10 text-sm text-zinc-400 mt-1">{project.date}</h3>
      <p className="relative z-10 mt-2 text-sm tracking-wide text-zinc-400">
        {project.description}
      </p>
      <div className="relative z-10 mt-4">
        <h2 className="text-sm tracking-wide font-bold">
          Tech Stack
        </h2>
        <div className="relative mt-2">
          <div>
            <Tooltip id="tooltip"
              style={{ backgroundColor: "#cbd5e1", color: "#222" }}
            />
          </div>
          <div className="grid grid-cols-[repeat(auto-fill,_minmax(50px,50px))] gap-y-2 gap-x-2">
            {
              project.techStack?.map((techStack, index) => {
                return (
                  <button
                    key={`${techStack} + ${index}`}
                    data-tooltip-id="tooltip"
                    data-tooltip-content={techStack}
                    data-tooltip-delay-show={100}
                    data-tooltip-place="top"
                    className="flex flex-col"
                  >
                    <TechStack techStack={techStack} />
                  </button>
                );
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}
