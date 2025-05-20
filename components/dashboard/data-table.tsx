"use client"

import { useState, useEffect } from "react"
import {
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DataTableViewOptions } from "./data-table-view-options"
import { getTableData } from "@/lib/data"
import { motion, AnimatePresence } from "framer-motion"
import { Search } from "lucide-react"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
}

export function DataTable<TData, TValue>({ columns }: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = useState({})
  const [mounted, setMounted] = useState(false)

  // Set mounted to true on client side
  useEffect(() => {
    setMounted(true)
  }, [])

  // Get data based on the columns type
  const data = getTableData(columns) as TData[]

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  // Determine the filter field based on the first column that's not a selection column
  const filterField = "title"

  if (!mounted) {
    return <div className="h-[400px] animate-pulse-slow bg-muted/50 rounded-md"></div>
  }

  return (
    <motion.div className="space-y-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <motion.div
        className="flex items-center justify-between"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <div className="flex flex-1 items-center space-x-2 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary" />
          <Input
            placeholder="Search for Title & Keywords..."
            value={(table.getColumn(filterField)?.getFilterValue() as string) ?? ""}
            onChange={(event) => table.getColumn(filterField)?.setFilterValue(event.target.value)}
            className="max-w-sm pl-10 bg-muted border-purple-800 focus:border-secondary focus:ring-secondary text-white"
          />
        </div>
        <DataTableViewOptions table={table} />
      </motion.div>
      <motion.div
        className="rounded-md border border-purple-800 overflow-hidden bg-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="bg-primary/20 border-b border-purple-800">
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="text-white font-medium">
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            <AnimatePresence>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row, i) => (
                  <motion.tr
                    key={row.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="border-b border-purple-800/50 hover:bg-primary/10 data-[state=selected]:bg-primary/20 transition-all duration-200 text-white"
                    data-state={row.getIsSelected() && "selected"}
                    whileHover={{
                      backgroundColor: "rgba(138, 43, 226, 0.2)",
                      scale: 1.01,
                      transition: { duration: 0.2 },
                    }}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id} className="text-white">
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    ))}
                  </motion.tr>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={columns.length} className="h-24 text-center text-white">
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </AnimatePresence>
          </TableBody>
        </Table>
      </motion.div>
      <div className="flex items-center justify-between">
        <div className="text-sm text-white">
          Total 9 Article Titles | Show
          <select className="mx-2 bg-muted border-purple-800 text-white rounded">
            <option>10</option>
            <option>20</option>
            <option>50</option>
          </select>
          entries per page
        </div>
        <div className="text-white">1 / 1</div>
      </div>
    </motion.div>
  )
}
