import { getTechStackIconPath } from "../utils/utils";

export default function TechStack({ techStack }: Readonly<{ techStack?: string }>) {
  const iconPath = getTechStackIconPath(techStack);

  if (iconPath == "") {
    return <></>
  }

  return (
    <div className="relative z-10 flex p-1 rounded-4xl bg-zinc-800/50 w-[50px] h-[50px] ring-1 ring-zinc-700/60 justify-center">
      <img src={iconPath} alt={`${techStack}`} height={30} width={30} />
    </div>
  );
}