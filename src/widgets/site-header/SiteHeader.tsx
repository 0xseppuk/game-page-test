"use client"

import { Button } from "@/shared/ui/button"
import { Input } from "@/shared/ui/input"
import { MainLogo, SearchIcon } from "@/shared/ui/icons"
import { NavDropdown } from "@/shared/ui/nav-dropdown"
import styles from "./styles.module.scss"
import { useState } from "react"

const SUPPORT_ITEMS = ["Центр помощи", "Как это работает", "Гарантии сделок"]

const LANGUAGE_ITEMS = ["Русский", "English", "Українська", "Español"]

const CURRENCY_ITEMS = ["RUB", "USD", "EUR", "KZT"]

export function SiteHeader() {
  const [language, setLanguage] = useState("Русский")
  const [currency, setCurrency] = useState("RUB")

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <MainLogo />
          <Input
            className={styles.search}
            startDecorator={<SearchIcon />}
            placeholder="Поиск игр и приложений..."
            maxLength={30}
            name="search_field"
          />
        </div>
        <div className={styles.actions}>
          <nav className={styles.nav}>
            <NavDropdown label="Поддержка" items={SUPPORT_ITEMS} />
            <NavDropdown label="Русский" items={LANGUAGE_ITEMS} selected={language} onSelect={setLanguage} />
            <NavDropdown label="RUB" items={CURRENCY_ITEMS} selected={currency} onSelect={setCurrency} />
          </nav>
          <div className={styles.buttons}>
            <Button variant="white" className={styles.loginButton}>
              Вход
            </Button>
            <Button variant="blue" className={styles.registerButton}>
              Регистрация
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
