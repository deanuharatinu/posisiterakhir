import { createClient } from "@/app/utils/supabase/server"

export async function fetchArticlesCount(query: string) {
  const supabase = await createClient()

  const { count, error } = await supabase
    .from('articles')
    .select(`*`, { count: 'exact', head: true })
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
    .ilike('title', `%${query}%`)
    .order('created_at', { ascending: false })
    .range(offset, offset + limit)


  if (error || data == null) {
    console.log(error)
    return []
  }

  return data
}