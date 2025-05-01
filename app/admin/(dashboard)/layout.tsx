import { createClient } from "@/app/utils/supabase/server"
import { redirect } from "next/navigation"

export default async function DashboardLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/admin/login')
  }

  return (
    <>
      {children}
    </>
  )
}