import { Switch } from "@/shared/ui/switch"
import { Input } from "@/shared/ui/input"
import { BoltIcon, SearchIcon } from "@/shared/ui/icons"
import styles from "./styles.module.scss"

export function GameToolbar() {
  return (
    <div className={styles.toolbar}>
      <Switch className={styles.onlineSwitch} label="Только продавцы онлайн" />
      <Switch
        className={styles.deliverySwitch}
        label={
          <span className={styles.instant}>
            <BoltIcon className={styles.bolt} />
            Моментальная доставка
          </span>
        }
      />
      <Input
        className={styles.search}
        endDecorator={<SearchIcon />}
        placeholder="Поиск по описанию лота..."
        name="lot_search"
      />
    </div>
  )
}
