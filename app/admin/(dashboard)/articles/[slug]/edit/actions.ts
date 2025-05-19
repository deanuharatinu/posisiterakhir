'use server'

import { State } from "@/app/lib/actions"
import { editArticleById, getArticleBySlug } from "@/app/lib/data"
import { Article } from "@/app/lib/models/article.model"

export async function getArticle(slug: string): Promise<Article> {
  const result = await getArticleBySlug(slug)

  const article: Article = {
    id: result?.id ?? "",
    title: result?.title ?? "",
    dateMillis: result?.dateMillis ?? "",
    content: result?.content ?? "",
    slug: result?.slug ?? "",
    published: result?.published ?? false,
  }

  return article
}

export async function editArticle(id: string, prevState: State, formData: FormData): Promise<State> {
  const article: Article = {
    id: id,
    title: formData.get('articleTitle') as string,
    content: formData.get('articleContent') as string,
    slug: formData.get('articleSlug') as string,
    published: formData.get('articlePublished') !== null,
  }

  const result = await editArticleById(article)
  if (!result) {
    return {
      success: false,
      errors: "error occured"
    }
  }

  return {
    success: true
  }
}