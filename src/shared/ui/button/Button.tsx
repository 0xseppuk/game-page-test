import { type ButtonHTMLAttributes } from "react"
import { cn } from "@/shared/lib/cn"
import styles from "./styles.module.scss"

type ButtonVariant = "white" | "blue"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
}

export function Button({ className, variant = "white", ...props }: ButtonProps) {
  return <button className={cn(styles.button, styles[`button_${variant}`], className)} {...props} />
}
