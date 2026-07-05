"use client"

import { useLayoutEffect, useRef, useState, type ReactNode } from "react"
import { useDisclosure, useDismiss } from "@/shared/lib/hooks"
import { cn } from "@/shared/lib/cn"
import styles from "./styles.module.scss"

interface DropdownRenderProps {
  open: boolean
  toggle: () => void
}

interface DropdownProps {
  trigger: (props: DropdownRenderProps) => ReactNode
  children: ReactNode
  className?: string
}

type Align = "left" | "right"

export function Dropdown({ trigger, children, className }: DropdownProps) {
  const { isOpen, close, toggle } = useDisclosure()
  const rootRef = useRef<HTMLDivElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const [align, setAlign] = useState<Align>("left")

  useDismiss(rootRef, close, isOpen)

  useLayoutEffect(() => {
    if (!isOpen || !rootRef.current || !panelRef.current) return

    const triggerRect = rootRef.current.getBoundingClientRect()
    const panelWidth = panelRef.current.offsetWidth
    const overflowsRight = triggerRect.left + panelWidth > window.innerWidth

    setAlign(overflowsRight ? "right" : "left")
  }, [isOpen])

  return (
    <div className={cn(styles.dropdown, className)} ref={rootRef}>
      {trigger({ open: isOpen, toggle })}
      {isOpen && (
        <div ref={panelRef} className={cn(styles.panel, styles[`panel_${align}`])}>
          {children}
        </div>
      )}
    </div>
  )
}
