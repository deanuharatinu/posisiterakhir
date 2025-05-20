'use client'

import { Article as ArticleModel } from "@/app/lib/models/article.model";
import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";

export default function ArticleForm({ article, onSubmit }: Readonly<{
  article?: ArticleModel, onSubmit?: React.FormEventHandler<HTMLFormElement>
}>) {
  const [content, setContent] = useState<string>(article?.content ?? "")

  return (
    <div className="flex flex-col bg-neutral-800 p-8 rounded-2xl">
      <form onSubmit={onSubmit} className="flex flex-col">
        <div className="flex flex-col min-w-full mt-2">
          <label htmlFor="article-title" className="font-bold ml-1">
            Title
          </label>
          <input
            id="article-title"
            name="articleTitle"
            type="text"
            placeholder="Input a title..."
            defaultValue={article?.title ?? ""}
            maxLength={100}
            className="mt-3 bg-neutral-700 rounded-lg py-3 px-3 text-base text-neutral-300 placeholder:font-normal focus:bg-transparent focus:ring-2 focus:ring-blue-500 outline-none transition"
          />
        </div>

        <div className="mt-8" data-color-mode="dark">
          <label htmlFor="article-content" className="font-bold ml-1">
            Content
          </label>
          <MDEditor
            id="article-content"
            className="bg-black mt-3"
            value={content}
            visibleDragbar={false}
            height={700}
            onChange={(value) => setContent(value ?? "")}
          />
          <input
            type="hidden"
            name="articleContent"
            value={content}
          />
        </div>

        <div className="flex flex-col min-w-full mt-8">
          <label htmlFor="article-slug" className="font-bold ml-1">
            Slug
          </label>
          <input
            id="article-slug"
            name="articleSlug"
            type="text"
            placeholder="Input a slug..."
            defaultValue={article?.slug ?? ""}
            maxLength={100}
            className="mt-3 bg-neutral-700 rounded-lg py-3 px-3 text-base text-neutral-300 placeholder:font-normal focus:bg-transparent focus:ring-2 focus:ring-blue-500 outline-none transition"
          />
        </div>

        <div className="flex flex-row mt-8">
          <label htmlFor="article-published" className="font-bold ml-1">
            Published
          </label>
          <input type="checkbox"
            id="article-published"
            name="articlePublished"
            className="ml-4"
            defaultChecked={article?.published ?? false}
          />
        </div>

        <button
          type="submit"
          className="mt-6 self-end bg-blue-500 px-6 py-2 font-bold rounded-xl cursor-pointer hover:bg-blue-400 transition-colors">
          Save
        </button>
      </form>
    </div>
  );
}

