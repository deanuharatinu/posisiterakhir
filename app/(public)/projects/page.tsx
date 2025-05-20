// import data
import { Metadata } from 'next';
import { projects } from '../../lib/static/projects';
import ProjectShowcase from './ProjectShowCase';

export const metadata: Metadata = {
  title: "Projects - Deanu Haratinu's Personal Website",
  description: "A mix of jobs, gigs, and passion projects."
}

export default function Page() {
  return (
    <div className="flex flex-col" >
      <div className="flex flex-col lg:max-w-3xl">
        <div className="flex flex-col lg:max-w-2xl">
          <h1 className="text-5xl/tight font-bold tracking-tight">
            What I&apos;ve worked on.
            <br />
            A mix of jobs, gigs, and passion projects.
          </h1>
          <p className="text-zinc-400 mt-8">
            Some of the work I&apos;ve done across the years  — from full-time jobs to weekend experiments.
            They&apos;re not countless, but each has been meaningful.
            Together, they&apos;ve helped define my path.
          </p>
        </div>
      </div>

      <ProjectShowcase className="mt-24" projects={projects} />
    </div >
  );
}