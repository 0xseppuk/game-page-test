"use client"

import { useLayoutEffect, useRef, useState, type ReactNode } from "react"
import { createPortal } from "react-dom"
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
}

interface Coords {
  top: number
  left: number
  minWidth: number
}

export function Dropdown({ trigger, children, className, panelClassName }: DropdownProps) {
  const { isOpen, close, toggle } = useDisclosure()
  const rootRef = useRef<HTMLDivElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const [coords, setCoords] = useState<Coords | null>(null)

  useDismiss([rootRef, panelRef], close, isOpen)

  useLayoutEffect(() => {
    if (!isOpen || !rootRef.current) return

    function updateCoords() {
      const triggerRect = rootRef.current!.getBoundingClientRect()
      const panelWidth = panelRef.current?.offsetWidth ?? triggerRect.width
      const overflowsRight = triggerRect.left + panelWidth > window.innerWidth
      const left = overflowsRight ? triggerRect.right - panelWidth : triggerRect.left

      setCoords({ top: triggerRect.bottom + 8, left, minWidth: triggerRect.width })
    }

    updateCoords()
    window.addEventListener("resize", updateCoords)
    window.addEventListener("scroll", updateCoords, true)
    return () => {
      window.removeEventListener("resize", updateCoords)
      window.removeEventListener("scroll", updateCoords, true)
    }
  }, [isOpen])

  return (
    <div className={cn(styles.dropdown, className)} ref={rootRef}>
      {trigger({ open: isOpen, toggle })}
      {isOpen &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            ref={panelRef}
            className={cn(styles.panel, panelClassName)}
            data-floating-panel
            onClick={close}
            style={{
              top: coords?.top,
              left: coords?.left,
              minWidth: coords?.minWidth,
              visibility: coords ? "visible" : "hidden",
            }}
          >
            {children}
          </div>,
          document.body
        )}
    </div>
  )
}
