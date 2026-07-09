"use client"

import { useState } from "react"
import { Dropdown, DropdownItem } from "@/shared/ui/dropdown"
import { Textarea } from "@/shared/ui/textarea"
import { Button } from "@/shared/ui/button"
import { ChevronIcon, UploadIcon } from "@/shared/ui/icons"
import { cn } from "@/shared/lib/cn"
import styles from "./styles.module.scss"

const REASON_PLACEHOLDER = "Выберите причину жалобы"
const REASONS = [
  "Мошенничество",
  "Продавец не выходит на связь",
  "Товар не соответствует описанию",
  "Оскорбления",
  "Спам или реклама",
  "Другое",
]

export function ReportModal() {
  const [reason, setReason] = useState<string | null>(null)
  const [description, setDescription] = useState("")

  return (
    <div className={styles.modal}>
      <h2 className={styles.title}>Жалоба на 0xHearts.com</h2>

      <div className={styles.field}>
        <span className={styles.label}>Причина жалобы</span>
        <Dropdown
          className={styles.reasonDropdown}
          panelClassName={styles.reasonPanel}
          trigger={({ open, toggle }) => (
            <button type="button" className={cn(styles.select, open && styles.select_open)} onClick={toggle}>
              <span className={cn(!reason && styles.placeholder)}>{reason ?? REASON_PLACEHOLDER}</span>
              <ChevronIcon className={cn(styles.chevron, !open && styles.chevron_closed)} />
            </button>
          )}
        >
          {REASONS.map((item) => (
            <DropdownItem key={item} onClick={() => setReason(item)}>
              {item}
            </DropdownItem>
          ))}
        </Dropdown>
      </div>

      <div className={styles.field}>
        <span className={styles.label}>Опишите проблему</span>
        <Textarea
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          maxLength={200}
          showCounter
          placeholder="Введите ваш текст"
        />
      </div>

      <div className={styles.field}>
        <span className={styles.label}>Доказательства</span>
        <label className={styles.dropzone}>
          <input type="file" accept="image/jpeg,image/png" className={styles.fileInput} />
          <span className={styles.dropzoneIcon}>
            <UploadIcon />
          </span>
          <span className={styles.dropzoneText}>Выберите файл или перетащите его сюда</span>
          <span className={styles.dropzoneHint}>JPEG или PNG до 5 MB</span>
        </label>
      </div>

      <div className={styles.actions}>
        <Button variant="white" className={styles.supportButton}>
          Мне нужна поддержка
        </Button>
        <Button variant="blue" className={styles.reportButton}>
          Пожаловаться
        </Button>
      </div>
    </div>
  )
}
