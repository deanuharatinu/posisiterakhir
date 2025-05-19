import { getArticle } from "./actions"
import Article from "./Article"

export default async function Page(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params
  const slug = params.slug

  const article = await getArticle(slug)

  return (
    <div>
      <Article article={article} />
    </div>
  )
}