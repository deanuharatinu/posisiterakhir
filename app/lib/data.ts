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

export async function fetchPublishedArticleBySlug(slug: string) {
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

export async function fetchArticleBySlug(slug: string) {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('articles')
    .select()
    .eq('is_deleted', false)
    .eq('slug', slug)

  if (error || data.length == 0) {
    console.log(error)
    return null
  }

  const article: Article[] = data
  return article[0]
}

export async function fetchPublishedArticles(offset: number, limit: number): Promise<Article[]> {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('articles')
    .select()
    .eq('is_deleted', false)
    .order('created_at', { ascending: false })
    .range(offset, offset + limit)

  if (error || data.length == 0) {
    console.log(error)
    return []
  }


  const result = data.map((item) => {
    return {
      id: item.id ?? "",
      title: item.title ?? "",
      createdAt: item.created_at ?? "",
      content: item.content ?? "",
      updatedAt: item.updated_at ?? "",
      slug: item.slug ?? ""
    } as Article
  })

  return result
}

export async function editArticleById(article: Article) {
  const supabase = await createClient()

  const updateAt = new Date().toISOString()
  const { status, error } = await supabase
    .from('articles')
    .update({
      title: article.title,
      content: article.content,
      published: article.published,
      slug: article.slug,
      updated_at: updateAt,
    })
    .eq('id', article.id)

  if (error || status != 204) {
    console.log(error)
    return false
  }

  return true
}

export async function createNewArticle(article: Article) {
  const supabase = await createClient()

  const createdAt = new Date().toISOString()
  const { status, error } = await supabase
    .from('articles')
    .insert({
      title: article.title,
      content: article.content,
      slug: article.slug,
      published: article.published,
      created_at: createdAt,
    })

  if (error || status != 201) {
    console.log(error)
    return false
  }

  return true
}