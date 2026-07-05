"use client"

import { useRef, type ReactNode } from "react"
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
  panelClassName?: string
  align?: "left" | "right"
}

export function Dropdown({ trigger, children, className, panelClassName, align = "left" }: DropdownProps) {
  const { isOpen, close, toggle } = useDisclosure()
  const rootRef = useRef<HTMLDivElement>(null)

  useDismiss(rootRef, close, isOpen)

  return (
    <div className={cn(styles.dropdown, className)} ref={rootRef}>
      {trigger({ open: isOpen, toggle })}
      {isOpen && (
        <div className={cn(styles.panel, align === "right" && styles.panel_right, panelClassName)} onClick={close}>
          {children}
        </div>
      )}
    </div>
  )
}
