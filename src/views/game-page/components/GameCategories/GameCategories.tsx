"use client"

import { useState } from "react"
import { Tag } from "@/shared/ui/tag"
import styles from "./styles.module.scss"

const CATEGORIES = [
  { label: "Робуксы", count: 395 },
  { label: "Подарочные карты", count: 1183 },
  { label: "Донат робуксов (лайк)", count: 777 },
  { label: "Premium", count: 1183 },
  { label: "VIP-сервер", count: 395 },
  { label: "Аккаунты", count: 1183 },
  { label: "Скины", count: 777 },
  { label: "Prime Gaming", count: 395 },
  { label: "Studio", count: 1183 },
  { label: "Прочее", count: 495 },
  { label: "Adopt Me", count: 1183 },
  { label: "Anime Defenders", count: 777 },
  { label: "Arm Wrestle Simulator", count: 1183 },
  { label: "ASTD", count: 395 },
  { label: "Blade Ball", count: 1183 },
  { label: "Blox Fruits", count: 777 },
  { label: "Da Hood", count: 395 },
  { label: "GPO", count: 1183 },
  { label: "Jailbreak", count: 777 },
  { label: "Jujutsu Shenanigans", count: 395 },
  { label: "King Legacy", count: 1183 },
  { label: "MM2", count: 777 },
  { label: "Pet Simulator 99", count: 1183 },
  { label: "Pet Simulator X", count: 395 },
  { label: "Project Slayers", count: 1183 },
  { label: "Toilet Tower Defense", count: 777 },
  { label: "Tower Defense Simulator", count: 395 },
  { label: "YBA", count: 1183 },
  { label: "Прочие игры", count: 777 },
]

const DEFAULT_ACTIVE = "Blox Fruits"

export function GameCategories() {
  const [active, setActive] = useState(DEFAULT_ACTIVE)

  return (
    <div className={styles.categories}>
      {CATEGORIES.map((category) => (
        <Tag
          key={category.label}
          count={category.count}
          active={category.label === active}
          onClick={() => setActive(category.label)}
        >
          {category.label}
        </Tag>
      ))}
    </div>
  )
}
