'use server'

import { createClient } from "@/app/utils/supabase/server"
import { Article } from "./models/article.model"

export async function fetchArticlesCount(query: string) {
  const supabase = await createClient()

  const { count, error } = await supabase
    .from('articles')
    .select(`*`, { count: 'exact', head: true })
    .eq('is_deleted', false)
    .ilike('title', `%${query}%`)

  if (error || count == null) {
    console.log(error)
    return 0
  }

  return count
}

export async function fetchArticles(offset: number, limit: number, query: string) {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('articles')
    .select()
    .eq('is_deleted', false)
    .ilike('title', `%${query}%`)
    .order('created_at', { ascending: false })
    .range(offset, offset + limit)

  if (error || data == null) {
    console.log(error)
    return []
  }

  return data
}

export async function deleteArticleById(articleId: string) {
  const supabase = await createClient()

  const { status, error } = await supabase
    .from('articles')
    .update({ is_deleted: 'TRUE' })
    .eq('id', articleId)

  if (error || status != 204) {
    console.log(error)
    return false
  }

  return true
}

export async function getPublishedArticleBySlug(slug: string) {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('articles')
    .select()
    .eq('is_deleted', false)
    .eq('published', true)
    .eq('slug', slug)

  if (error || data.length == 0) {
    console.log(error)
    return null
  }

  const article: Article[] = data
  return article[0]
}