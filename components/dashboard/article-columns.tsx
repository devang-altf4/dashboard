"use client"

import type { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, Eye } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { motion } from "framer-motion"
import { Switch } from "@/components/ui/switch"

// This type is used to define the shape of our data.
export type Article = {
  id: string
  title: string
  keyword: string
  words: number
  createdOn: string
  status: "published" | "draft" | "scheduled" | "archived"
}

export const articleColumns: ColumnDef<Article>[] = [
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
    accessorKey: "title",
    header: "Article Title",
    cell: ({ row }) => <div className="font-medium text-white">{row.getValue("title")}</div>,
  },
  {
    accessorKey: "keyword",
    header: ({ column }) => {
      return (
        <div className="flex items-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="hover:bg-primary/20 hover:text-secondary text-white"
          >
            Keyword [Traffic]
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      )
    },
    cell: ({ row }) => <div className="text-white">{row.getValue("keyword")}</div>,
  },
  {
    accessorKey: "words",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="hover:bg-primary/20 hover:text-secondary text-white"
      >
        Words
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      return <div className="text-center text-white">{row.getValue("words")}</div>
    },
  },
  {
    accessorKey: "createdOn",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="hover:bg-primary/20 hover:text-secondary text-white"
      >
        Created On
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => <div className="text-white">{row.getValue("createdOn")}</div>,
  },
  {
    id: "action",
    header: "Action",
    cell: ({ row }) => {
      return (
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            variant="outline"
            size="sm"
            className="border-purple-800 bg-muted hover:bg-primary/20 hover:text-secondary text-white w-20"
          >
            <Eye className="mr-2 h-4 w-4" />
            View
          </Button>
        </motion.div>
      )
    },
  },
  {
    id: "publish",
    header: "Publish",
    cell: ({ row }) => {
      const article = row.original
      const isPublished = article.status === "published"

      return (
        <div className="flex justify-center">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Switch
              checked={isPublished}
              className="data-[state=checked]:bg-secondary data-[state=checked]:text-secondary-foreground"
            />
          </motion.div>
        </div>
      )
    },
  },
]
