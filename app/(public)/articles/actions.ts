import { fetchPublishedArticles } from "@/app/lib/data";

export async function getArticles() {
  const result = await fetchPublishedArticles(0, 10)
  return result
}