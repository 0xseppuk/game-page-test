"use client"

import { useState } from "react"
import { useDisclosure } from "@/shared/lib/hooks"
import { Tabs } from "@/shared/ui/tabs"
import { Dropdown, DropdownItem } from "@/shared/ui/dropdown"
import { Button } from "@/shared/ui/button"
import { Modal } from "@/shared/ui/modal"
import { ChevronIcon } from "@/shared/ui/icons"
import { cn } from "@/shared/lib/cn"
import { ReportModal } from "../ReportModal"
import styles from "./styles.module.scss"

const TABS = ["Все", "Боты", "Аккаунты", "Предметы", "VIP-сервер", "Услуги", "Гайды"]
const DELIVERY_METHODS = ["Любой", "Мгновенная", "Ручная"]

export function GameFilters() {
  const { isOpen, open, close } = useDisclosure()
  const [deliveryMethod, setDeliveryMethod] = useState<string | null>(null)

  return (
    <>
      <div className={styles.filters}>
        <div className={styles.left}>
          <Tabs items={TABS} />
          <Dropdown
            trigger={({ open, toggle }) => (
              <button type="button" className={cn(styles.delivery, open && styles.delivery_open)} onClick={toggle}>
                <span>{deliveryMethod ?? "Способ доставки"}</span>
                <ChevronIcon className={cn(styles.chevron, !open && styles.chevron_closed)} />
              </button>
            )}
          >
            {DELIVERY_METHODS.map((method) => (
              <DropdownItem key={method} onClick={() => setDeliveryMethod(method)}>
                {method}
              </DropdownItem>
            ))}
          </Dropdown>
        </div>
        <Button variant="blue" className={styles.sellButton} onClick={open}>
          Продать Blox Fruits
        </Button>
      </div>
      <Modal open={isOpen} onClose={close}>
        <ReportModal />
      </Modal>
    </>
  )
}
