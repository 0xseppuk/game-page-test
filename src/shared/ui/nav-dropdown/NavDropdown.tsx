"use client"

import { Dropdown, DropdownItem } from "@/shared/ui/dropdown"
import { ChevronIcon } from "@/shared/ui/icons"
import { cn } from "@/shared/lib/cn"
import styles from "./styles.module.scss"

interface NavDropdownProps {
  label: string
  items: string[]
  onSelect?: (item: string) => void
  selected?: string
}

export function NavDropdown({ label, items, onSelect, selected }: NavDropdownProps) {
  return (
    <Dropdown
      trigger={({ open, toggle }) => (
        <button type="button" className={cn(styles.trigger, open && styles.trigger_open)} onClick={toggle}>
          <span>{selected ?? label}</span>
          <ChevronIcon className={cn(styles.chevron, !open && styles.chevron_closed)} />
        </button>
      )}
    >
      {items.map((item) => (
        <DropdownItem key={item} onClick={() => onSelect?.(item)}>
          {item}
        </DropdownItem>
      ))}
    </Dropdown>
  )
}
