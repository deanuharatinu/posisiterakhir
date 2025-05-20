'use client'

import { Article as ArticleModel } from "@/app/lib/models/article.model"
import { formatTimestampToDate } from "@/app/utils/utils"
import MDEditor from "@uiw/react-md-editor"

export default function Article({ article }: { article: ArticleModel }) {
  return (
    <div className="flex justify-center">
      <div className="flex-auto px-6 lg:max-w-3xl">
        <div className="flex flex-row items-center">
          <div className="bg-neutral-700 w-0.5 rounded-2xl h-5"></div>
          <p className="text-neutral-500 ml-3">
            {formatTimestampToDate(article.createdAt)}
          </p>
        </div>

        <h1 className="font-bold text-5xl mt-8">
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
  )
}

