import { Suspense } from "react"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DataTable } from "@/components/dashboard/data-table"
import { articleColumns } from "@/components/dashboard/article-columns"
import { TableSkeleton } from "@/components/dashboard/table-skeleton"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DashboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Articles" text="Manage and monitor your content."></DashboardHeader>
      <Tabs defaultValue="generated" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger
            value="generated"
            className="text-white data-[state=active]:bg-primary data-[state=active]:text-white"
          >
            Generated Articles
          </TabsTrigger>
          <TabsTrigger
            value="published"
            className="text-white data-[state=active]:bg-primary data-[state=active]:text-white"
          >
            Published Articles
          </TabsTrigger>
          <TabsTrigger
            value="scheduled"
            className="text-white data-[state=active]:bg-primary data-[state=active]:text-white"
          >
            Scheduled Articles
          </TabsTrigger>
          <TabsTrigger
            value="archived"
            className="text-white data-[state=active]:bg-primary data-[state=active]:text-white"
          >
            Archived Articles
          </TabsTrigger>
        </TabsList>
        <TabsContent value="generated">
          <Suspense fallback={<TableSkeleton />}>
            <DataTable columns={articleColumns} />
          </Suspense>
        </TabsContent>
        <TabsContent value="published">
          <Suspense fallback={<TableSkeleton />}>
            <DataTable columns={articleColumns} />
          </Suspense>
        </TabsContent>
        <TabsContent value="scheduled">
          <Suspense fallback={<TableSkeleton />}>
            <DataTable columns={articleColumns} />
          </Suspense>
        </TabsContent>
        <TabsContent value="archived">
          <Suspense fallback={<TableSkeleton />}>
            <DataTable columns={articleColumns} />
          </Suspense>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}
