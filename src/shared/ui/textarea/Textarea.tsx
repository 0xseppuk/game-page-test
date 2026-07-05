"use client"

import { useRef, useState, type PointerEvent as ReactPointerEvent, type TextareaHTMLAttributes } from "react"
import { ResizeIcon } from "@/shared/ui/icons"
import { cn } from "@/shared/lib/cn"
import styles from "./styles.module.scss"

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  showCounter?: boolean
}

const MIN_HEIGHT = 110

export function Textarea({ className, showCounter, maxLength, value, ...props }: TextareaProps) {
  const [height, setHeight] = useState(MIN_HEIGHT)
  const dragStart = useRef<{ y: number; height: number } | null>(null)

  function handlePointerDown(event: ReactPointerEvent<HTMLDivElement>) {
    dragStart.current = { y: event.clientY, height }
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  function handlePointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    if (!dragStart.current) return
    const delta = event.clientY - dragStart.current.y
    setHeight(Math.max(MIN_HEIGHT, dragStart.current.height + delta))
  }

  function handlePointerUp(event: ReactPointerEvent<HTMLDivElement>) {
    dragStart.current = null
    event.currentTarget.releasePointerCapture(event.pointerId)
  }

  return (
    <div className={cn(styles.wrapper, className)}>
      <textarea className={styles.textarea} maxLength={maxLength} value={value} style={{ height }} {...props} />
      {showCounter && maxLength !== undefined && (
        <span className={styles.counter}>
          {typeof value === "string" ? value.length : 0}/{maxLength}
        </span>
      )}
      <div
        className={styles.resizeHandler}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        <ResizeIcon className={styles.resizeIcon} />
      </div>
    </div>
  )
}
