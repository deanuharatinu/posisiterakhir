'use server'

import { getPublishedArticleBySlug } from "@/app/data/data"

export async function getArticle(slug: string) {
  const result = await getPublishedArticleBySlug(slug)

  return result
}