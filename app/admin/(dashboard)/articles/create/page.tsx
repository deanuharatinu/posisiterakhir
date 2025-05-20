import Link from "next/link";
import CreateArticle from "./CreateArticle";

export default function Page() {
  return (
    <div>
      <h1 className="text-xl font-bold mb-4 ml-2">
        Admin &gt; <span>
          <Link
            className="hover:text-blue-400 transition-colors"
            href={'/admin/articles'}>Articles</Link>
        </span> &gt; Create
      </h1>
      <CreateArticle />
    </div>
  )
}