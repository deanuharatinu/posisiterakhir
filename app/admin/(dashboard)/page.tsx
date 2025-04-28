import { redirect } from "next/navigation";

export default function Page() {
  const isLogin = false;

  if (!isLogin) {
    return redirect('/admin/login')
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        Admin Page
      </div>
    </div>
  )
}