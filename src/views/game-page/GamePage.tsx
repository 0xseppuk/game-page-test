import { GameHero } from "./components/GameHero"
import { GameCategories } from "./components/GameCategories"
import { GameFilters } from "./components/GameFilters"
import { GameToolbar } from "./components/GameToolbar"
import { OffersTable } from "./components/OffersTable"
import styles from "./styles.module.scss"

export function GamePage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <GameHero />
        <GameCategories />
        <hr className={styles.divider} />
        <div className={styles.content}>
          <GameFilters />
          <GameToolbar />
          <OffersTable />
        </div>
      </div>
    </main>
  )
}
