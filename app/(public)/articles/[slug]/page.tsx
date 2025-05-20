import { notFound } from "next/navigation"
import Article from "./Article"
import { fetchArticleBySlug } from "@/app/lib/data"

export const dynamic = 'force-dynamic'

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const article = await fetchArticleBySlug(slug)
  if (article == null) {
    notFound()
  }

  return (
    <div>
      <Article article={article} />
    </div>
  )
}