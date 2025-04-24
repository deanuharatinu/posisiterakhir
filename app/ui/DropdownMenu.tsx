'use client'

import clsx from "clsx";
import Link from "next/link";
import { useEffect, useRef, useState } from "react"

export default function DropdownMenu({ menus }: Readonly<{ menus: { name: string; href: string }[] }>) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <div ref={dropdownRef}>
      <div className="mx-4">
        <button
          type="button"
          className="text-sm inline-flex items-center gap-x-1.5 px-4 py-2.5 bg-zinc-800 rounded-full shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-700/90 transition duration-300 hover:ring-zinc-500 cursor-pointer"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={() => setIsOpen(!isOpen)}
        >
          Menu
          <svg className="-mr-1 size-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
            <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" />
          </svg>
        </button>
      </div>

      <div
        className={`absolute z-1 left-4 right-4 mt-4 rounded-xl bg-zinc-800 shadow-lg ring-1 ring-black/5 focus:outline-none transition ease-out duration-100 transform
           ${isOpen
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
          }`}
      >
        <p className="text-sm text-zinc-400 mx-6 mt-5">
          Navigation
        </p>
        <ul className="flex flex-col gap-2 mx-6 my-6">
          {
            menus.map((menu, index) => (
              <li key={menu.name}>
                <Link className=
                  {
                    clsx(
                      "text-zinc-300 block py-2 transition duration-300 hover:text-cyan-500",
                      {
                        "border-b-2 border-zinc-700/30": index != (menus.length - 1),
                      }
                    )
                  }
                  href={menu.href}
                  onClick={() => setIsOpen(false)}
                >{menu.name}</Link>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}