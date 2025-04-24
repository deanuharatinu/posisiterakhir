import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About - Deanu Haratinu's Personal Website",
  description: "Hi, I'm Deanu Haratinu"
}

export default function Page() {
  return (
    <div className="grid lg:grid-cols-2 lg:grid-rows-[auto_1fr] gap-x-4 gap-y-2 items-start mx-2">
      <section className="lg:col-start-2 lg:ml-22">
        <Image
          src={`/deanu-profile.webp`}
          alt=""
          className="w-70 lg:w-[clamp(20rem,30vw,26rem)] ml-2 aspect-square rotate-3 rounded-2xl object-cover"
          width={3024}
          height={4032} />
      </section>

      <section className="mt-12 lg:mt-0 lg:order-first lg:row-span-2">
        <h1 className="text-3xl font-bold sm:text-5xl">
          Hi, I'm Deanu Haratinu.
        </h1>
        <AboutMeText />
      </section >

      <section className="mt-20 lg:ml-20">
        <SocialMediaList />
      </section>
    </div >
  );
}

function AboutMeText() {
  return (
    <div className="mt-10 text-base/relaxed text-zinc-400">
      <p>
        I've been familiar with computers since I was a child — a rare privilege growing up In Indonesia.
        I still remember my first encounter to programming: a Visual Basic book I picked up in elementary school.
      </p>
      <br />
      <p>
        In college, I chose to major in Physics. My interest in programming never faded. I started a computational study group that focused on C and C++ as the main programming language and led it for 2 years.  
        Even for my bachelor’s thesis, I built a system using Python and Arduino to measure the acoustics of a room — combining both software and hardware in one project.
      </p>
      <br />
      <p>
        After graduating, I found myself without a clear direction and tried starting a small business. Unfortunately, it didn't work out — luck wasn't on my side at the time.
        Then in 2021, an opportunity came along for me to become a Software Developer. It was an easy decision. I knew this was my path.
      </p>
      <br />
      <p>
        Since then, I've been developing software solutions across various industries. These days, I mainly focus on mobile app development, with occasional work on backend systems.
        Still, I hesitate to labele myself a <i>Full Stack Developer</i> — or even a <i>Software Engineer</i> — but I enjoy building things that work and solve real problems.
      </p>
    </div>
  );
}

function SocialMediaList() {
  return (
    <ul className="space-y-4">
      <li className="flex">
        <a target="_blank"
          className="group flex items-center text-sm font-medium transition text-zinc-200 hover:text-cyan-500"
          href="https://github.com/deanuharatinu">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-cyan-500">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z">
            </path>
          </svg>
          <span className="ml-4">Follow on GitHub</span>
        </a>
      </li>
      <li className="flex">
        <a
          target="_blank"
          className="group flex text-sm items-center font-medium transition text-zinc-200 hover:text-cyan-500"
          href="https://www.linkedin.com/in/deanu-haratinu/">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-cyan-500">
            <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z">
            </path>
          </svg>
          <span className="ml-4">Connect on LinkedIn</span>
        </a>
      </li>
      <li className="flex">
        <a
          target="_self"
          className="group flex text-sm items-center font-medium transition text-zinc-200 hover:text-cyan-500"
          href="mailto:deanuharatinutuu@gmail.com">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-cyan-500"
          >
            <path fillRule="evenodd" d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z">
            </path>
          </svg>
          <span className="ml-4">deanuharatinutuu@gmail.com</span>
        </a>
      </li>
    </ul>
  );
}