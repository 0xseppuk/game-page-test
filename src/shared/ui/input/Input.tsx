import { type InputHTMLAttributes, type ReactNode } from "react"
import { cn } from "@/shared/lib/cn"
import styles from "./styles.module.scss"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  startDecorator?: ReactNode
}

export function Input({ className, startDecorator, ...props }: InputProps) {
  return (
    <div className={cn(styles.wrapper, className)}>
      {startDecorator && <span className={styles.startDecorator}>{startDecorator}</span>}
      <input className={cn(styles.input, startDecorator && styles.input_hasStartDecorator)} {...props} />
    </div>
  )
}
