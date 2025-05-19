import Link from "next/link";
import { InnerContainer } from "./container";

// import data
import { menus } from "../lib/static/menus";

export default function Footer() {
  return (
    <InnerContainer className="mt-32 border-t-1 border-zinc-700/60">
      <footer className="flex flex-col gap-5 sm:flex-row items-center text-center sm:text-start pt-10 pb-16">
        <ul className="flex flex-auto gap-6 text-sm">
          {
            menus.map((link) => (
              <li key={link.name}>
                <Link
                  className="relative py-2 transition duration-300 hover:text-cyan-500"
                  href={link.href}>{link.name}</Link>
              </li>
            ))
          }
        </ul>
        <p className="text-sm text-zinc-500/80">
          © 2025 Deanu Haratinu
        </p>
      </footer>
    </InnerContainer>
  );
}