import { type InputHTMLAttributes, type ReactNode } from "react"
import { cn } from "@/shared/lib/cn"
import styles from "./styles.module.scss"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  startDecorator?: ReactNode
  endDecorator?: ReactNode
  showCounter?: boolean
}

export function Input({
  className,
  startDecorator,
  endDecorator,
  showCounter,
  maxLength,
  value,
  ...props
}: InputProps) {
  return (
    <div className={cn(styles.wrapper, className)}>
      {startDecorator && <span className={styles.startDecorator}>{startDecorator}</span>}
      <input
        className={cn(
          styles.input,
          startDecorator && styles.input_hasStartDecorator,
          (endDecorator || (showCounter && maxLength !== undefined)) && styles.input_hasEndDecorator
        )}
        maxLength={maxLength}
        value={value}
        {...props}
      />
      {showCounter && maxLength !== undefined && (
        <span className={styles.counter}>
          {typeof value === "string" ? value.length : 0}/{maxLength}
        </span>
      )}
      {endDecorator && <span className={styles.endDecorator}>{endDecorator}</span>}
    </div>
  )
}
