import Link from "next/link";

export default function Article() {
  return (

    <div className="border-l-2 border-zinc-700/70 pl-6">
      <article className="grid grid-cols-4">
        <div className="text-sm text-zinc-500">
          June 18, 2024
        </div>
        <div className="col-span-3 flex flex-col rounded-2xl">
          <h2 className="font-bold">
            Make managing dotiles a breeze with Stow
          </h2>
          <p className="my-4 text-sm/relaxed text-zinc-400">
            For the longest time, I managed my dotfiles with copy and paste. It was really inconvenient to recreate my dotfiles over and over again. That was until I discovered GNU Stow. With Stow, I keep my dotfiles in a remote Git repository, and it has changed the way I manage my dotfiles forever.
          </p>
          <div className="flex flex-row items-center">
            <Link
              className="text-sm text-cyan-500"
              href="#">
              Read article
            </Link>
            <svg
              className="ml-1 h-4 w-4 stroke-cyan-500"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path d="M6.75 5.75 9.25 8l-2.5 2.25" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              </path>
            </svg>
          </div>
        </div>
      </article>
    </div>
  )
}