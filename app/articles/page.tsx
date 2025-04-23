import Article from "./article";

// import data
import articles from "../data/articles.json" assert { type: 'json' };

export default function Page() {
  return (
    <div className="flex flex-col lg:max-w-3xl" >
      <div className="flex flex-col lg:max-w-2xl">
        <h1 className="text-5xl/tight font-bold tracking-tight">Writing about software development, personal thoughts, and life in general.</h1>
        <p className="text-zinc-400 mt-8">
          I've had so many thoughts and reflections that slipped into the void, unnoticed. 
          This time, I'm commited to writing them down. Whether someone finds them useful or not, I just need to put them into words — to settle my own mind.
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