'use client'

import { Article as ArticleModel } from "@/app/data/models/article.model";
import dynamic from "next/dynamic"

const Editor = dynamic(() => import("../../../../../utils/Editor").then((mod) => mod.default), { ssr: false });

export default function Article({ article }: { article: ArticleModel }) {
  return (
    <div className="flex justify-center">
      <div className="flex-auto px-6 lg:max-w-3xl">
        <Editor data={article} readOnly={false} />
      </div>
    </div>
  )
}

