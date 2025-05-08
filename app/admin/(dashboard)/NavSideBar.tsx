'use client'

import clsx from "clsx"
import { usePathname } from "next/navigation"

const dashboardMenus = [
  {
    name: "Articles",
    link: "/admin/articles"
  },
  {
    name: "User",
    link: "/admin/users"
  }
]

export default function NavSideBar() {
  const pathname = usePathname()

  return (
    <div className="w-xs bg-neutral-800">
      <div className="flex h-screen flex-col justify-between  border-r-1 border-zinc-600">
        <div className="px-4 py-6">
          <h1 className="text-xl font-bold">
            Dashboard
          </h1>

          <ul className="mt-6 space-y-1">
            {
              dashboardMenus.map((menu, index) => {
                return (
                  <li key={`${menu}-${index}`}>
                    <a
                      href={`${menu.link}`}
                      className={
                        clsx(
                          "block px-4 py-2 text-sm font-bold  hover:text-white rounded-lg hover:bg-neutral-600 transition-colors",
                          pathname == menu.link ? "text-cyan-500" : "text-neutral-400"
                        )
                      }
                    >
                      {menu.name}
                    </a>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </div>
  )
}