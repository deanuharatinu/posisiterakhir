'use client'

import clsx from "clsx"
import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"

export default function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const currentPage = Number(searchParams.get('page')) || 1

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams)
    params.set('page', pageNumber.toString())
    return `${pathname}?${params.toString()}`
  }

  return (
    <ul className="flex justify-center gap-1 text-gray-900">
      {/* previous */}
      <li>
        <button
          className=
          {
            clsx(
              "grid size-8 place-content-center",
              currentPage == 1 ? "cursor-not-allowed" : "cursor-pointer hover:rounded-lg hover:bg-neutral-500 hover:transition-colors"
            )
          }
          aria-label="Previous page"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={
              clsx(
                "size-4",
                currentPage == 1 ? "fill-neutral-600" : "fill-neutral-300"
              )
            }

            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </li>

      {
        Array.from({ length: totalPages }, (_, i) => {
          return (
            <PaginationNumber key={i}
              isActive={currentPage == (i + 1)}
              position={i}
              href={createPageURL(i + 1)}
            />
          )
        })
      }

      {/* Next */}
      <li>
        <button
          className=
          {
            clsx(
              "grid size-8 place-content-center",
              currentPage == totalPages ? "cursor-not-allowed" : "cursor-pointer hover:rounded-lg hover:bg-neutral-500 hover:transition-colors"
            )
          }
          aria-label="Next page"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className=
            {
              clsx(
                "size-4",
                currentPage == totalPages ? "fill-neutral-600" : "fill-neutral-300"
              )
            }
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </li>
    </ul>
  )
}

function PaginationNumber({ position, isActive, href }: { position: number, isActive: boolean, href: string }) {
  return (
    <li>
      <Link
        href={href}
        className=
        {
          clsx(
            "flex size-8 rounded-lg cursor-pointer items-center justify-center",
            isActive ? "bg-blue-500 text-white" : "text-neutral-400 hover:rounded-lg hover:bg-neutral-500 hover:text-white transition-colors"
          )
        }
      >
        {position + 1}
      </Link>
    </li>
  )
}