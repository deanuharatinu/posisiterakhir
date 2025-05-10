import { Metadata } from "next";
import SkillsTechnologies from "./SkillsTechnologies";

// import data
import {
  programmingLanguage, cloudDevsecops, framework,
  tools, ides, technologies
} from "../../data/static/skills";

export const metadata: Metadata = {
  title: "Skills - Deanu Haratinu's Personal Website",
  description: "All the skills and tools that I use everyday"
}

export default function Page() {
  return (
    <div className="flex felx-col">
      <div className="flex flex-col w-full lg:max-w-4xl">
        <div className="flex flex-col lg:max-w-2xl">
          <h1 className="text-5xl/tight font-bold tracking-tight">
            Skills and Tools.
          </h1>
          <p className="text-zinc-400 mt-8">
            A collection of the skills and tools I&apos;ve picked up over the years — and still use daily.
          </p>
        </div>

        <section className="fle flex-col mt-14">
          <div>
            <h2 className="text-base font-bold">
              Programming Languages & Markup
            </h2>
            <SkillsTechnologies
              className="mt-5"
              techStacks={programmingLanguage}
            />
          </div>

          <div className="mt-12">
            <h2 className="text-base font-bold">
              Cloud & DevSecOps
            </h2>
            <SkillsTechnologies
              className="mt-5"
              techStacks={cloudDevsecops}
            />
          </div>

          <div className="mt-12">
            <h2 className="text-base font-bold">
              Framework / Library
            </h2>
            <SkillsTechnologies
              className="mt-5"
              techStacks={framework}
            />
          </div>

          <div className="mt-12">
            <h2 className="text-base font-bold">
              IDE / Text Editor
            </h2>
            <SkillsTechnologies
              className="mt-5"
              techStacks={ides}
            />
          </div>

          <div className="mt-12">
            <h2 className="text-base font-bold">
              Tools and other Technologies
            </h2>
            <SkillsTechnologies
              className="mt-5"
              techStacks={[...tools, ...technologies]}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
