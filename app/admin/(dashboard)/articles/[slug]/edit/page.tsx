import Link from "next/link"
import { fetchArticle } from "./actions"
import Article from "./Article"

export default async function Page(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params
  const slug = params.slug

  const article = await fetchArticle(slug)

  return (
    <div>
      <h1 className="text-xl font-bold mb-4 ml-2">
        Admin &gt; <span>
          <Link
            className="hover:text-blue-400 transition-colors"
            href={'/admin/articles'}>Articles</Link>
        </span> &gt; Edit
      </h1>
      <Article article={article} />
    </div>
  )
}