"use client"

import { Dropdown, DropdownItem } from "@/shared/ui/dropdown"
import { ChevronIcon } from "@/shared/ui/icons"
import { cn } from "@/shared/lib/cn"
import styles from "./styles.module.scss"

interface NavDropdownProps {
  label: string
  items?: string[]
}

const DEFAULT_ITEMS = ["Пункт меню", "Пункт меню", "Пункт меню", "Пункт меню"]

export function NavDropdown({ label, items = DEFAULT_ITEMS }: NavDropdownProps) {
  return (
    <Dropdown
      trigger={({ open, toggle }) => (
        <button type="button" className={cn(styles.trigger, open && styles.trigger_open)} onClick={toggle}>
          <span>{label}</span>
          <ChevronIcon className={cn(styles.chevron, !open && styles.chevron_closed)} />
        </button>
      )}
    >
      {items.map((item, index) => (
        <DropdownItem key={index}>{item}</DropdownItem>
      ))}
    </Dropdown>
  )
}
