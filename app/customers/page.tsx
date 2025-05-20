import { Suspense } from "react"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DataTable } from "@/components/dashboard/data-table"
import { customerColumns } from "@/components/dashboard/customer-columns"
import { TableSkeleton } from "@/components/dashboard/table-skeleton"

export default function CustomersPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Customers" text="View and manage customer information."></DashboardHeader>
      <Suspense fallback={<TableSkeleton />}>
        <DataTable columns={customerColumns} />
      </Suspense>
    </DashboardShell>
  )
}
