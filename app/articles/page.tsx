import Link from "next/link";
import Article from "../ui/article";

export default function Page() {
  return (
    <div className="flex flex-col" >
      <h1 className="text-5xl/tight font-bold">Writing on software design, company building, and the aerospace industry.</h1>
      <p className="text-zinc-400 mt-8">
        All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.
      </p>
      <div className="mt-16">
        <Article />
      </div>
    </div >
  );
}