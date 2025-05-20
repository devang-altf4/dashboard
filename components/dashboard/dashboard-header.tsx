"use client"

import type React from "react"
import { motion } from "framer-motion"
import Link from "next/link"

interface DashboardHeaderProps {
  heading: string
  text?: string
  children?: React.ReactNode
}

export function DashboardHeader({ heading = "Article", text = "Manage and monitor your content", children }: DashboardHeaderProps) {
  return (
    <Link href="/" className="no-underline">
      <motion.div
        className="sticky top-0 z-50 flex flex-col gap-2 md:flex-row md:items-center md:justify-between p-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b cursor-pointer hover:bg-background/80 transition-colors"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="grid gap-1">
          <motion.h1
            className="font-heading text-2xl font-bold md:text-3xl text-secondary"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {heading}
          </motion.h1>
          {text && (
            <motion.p
              className="text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {text}
            </motion.p>
          )}
        </div>
        {children && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {children}
          </motion.div>
        )}
      </motion.div>
    </Link>
  )
}
