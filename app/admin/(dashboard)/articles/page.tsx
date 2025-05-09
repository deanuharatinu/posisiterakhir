import { createClient } from "@/app/utils/supabase/server";
import AdminArticles from "./AdminArticles"
import Pagination from "./Pagination";

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>
}) {
  const supabase = await createClient()
  const { count, error } = await supabase
    .from('articles')
    .select(`*`, { count: 'exact', head: true })

  const searchParams = await props.searchParams
  // const query = searchParams?.query ?? '';
  const currentPage = Number(searchParams?.page) || 1
  const limit = 10
  const totalPages = Math.ceil((count ?? 1) / limit)

  return (
    <div className="bg-neutral-800 p-6 rounded-2xl">
      <div className="flex flex-col">
        <h1 className="font-bold text-2xl">
          Articles
        </h1>

        <div className="mt-10 flex flex-col">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y-1 divide-neutral-500">
              <thead className="text-left">
                <tr className="font-medium">
                  <th className="px-3 py-2 whitespace-nowrap">No.</th>
                  <th className="px-3 py-2 whitespace-nowrap">Title</th>
                  <th className="px-3 py-2 whitespace-nowrap">Last Updated</th>
                  <th className="px-3 py-2 whitespace-nowrap">Published</th>
                  <th className="text-center px-3 py-2 whitespace-nowrap">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-700">
                <AdminArticles currentPage={currentPage} limit={limit} />
              </tbody>
            </table>
          </div>

          <div className="mt-6 self-start">
            {
              currentPage <= totalPages ?
                <Pagination totalPages={totalPages} />
                :
                <div className="mt-6"></div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}
