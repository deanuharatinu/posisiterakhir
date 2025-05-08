import { createClient } from "@/app/utils/supabase/server"
import { redirect } from "next/navigation"
import NavSideBar from "./NavSideBar"

export default async function DashboardLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/admin/login')
  }

  const activeMenu = true

  return (
    <div className="flex">
      <NavSideBar />

      <div className="w-full">
        {children}
      </div>

    </div>
  )
}