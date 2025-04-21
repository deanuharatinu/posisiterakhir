'use client';

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Articles", href: "/articles" },
  { name: "Projects", href: "/projects" },
]

export default function NavBar({ className = '' }: Readonly<{ className?: string }>) {
  const pathname = usePathname();

  return (
    <header className={`${className}`}>
      <div className="flex">
        <div className="flex flex-1 cursor-pointer" >
          <div className="w-[40px] bg-zinc-800 rounded-full shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-700/90 hover:ring-zinc-500 transition duration-300">
            <img src="../favicon.ico" alt="profile" />
          </div>
        </div>

        <div className="flex flex-auto justify-center items-center">
          <div className="bg-zinc-800 rounded-full shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-700/90 backdrop-blur overflow-hidden">
            <ul className="flex gap-1 text-sm mx-2">
              {
                links.map((link) => (
                  <li key={link.name}>
                    <Link className=
                      {
                        clsx(
                          "relative block px-4 py-2 transition duration-300 hover:text-cyan-500",
                          {
                            "text-cyan-500 after:absolute after:left-0 after:top-9 after:h-1 after:w-full after:bg-blue-400 after:blur-md": pathname === link.href,
                          }
                        )
                      }
                      href={link.href}>{link.name}</Link>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>

        <div className="flex justify-end flex-1">
          <div className="bg-zinc-800 rounded-full shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-700/90 hover:ring-zinc-500 transition duration-300">
            <button className="px-2 py-2 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}