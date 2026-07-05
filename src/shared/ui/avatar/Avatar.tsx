import { cn } from "@/shared/lib/cn"
import styles from "./styles.module.scss"

interface AvatarProps {
  name: string
  size?: number
  color?: string
  className?: string
}

const PALETTE = ["#2ECC71", "#4E75FF", "#9B59B6", "#F5A623", "#FF6B6B", "#1ABC9C", "#3498DB"]

function pickColor(name: string) {
  let hash = 0
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash)
  }
  return PALETTE[Math.abs(hash) % PALETTE.length]
}

export function Avatar({ name, size = 32, color, className }: AvatarProps) {
  const initial = name.trim().charAt(0).toUpperCase() || "?"

  return (
    <span
      className={cn(styles.avatar, className)}
      style={{ width: size, height: size, fontSize: size * 0.45, background: color ?? pickColor(name) }}
    >
      {initial}
    </span>
  )
}
