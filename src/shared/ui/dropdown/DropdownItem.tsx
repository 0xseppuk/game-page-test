import { type ButtonHTMLAttributes } from "react"
import { cn } from "@/shared/lib/cn"
import styles from "./styles.module.scss"

type DropdownItemProps = ButtonHTMLAttributes<HTMLButtonElement>

export function DropdownItem({ className, ...props }: DropdownItemProps) {
  return <button type="button" className={cn(styles.item, className)} {...props} />
}
