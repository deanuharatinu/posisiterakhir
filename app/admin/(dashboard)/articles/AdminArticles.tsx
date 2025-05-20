import ArticleItem from "./ArticleItem";
import { fetchArticles } from "@/app/lib/data";

export default async function AdminArticles({ query, currentPage, limit }: { query: string, currentPage: number, limit: number }) {
  const offset = (currentPage - 1) * limit;
  const articles = await fetchArticles(offset, limit, query)

  return (
    <>
      {
        articles?.map((article, index) => {
          return (
            <ArticleItem key={`${article.id}-${index}`} article={article} index={index} />
          )
        })
      }
    </>
  )
}