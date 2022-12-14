import { Suspense } from 'react'

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-1">
      <div className="h-full flex-1 bg-white dark:bg-[#2F3136] md:w-[240px] md:flex-none">
        <div></div>
      </div>
      <Suspense fallback={<></>}>{children}</Suspense>
    </div>
  )
}
