import { createClient } from "@/app/utils/supabase/server"
import { redirect } from "next/navigation"
import NavSideBar from "./NavSideBar"

export default async function DashboardLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/admin/login')
  }

  return (
    <div className="flex min-h-screen flex-row">
      <div className="fixed md:w-[16rem]">
        <NavSideBar />
      </div>

      <div className="md:ml-[16rem] flex-grow p-12">
        {children}
      </div>

    </div>
  )
}