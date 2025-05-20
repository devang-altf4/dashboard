import type { ColumnDef } from "@tanstack/react-table"
import type { Article } from "@/components/dashboard/article-columns"

// Generate article data based on the image
export const articles: Article[] = [
  {
    id: "1",
    title: "How to Improve Your Skills in League of Legends",
    keyword: "league of legends [2240000]",
    words: 4575,
    createdOn: "20 hours ago",
    status: "published",
  },
  {
    id: "2",
    title: "How to Master Last Hitting in League of Legends",
    keyword: "league of legends [2240000]",
    words: 3480,
    createdOn: "21 hours ago",
    status: "published",
  },
  {
    id: "3",
    title: "7 Tips for Better Teamplay in League of Legends",
    keyword: "league of legends [2240000]",
    words: 2676,
    createdOn: "a day ago",
    status: "published",
  },
  {
    id: "4",
    title: "Top Virtual Executive Assistant Services (2024)",
    keyword: "virtual executive assistant [3500]",
    words: 2408,
    createdOn: "1 Oct, 24",
    status: "published",
  },
  {
    id: "5",
    title: "Unlimited Graphics Design Solutions",
    keyword: "unlimited graphic design services [350]",
    words: 1793,
    createdOn: "-",
    status: "draft",
  },
  {
    id: "6",
    title: "Top Amazon Payment Methods for Quick Access to Funds",
    keyword: "amazon payment methods [3500]",
    words: 2647,
    createdOn: "-",
    status: "draft",
  },
  {
    id: "7",
    title: "Backlinks 101: What are backlinks and why they're important [Free template]",
    keyword: "backlinks [9100]",
    words: 2261,
    createdOn: "-",
    status: "draft",
  },
  {
    id: "8",
    title: "7 Leading AI SEO Tools in 2024 (Ranked & Compared)",
    keyword: "ai seo software [880]",
    words: 1643,
    createdOn: "-",
    status: "draft",
  },
  {
    id: "9",
    title: "Unlimited Graphic Design Services You Can Rely On",
    keyword: "unlimited graphic design services [350]",
    words: 1874,
    createdOn: "-",
    status: "draft",
  },
]

// Function to get the appropriate data
export function getTableData(columns: ColumnDef<any, any>[]) {
  // Check if it's an article table
  if (columns.some((col) => col.accessorKey === "title" || col.accessorKey === "keyword")) {
    return articles
  }

  // Default to articles if we can't determine
  return articles
}
