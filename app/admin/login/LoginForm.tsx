'use client';

import Image from "next/image";
import React, { useActionState, useRef, useState } from "react";
import { login } from "./actions";

const initialState = {
  errors: ''
}

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [state, formAction] = useActionState(login, initialState)
  console.log(state)

  const passwordRef = useRef<HTMLInputElement>(null)

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      passwordRef.current?.focus();
    }
  }

  return (
    <div className="bg-zinc-800 px-5 py-6 rounded-lg shadow-[6px_6px_30px_rgba(63,63,70,0.7)]">
      <div className="flex flex-col justify-center items-center">
        <div className="w-[40px] rounded-full ring">
          <Image src="/favicon.png" alt="posisi" width={40} height={40} />
        </div>
        <h1 className="text-xl font-bold mt-2.5">
          Login to your account
        </h1>
      </div>
      <form action={formAction}>
        <div className="flex flex-col w-[300px] gap-6 mt-8">
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email address"
            maxLength={32}
            onKeyDown={handleKeyDown}
            required
            className="ring-1 bg-zinc-900 ring-zinc-700 p-2.5 rounded-md text-sm focus:ring-2 focus:ring-cyan-900 outline-none"
          />

          <div className="relative">
            <input
              id="password"
              name="password"
              placeholder="Password"
              maxLength={32}
              required
              ref={passwordRef}
              className="w-full ring-1 bg-zinc-900 ring-zinc-700 p-2.5 rounded-md text-sm focus:ring-2 focus:ring-cyan-900 outline-none"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 items-center flex pr-3 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {
                showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                )
              }
            </button>
          </div>

          <button
            type="submit"
            className="text-sm font-bold bg-zinc-900/70 py-3 mt-6 rounded-lg cursor-pointer hover:bg-zinc-900 transition duration-100 inline-flex items-center justify-center gap-2"
          >
            Login
          </button>
        </div>
      </form>
    </div >
  )
}