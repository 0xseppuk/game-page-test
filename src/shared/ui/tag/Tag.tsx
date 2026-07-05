import { type ButtonHTMLAttributes } from "react"
import { cn } from "@/shared/lib/cn"
import styles from "./styles.module.scss"

interface TagProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  count?: number
  active?: boolean
}

export function Tag({ className, count, active, children, ...props }: TagProps) {
  return (
    <button type="button" className={cn(styles.tag, active && styles.tag_active, className)} {...props}>
      <span>{children}</span>
      {count !== undefined && <span className={styles.count}>{count}</span>}
    </button>
  )
}
