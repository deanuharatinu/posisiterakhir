'use client'

import clsx from "clsx"
import { usePathname } from "next/navigation"
import { logout } from "../admin/(dashboard)/actions"

const dashboardMenus = [
  {
    name: "Articles",
    link: "/admin/articles"
  }
]

export default function AdminNavSideBar() {
  const pathname = usePathname()

  return (
    <div className="hidden md:block bg-neutral-800">
      <div className="flex h-screen flex-col justify-between  border-r-1 border-zinc-600">
        <div className="px-4 py-6">
          <h1 className="text-xl font-bold">
            Dashboard
          </h1>

          <ul className="mt-6 space-y-1">
            {
              dashboardMenus.map((menu, index) => {
                return (
                  <li key={`${menu.name}-${index}`}>
                    <a
                      href={`${menu.link}`}
                      className={
                        clsx(
                          "block px-4 py-2 text-base font-bold  hover:text-white rounded-lg hover:bg-neutral-600 transition-colors",
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

            <li className="block h-[2px] bg-neutral-700 rounded-md my-3"></li>

            <li>
              <button
                className="w-full px-4 py-2 text-base font-bold text-start hover:text-white rounded-lg hover:bg-neutral-600 transition-colors cursor-pointer"
                onClick={async () => {
                  await logout()
                }}
              >
                Sign Out
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}