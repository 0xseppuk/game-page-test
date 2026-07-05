import Image from "next/image"
import { cn } from "@/shared/lib/cn"
import styles from "./styles.module.scss"

interface AvatarProps {
  name: string
  src?: string
  size?: number
  className?: string
}

export function Avatar({ name, src, size = 32, className }: AvatarProps) {
  return (
    <span className={cn(styles.avatar, className)} style={{ width: size, height: size }}>
      <Image
        src={src ?? "/assets/game-page/avatars/0xHearts.png"}
        alt={name}
        width={size}
        height={size}
        className={styles.image}
      />
    </span>
  )
}
