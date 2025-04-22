import Article from "./article";

// import data
import articles from "../data/articles.json" assert { type: 'json' };

export default function Page() {
  return (
    <div className="flex flex-col lg:max-w-3xl" >
      <div className="flex flex-col lg:max-w-2xl">
        <h1 className="text-5xl/tight font-bold tracking-tight">Writing on software design, company building, and the aerospace industry.</h1>
        <p className="text-zinc-400 mt-8">
          All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.
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

function Articles({ articles }: Readonly<{ articles?: { titles?: string, dateMillis?: string, content?: string, slug?: string }[] }>) {
  const isNotEmpty = (articles?.length ?? 0) > 0;

  return isNotEmpty ? (
    <div className="flex flex-col gap-10">
      {articles?.map((article, index) => (
        <Article key={`${article.titles}-${index}`} article={article} />
      ))}
    </div>
  ) : <></>;
}