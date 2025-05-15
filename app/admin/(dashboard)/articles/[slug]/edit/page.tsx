import { getArticle } from "./actions"
import Article from "./Article"

export default async function Page(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params
  const slug = params.slug

  let result = await getArticle(slug)
  if (result) {
    console.log(result)
  }

  let json = {}
  try {
    json = JSON.parse(result?.content ?? '');
  } catch (error) {
    console.error("Failed to parse article content:", error);
    json = {};
  }


  return (
    <div className="">
      <Article article={json} />
    </div>
  )
}