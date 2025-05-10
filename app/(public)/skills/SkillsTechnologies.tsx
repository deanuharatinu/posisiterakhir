import Image from "next/image";
import { getTechStackIconPath } from "../../utils/utils";

export default function SkillsTechnologies({
  techStacks, className = ""
}: Readonly<{ techStacks?: string[], className?: string }>) {
  return (
    <div className={className}>
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(50px,120px))] gap-3">
        {
          techStacks?.map((techStack, index) => {
            return (
              <div key={`${techStack} + ${index}`} className="flex flex-col min-h-[120px] rounded-xl bg-zinc-800/50 ring-1 ring-zinc-700/60 justify-center items-center">
                <Image
                  src={getTechStackIconPath(techStack)}
                  alt={`${techStack}`}
                  height={36} width={36}
                />
                <p className="text-sm mt-4">{techStack}</p>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}