import { AppSidebar } from "@/components/app-sidebar"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function Page({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
      <SidebarTrigger className="" />
        <div className="flex flex-1 flex-col p-6">
        {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
