"use client"

import { useEffect, type ReactNode } from "react"
import { createPortal } from "react-dom"
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
  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose()
      }
    }

    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [onClose, open])

  if (!open || typeof document === "undefined") return null

  return createPortal(
    <div
      className={cn(styles.backdrop, styles.backdrop_visible)}
      onPointerDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose()
        }
      }}
    >
      <div className={cn(styles.wrapper, styles.wrapper_visible)}>
        <button type="button" className={styles.close} onClick={onClose} aria-label="Закрыть">
          <CloseIcon />
        </button>
        <div className={cn(styles.body, className)}>{children}</div>
      </div>
    </div>,
    document.body
  )
}
