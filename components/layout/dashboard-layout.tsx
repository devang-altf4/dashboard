"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import {
  FileText,
  Sparkles,
  KeyRound,
  BarChart,
  Layers,
  Import,
  Link2,
  Puzzle,
  CreditCard,
  HelpCircle,
  User,
  ChevronDown,
} from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [open, setOpen] = useState(true)
  const [mounted, setMounted] = useState(false)

  // Set mounted to true on client side
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <SidebarProvider defaultOpen={true}>
      <Sidebar className="border-r border-purple-800/50 bg-sidebar">
        <SidebarHeader className="py-4 px-3 border-b border-purple-800/30">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-8 w-8 rounded-md bg-purple-600 flex items-center justify-center flex-shrink-0">
              <span className="text-sm font-bold text-white">a</span>
            </div>
            <span className="text-lg font-bold text-white">abun</span>
          </div>
          <div className="flex items-center gap-2 p-2 rounded-md hover:bg-purple-800/20 transition-colors cursor-pointer">
            <div className="h-6 w-6 rounded-full bg-purple-500 flex items-center justify-center flex-shrink-0">
              <span className="text-xs text-white">a</span>
            </div>
            <span className="text-sm text-white">amazon.com</span>
            <ChevronDown className="ml-auto h-4 w-4 text-gray-400" />
          </div>
        </SidebarHeader>
        <SidebarContent className="overflow-auto py-2">
          <SidebarGroup>
            <SidebarMenu>
              {/* Articles section */}
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === "/articles"}
                  className="text-white hover:bg-purple-800/20 transition-colors"
                >
                  <Link href="/articles" className="flex items-center gap-2 px-3 py-2">
                    <FileText className="size-4 flex-shrink-0" />
                    <span>Articles</span>
                    <ChevronDown className="ml-auto h-4 w-4 text-gray-400" />
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild className="text-white hover:bg-purple-800/20 transition-colors">
                  <Link href="/create-article" className="flex items-center gap-2 px-3 py-2 pl-9">
                    <span>Create Article</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild className="text-white hover:bg-purple-800/20 transition-colors">
                  <Link href="/generated-articles" className="flex items-center gap-2 px-3 py-2 pl-9">
                    <span>Generated Articles</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarSeparator className="my-2 bg-purple-800/30" />

              {/* Keyword section */}
              <SidebarMenuItem>
                <SidebarMenuButton asChild className="text-white hover:bg-purple-800/20 transition-colors">
                  <Link href="/keyword-projects" className="flex items-center gap-2 px-3 py-2">
                    <KeyRound className="size-4 flex-shrink-0" />
                    <span>Keyword Projects</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild className="text-white hover:bg-purple-800/20 transition-colors">
                  <Link href="/keyword-to-article" className="flex items-center gap-2 px-3 py-2">
                    <BarChart className="size-4 flex-shrink-0" />
                    <span>Keyword to Article</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild className="text-white hover:bg-purple-800/20 transition-colors">
                  <Link href="/steal-competitor-keyword" className="flex items-center gap-2 px-3 py-2">
                    <Layers className="size-4 flex-shrink-0" />
                    <span>Steal Competitor Keyword</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild className="text-white hover:bg-purple-800/20 transition-colors">
                  <Link href="/import-keyword" className="flex items-center gap-2 px-3 py-2">
                    <Import className="size-4 flex-shrink-0" />
                    <span>Import Keyword from CSV</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarSeparator className="my-2 bg-purple-800/30" />

              {/* Tools section */}
              <SidebarMenuItem>
                <SidebarMenuButton asChild className="text-white hover:bg-purple-800/20 transition-colors">
                  <Link href="/auto-blog" className="flex items-center gap-2 px-3 py-2">
                    <Sparkles className="size-4 flex-shrink-0" />
                    <span>Auto Blog</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild className="text-white hover:bg-purple-800/20 transition-colors">
                  <Link href="/internal-links" className="flex items-center gap-2 px-3 py-2">
                    <Link2 className="size-4 flex-shrink-0" />
                    <span>Internal Links</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild className="text-white hover:bg-purple-800/20 transition-colors">
                  <Link href="/free-backlinks" className="flex items-center gap-2 px-3 py-2">
                    <Puzzle className="size-4 flex-shrink-0" />
                    <span>Free Backlinks</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarSeparator className="my-2 bg-purple-800/30" />

              {/* Account section */}
              <SidebarMenuItem>
                <SidebarMenuButton asChild className="text-white hover:bg-purple-800/20 transition-colors">
                  <Link href="/subscription" className="flex items-center gap-2 px-3 py-2">
                    <CreditCard className="size-4 flex-shrink-0" />
                    <span>Subscription</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild className="text-white hover:bg-purple-800/20 transition-colors">
                  <Link href="/help-center" className="flex items-center gap-2 px-3 py-2">
                    <HelpCircle className="size-4 flex-shrink-0" />
                    <span>Help Center</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild className="text-white hover:bg-purple-800/20 transition-colors">
                  <Link href="/profile" className="flex items-center gap-2 px-3 py-2">
                    <User className="size-4 flex-shrink-0" />
                    <span>Profile</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
        <SidebarRail />
      </Sidebar>
      <SidebarInset>
        <div className="flex flex-col min-h-screen bg-background">
          <header className="flex h-14 lg:h-16 items-center gap-4 border-b border-purple-800 bg-card px-6">
            <SidebarTrigger className="text-secondary hover:bg-primary/20" />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-lg font-semibold ml-2 text-white"
            >
              Articles
            </motion.div>
          </header>
          <main className="flex-1 p-6">
            {mounted && (
              <AnimatePresence mode="wait">
                <motion.div
                  key={pathname}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  {children}
                </motion.div>
              </AnimatePresence>
            )}
          </main>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
