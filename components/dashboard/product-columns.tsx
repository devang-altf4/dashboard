"use client"

import type { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { motion } from "framer-motion"

// This type is used to define the shape of our data.
export type Product = {
  id: string
  name: string
  status: "in-stock" | "low-stock" | "out-of-stock"
  inventory: number
  price: number
  vendor: string
  thumbnail: string
}

export const productColumns: ColumnDef<Product>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="border-secondary data-[state=checked]:bg-secondary data-[state=checked]:text-secondary-foreground"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="border-secondary data-[state=checked]:bg-secondary data-[state=checked]:text-secondary-foreground"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="hover:bg-primary/20 hover:text-secondary text-white"
        >
          Product
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      return (
        <motion.div className="flex items-center gap-3" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
          <motion.div
            className="h-10 w-10 rounded-md overflow-hidden border-2 border-secondary"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src={row.original.thumbnail || "/placeholder.svg?height=40&width=40"}
              alt={row.getValue("name")}
              width={40}
              height={40}
              className="object-cover"
            />
          </motion.div>
          <div className="font-medium text-white">{row.getValue("name")}</div>
        </motion.div>
      )
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string

      return (
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="flex justify-center">
          <Badge
            variant={status === "in-stock" ? "success" : status === "low-stock" ? "warning" : "destructive"}
            className="transition-all duration-300 animate-pulse-slow"
          >
            {status.replace("-", " ")}
          </Badge>
        </motion.div>
      )
    },
  },
  {
    accessorKey: "inventory",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="hover:bg-primary/20 hover:text-secondary text-white"
      >
        Inventory
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      return <div className="text-center text-white">{row.getValue("inventory")}</div>
    },
  },
  {
    accessorKey: "price",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="hover:bg-primary/20 hover:text-secondary text-white"
      >
        Price
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const price = Number.parseFloat(row.getValue("price"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(price)
      return <div className="text-right font-medium text-secondary">{formatted}</div>
    },
  },
  {
    accessorKey: "vendor",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="hover:bg-primary/20 hover:text-secondary text-white"
      >
        Vendor
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => <div className="text-white">{row.getValue("vendor")}</div>,
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const product = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0 hover:bg-primary/20 text-white">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-card text-white border-purple-800">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(product.id)}
              className="cursor-pointer hover:bg-primary/20 focus:bg-primary/20"
            >
              Copy product ID
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-purple-800" />
            <DropdownMenuItem className="cursor-pointer hover:bg-primary/20 focus:bg-primary/20">
              View product
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer hover:bg-primary/20 focus:bg-primary/20">
              Edit product
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer hover:bg-primary/20 focus:bg-primary/20">
              Update inventory
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
