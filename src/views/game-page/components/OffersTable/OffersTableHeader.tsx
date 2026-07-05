import { SortIcon } from "@/shared/ui/icons"
import styles from "./styles.module.scss"

export function OffersTableHeader() {
  return (
    <div className={styles.row}>
      <span className={styles.description}>Описание</span>
      <span className={styles.seller}>Продавец</span>
      <button type="button" className={styles.sortButton}>
        Наличие
        <SortIcon className={styles.sortIcon} />
      </button>
      <button type="button" className={styles.sortButton}>
        Цена
        <SortIcon className={styles.sortIcon} />
      </button>
    </div>
  )
}
