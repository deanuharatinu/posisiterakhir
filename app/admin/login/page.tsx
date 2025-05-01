'use client'

import createClient from "@/app/utils/supabase/client";
import LoginForm from "./LoginForm";
import { useEffect } from "react";
import { redirect } from "next/navigation";

export default function Page() {
  const supabase = createClient()

  useEffect(() => {
    const fetchUser = async () => {
      const user = await supabase.auth.getUser()

      if (user.data.user) {
        redirect('/admin')
      }
    }

    fetchUser()
  }, [])

  return (
    <div className="flex justify-center items-center h-screen">
      <LoginForm />
    </div >
  )
}
