import { type InputHTMLAttributes, type ReactNode } from "react"
import { cn } from "@/shared/lib/cn"
import styles from "./styles.module.scss"

interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: ReactNode
}

export function Switch({ className, label, id, ...props }: SwitchProps) {
  return (
    <label className={cn(styles.wrapper, className)} htmlFor={id}>
      {label && <span className={styles.label}>{label}</span>}
      <span className={styles.track}>
        <input type="checkbox" id={id} className={styles.input} {...props} />
        <span className={styles.thumb} />
      </span>
    </label>
  )
}
