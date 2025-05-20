'use client'

import { Article as ArticleModel } from "@/app/lib/models/article.model"
import { formatTimestampToDate } from "@/app/utils/utils"
import MDEditor from "@uiw/react-md-editor"
import { useRouter } from "next/navigation"

export default function Article({ article }: { article: ArticleModel }) {
  const router = useRouter()

  const handleBackClick = () => {
    router.back()
  }

  return (
    <div className="flex -mt-6 md:-mt-14 justify-center">
      <div className="relative flex flex-col w-full xl:flex-row lg:max-w-3xl">
        <button
          onClick={handleBackClick}
          className="xl:absolute group w-9 xl:h-9 xl:-inset-x-20 xl:-inset-y-2 p-3 hover:ring-1 hover:ring-zinc-700 bg-zinc-800 rounded-3xl cursor-pointer transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3 stroke-neutral-400 group-hover:stroke-zinc-200">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
        </button>

        <div className="mt-10 xl:mt-0 xl:w-full">
          <div className="flex flex-row items-center">
            <div className="bg-neutral-700 w-0.5 rounded-2xl h-5"></div>
            <p className="text-neutral-500 ml-3">
              {formatTimestampToDate(article.createdAt)}
            </p>
          </div>

          <h1 className="font-bold text-3xl md:text-5xl mt-8">
            {article?.title}
          </h1>
          <div className="mt-10">
            <MDEditor.Markdown
              source={article.content}
              style={{ backgroundColor: 'transparent' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

