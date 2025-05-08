import AdminArticles from "./AdminArticles"
import Pagination from "./Pagination";

const articles = [
  {
    id: "123123",
    title: "Sebuah Title",
    lastUpdate: "12-12-2024",
    published: "yes",
  },
  {
    id: "123123",
    title: "Sebuah Title",
    lastUpdate: "12-12-2024",
    published: "yes",
  },
  {
    id: "123123",
    title: "Sebuah Title",
    lastUpdate: "12-12-2024",
    published: "yes",
  },
  {
    id: "123123",
    title: "Sebuah Title",
    lastUpdate: "12-12-2024",
    published: "yes",
  },
  {
    id: "123123",
    title: "Sebuah Title",
    lastUpdate: "12-12-2024",
    published: "yes",
  },
  {
    id: "123123",
    title: "Sebuah Title",
    lastUpdate: "12-12-2024",
    published: "yes",
  },
]

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>
}) {
  const searchParams = await props.searchParams
  const query = searchParams?.query ?? '';
  const currentPage = Number(searchParams?.page) || 1
  const totalPages = 10

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
                <AdminArticles />
              </tbody>
            </table>
          </div>

          <div className="mt-6 self-start">
            <Pagination totalPages={totalPages} />
          </div>
        </div>
      </div>
    </div>
  )
}
