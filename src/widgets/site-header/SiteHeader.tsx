import { Button } from "@/shared/ui/button"
import { Input } from "@/shared/ui/input"
import { MainLogo, SearchIcon } from "@/shared/ui/icons"
import { NavDropdown } from "@/shared/ui/nav-dropdown"
import styles from "./styles.module.scss"

export function SiteHeader() {
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
            <NavDropdown label="Поддержка" />
            <NavDropdown label="Русский" />
            <NavDropdown label="RUB" />
          </nav>
          <div className={styles.buttons}>
            <Button variant="white">Вход</Button>
            <Button variant="blue">Регистрация</Button>
          </div>
        </div>
      </div>
    </header>
  )
}
