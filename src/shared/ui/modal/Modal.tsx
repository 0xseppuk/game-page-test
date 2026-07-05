"use client"

import { useEffect, useRef, type ReactNode } from "react"
import { createPortal } from "react-dom"
import { useDismiss, useIsClient } from "@/shared/lib/hooks"
import { cn } from "@/shared/lib/cn"
import { CloseIcon } from "@/shared/ui/icons"
import styles from "./styles.module.scss"

interface ModalProps {
  open: boolean
  onClose: () => void
  children: ReactNode
  className?: string
}

export function Modal({ open, onClose, children, className }: ModalProps) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const isClient = useIsClient()

  useDismiss(wrapperRef, onClose, open)

  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [open])

  if (!isClient) return null

  return createPortal(
    <div className={cn(styles.backdrop, open && styles.backdrop_visible)}>
      <div ref={wrapperRef} className={cn(styles.wrapper, open && styles.wrapper_visible)}>
        <button type="button" className={styles.close} onClick={onClose} aria-label="Закрыть">
          <CloseIcon />
        </button>
        <div className={cn(styles.body, className)}>{children}</div>
      </div>
    </div>,
    document.body
  )
}
