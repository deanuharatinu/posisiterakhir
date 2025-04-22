import Article from "../ui/article";

export default function Page() {
  return (
    <div className="flex flex-col lg:max-w-3xl" >
      <div className="flex flex-col lg:max-w-2xl">
        <h1 className="text-5xl/tight font-bold tracking-tight">Writing on software design, company building, and the aerospace industry.</h1>
        <p className="text-zinc-400 mt-8">
          All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.
        </p>
      </div>

      <div className="flex flex-col gap-10 mt-16">
        <Article />
        <Article />
        <Article />
        <Article />
      </div>
    </div >
  );
}