import { Metadata } from "next";
import Articles from "./Articles";
import { Suspense } from "react";
import ArticleShimmer from "@/app/ui/ArticleShimmer";

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
      <div className="mt-16">
        <Suspense fallback={<ArticleShimmer />}>
          <Articles />
        </Suspense>
      </div>
    </div >
  );
}
