import { Suspense } from "react"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DataTable } from "@/components/dashboard/data-table"
import { productColumns } from "@/components/dashboard/product-columns"
import { TableSkeleton } from "@/components/dashboard/table-skeleton"

export default function ProductsPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Products" text="View and manage your product inventory."></DashboardHeader>
      <Suspense fallback={<TableSkeleton />}>
        <DataTable columns={productColumns} />
      </Suspense>
    </DashboardShell>
  )
}
