import { createClient } from "@/app/utils/supabase/server"
import { notFound } from "next/navigation"

export const dynamic = 'force-dynamic'

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const supabase = await createClient()
  const { data, error } = await supabase
    .from('articles')
    .select()
    .eq('published', true)
    .eq('slug', slug)

  if (error || data.length == 0) {
    console.log(error)
    notFound()
  }

  return (
    <div>My Post: {slug}</div>
  )
}