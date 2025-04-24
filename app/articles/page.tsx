import { Metadata } from "next";

// import data
import articles from "../data/static/articles.json" assert { type: 'json' };
import Articles from "./Articles";

export const metadata: Metadata = {
  title: "Articles - Deanu Haratinu's Personal Website",
  description: "Writing about software development, personal thoughts, and life in general."
}

export default function Page() {
  return (
    <div className="flex flex-col lg:max-w-3xl" >
      <div className="flex flex-col lg:max-w-2xl">
        <h1 className="text-5xl/tight font-bold tracking-tight">Writing about software development, personal thoughts, and life in general.</h1>
        <p className="text-zinc-400 mt-8">
          I&apos;ve had so many thoughts and reflections that slipped into the void, unnoticed.
          This time, I&apos;m commited to writing them down. Whether someone finds them useful or not, I just need to put them into words — to settle my own mind.
          <br />
          <br />
          <span className="text-xs">*ps: this page is still on development. expect a fake article :p</span>
        </p>
      </div>
      {
        articles.articles &&
        <div className="mt-16">
          <Articles articles={articles.articles} />
        </div>
      }
    </div >
  );
}