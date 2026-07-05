import Image from "next/image"
import styles from "./styles.module.scss"

const DESCRIPTION =
  "Какой-то длинный текст, связанный с SEO-оптимизацией относительно данной категории, на которую вы сейчас смотрите. Какой-то длинный текст, связанный с SEO-оптимизацией относительно данной категории, на которую вы сейчас смотрите."

export function GameHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.info}>
        <h1 className={styles.title}>Робуксы Roblox</h1>
        <p className={styles.description}>{DESCRIPTION}</p>
      </div>
      <div className={styles.imageBox}>
        <Image src="/images/hero-clipped.webp" alt="Roblox" fill className={styles.image} priority />
      </div>
    </section>
  )
}
