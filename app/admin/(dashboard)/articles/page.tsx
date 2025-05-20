import AdminArticles from "./AdminArticles"
import Pagination from "./Pagination";
import Form from 'next/form'
import { fetchArticlesCount } from "@/app/lib/data";
import Link from "next/link";

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>
}) {
  const searchParams = await props.searchParams
  const query = searchParams?.query ?? '';

  const articlesCount = await fetchArticlesCount(query)

  const limit = 10
  const currentPage = Number(searchParams?.page) || 1
  const totalPages = Math.ceil((articlesCount ?? 1) / limit)

  return (
    < div className="bg-neutral-800 p-6 rounded-2xl">
      <div className="flex flex-col">
        <div className="flex flex-row justify-between items-center">
          <h1 className="font-bold text-2xl">
            Articles
          </h1>
          <Link
            className="flex flex-row items-center gap-2 bg-blue-500 font-bold py-3 px-4 rounded-lg cursor-pointer hover:bg-blue-400 transition-colors"
            href={'/admin/articles/create'}
          >
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </span>Create new
          </Link>
        </div>

        <div className="mt-10 flex flex-col">
          <Form className="relative" action={""}>
            <input
              type="text"
              placeholder="Search"
              defaultValue={query}
              name="query"
              maxLength={32}
              className="min-w-full bg-neutral-700 rounded-lg py-3 px-3 text-sm font-bold text-neutral-300 placeholder:font-normal focus:bg-transparent focus:ring-2 focus:ring-blue-500 outline-none transition"
            />
            <button
              type="submit"
              className="absolute right-4 top-1/2 -translate-y-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </button>
          </Form>
          <div className="overflow-x-auto mt-4">
            <table className="min-w-full divide-y-1 divide-neutral-500">
              <thead className="text-left">
                <tr className="font-medium">
                  <th className="px-3 py-2 whitespace-nowrap">No.</th>
                  <th className="px-3 py-2 whitespace-nowrap">Title</th>
                  <th className="px-3 py-2 whitespace-nowrap">Created At</th>
                  <th className="px-3 py-2 whitespace-nowrap">Last Updated</th>
                  <th className="px-3 py-2 whitespace-nowrap">Published</th>
                  <th className="text-center px-3 py-2 whitespace-nowrap">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-700">
                <AdminArticles query={query} currentPage={currentPage} limit={limit} />
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
