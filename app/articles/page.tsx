import Link from "next/link";

export default function Page() {
  return (
    < div className="flex flex-col" >
      <h1 className="text-5xl/tight font-bold tracking ">Writing on software design, company building, and the aerospace industry.</h1>
      <p className="text-zinc-400 mt-8">
        All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.
      </p>
      <div className="mt-16">
        <div className="border-l-2 border-zinc-700/70 pl-6">
          <article className="grid grid-cols-4">
            <div className="">
              June 18, 2024
            </div>
            <div className="col-span-3 flex flex-col">
              <h2 className="font-bold">
                Make managing dotiles a breeze with Stow
              </h2>
              <p>
                lorem ipsum dolor
              </p>

              <Link
                href="#">
                Read article</Link>
            </div>
          </article>
        </div>
      </div>
    </div >
  );
}