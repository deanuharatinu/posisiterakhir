import { createClient } from "@/app/utils/supabase/server";

export default async function AdminArticles({ currentPage, limit }: { currentPage: number, limit: number }) {
  const supabase = await createClient()

  const from = (currentPage - 1) * limit;
  const to = from + limit
  const { data, error } = await supabase
    .from('articles')
    .select()
    .order('created_at', { ascending: false })
    .range(from, to)

  if (error) {
    console.log(error)
  }

  return (
    <>
      {
        data?.map((article, index) => {
          return (
            <tr key={`${article.id}-${index}`} className="text-neutral-400">
              <td className="px-3 py-4 whitespace-nowrap">{index + 1}</td>
              <td className="px-3 py-4 whitespace-nowrap">{article.title} {index + 1}</td>
              <td className="px-3 py-4 whitespace-nowrap">{article.created_at}</td>
              <td className="px-3 py-4 whitespace-nowrap">{article.published}</td>
              <td className="py-4 flex flex-row gap-x-3 items-center justify-center">
                <p>Edit</p>
                <p>Delete</p>
              </td>
            </tr>
          )
        })
      }
    </>
  )
}