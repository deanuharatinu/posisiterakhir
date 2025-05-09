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
        <div className="flex flex-row justify-between items-center">
          <h1 className="font-bold text-2xl">
            Articles
          </h1>
          <button className="flex flex-row items-center gap-2 bg-blue-500 font-bold py-3 px-4 rounded-lg cursor-pointer hover:bg-blue-400 transition-colors">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </span>Add new
          </button>
        </div>

        <div className="mt-10 flex flex-col">
          <form className="relative">
            <input
              placeholder="Search"
              maxLength={32}
              className="min-w-full bg-neutral-700 rounded-lg py-3 px-3 text-sm text-neutral-300 focus:bg-transparent focus:ring-2 focus:ring-blue-500 outline-none transition"
            />
            <button className="absolute right-4 top-1/2 -translate-y-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </button>
          </form>
          <div className="overflow-x-auto mt-4">
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
