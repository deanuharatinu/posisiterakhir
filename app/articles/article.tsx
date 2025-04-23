import { formatMillisToDate } from "../utils/utils";

export default function Articles({ article }: Readonly<{ article: { title?: string, dateMillis?: string, content?: string, slug?: string } }>) {
  return (
    <div className="md:border-l-2 md:border-zinc-700/70 md:pl-6">
      <article className="md:grid md:grid-cols-4 md:items-baseline">
        <div className="md:col-span-3 group relative flex flex-col">
          <h2 className="text-base font-semibold tracking-tight text-zinc-100">
            <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl bg-zinc-800/50">
            </div>
            <a href="/articles/make-managing-dotfiles-a-breeze-with-stow">
              <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
              <span className="relative z-10">{article.title}</span>
            </a>
          </h2>

          <time className="md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5" dateTime="2024-06-18">
            <span className="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
              <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
            </span>
            {formatMillisToDate(article.dateMillis)}
          </time>

          <p className="relative z-10 mt-2 text-sm/relaxed text-zinc-600 dark:text-zinc-400">
            {article.content}
          </p>

          <div aria-hidden="true" className="relative z-10 mt-4 flex items-center text-sm font-medium text-cyan-500">
            Read article
            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="ml-1 h-4 w-4 stroke-current">
              <path d="M6.75 5.75 9.25 8l-2.5 2.25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </div>
        </div>
        <time className="mt-1 hidden md:block relative z-10 order-first mb-3 items-center text-sm text-zinc-400 dark:text-zinc-500" dateTime="2024-06-18">
          {formatMillisToDate(article.dateMillis)}
        </time>
      </article>
    </div>
  )
}