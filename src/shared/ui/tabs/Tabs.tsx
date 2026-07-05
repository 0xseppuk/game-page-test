"use client"

import { useState } from "react"
import { cn } from "@/shared/lib/cn"
import styles from "./styles.module.scss"

interface TabsProps {
  items: string[]
  defaultActive?: number
  className?: string
}

export function Tabs({ items, defaultActive = 0, className }: TabsProps) {
  const [active, setActive] = useState(defaultActive)

  return (
    <div className={cn(styles.tabs, className)}>
      {items.map((item, index) => (
        <button
          key={item}
          type="button"
          className={cn(styles.tab, index === active && styles.tab_active)}
          onClick={() => setActive(index)}
        >
          {item}
        </button>
      ))}
    </div>
  )
}
