"use client"

import { Skeleton } from "@/components/ui/skeleton"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { motion } from "framer-motion"

export function TableSkeleton() {
  return (
    <motion.div className="space-y-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <div className="flex items-center justify-between">
        <Skeleton className="h-8 w-[250px] bg-primary/20" />
        <Skeleton className="h-8 w-[90px] bg-primary/20" />
      </div>
      <motion.div
        className="rounded-md border border-purple-800 overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <Table>
          <TableHeader>
            <TableRow className="bg-primary/20 border-b border-purple-800">
              {Array.from({ length: 6 }).map((_, index) => (
                <TableHead key={index}>
                  <Skeleton className="h-6 w-full max-w-[100px] bg-primary/30" />
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 5 }).map((_, rowIndex) => (
              <motion.tr
                key={rowIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: rowIndex * 0.1 }}
                className="border-b border-purple-800/50"
              >
                {Array.from({ length: 6 }).map((_, cellIndex) => (
                  <TableCell key={cellIndex}>
                    <Skeleton className="h-6 w-full bg-primary/20" />
                  </TableCell>
                ))}
              </motion.tr>
            ))}
          </TableBody>
        </Table>
      </motion.div>
      <div className="flex items-center justify-between">
        <Skeleton className="h-8 w-[250px] bg-primary/20" />
        <Skeleton className="h-8 w-[200px] bg-primary/20" />
      </div>
    </motion.div>
  )
}
