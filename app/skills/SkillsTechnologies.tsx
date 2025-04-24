'use client'

import TechStack from "../ui/TechStack";
import { Tooltip } from "react-tooltip";

export default function SkillsTechnologies({
  techStacks, className = ""
}: Readonly<{ techStacks?: string[], className?: string }>) {
  return (
    <div className={className}>
      <div className="rounded-2xl">
        <Tooltip id="tooltip" />
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,_minmax(50px,50px))] gap-3">
        {
          techStacks?.map((techStack, index) => {
            return (
              <button
                key={`${techStack} + ${index}`}
                data-tooltip-id="tooltip"
                data-tooltip-content={techStack}
                data-tooltip-delay-show={100}
                data-tooltip-place="top">
                <TechStack techStack={techStack} />
              </button>
            );
          })
        }
      </div>
    </div>
  );
}