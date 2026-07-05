import { MainLogo, TelegramIcon, VKIcon, YoutubeIcon, DiscordIcon } from "@/shared/ui/icons"
import styles from "./styles.module.scss"

const SOCIAL_LINKS = [
  { label: "Telegram", className: styles.social_telegram, icon: <TelegramIcon /> },
  { label: "Discord", className: styles.social_discord, icon: <DiscordIcon /> },
  { label: "ВКонтакте", className: styles.social_vk, icon: <VKIcon /> },
  { label: "YouTube", className: styles.social_youtube, icon: <YoutubeIcon /> },
]

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.info}>
          <div className={styles.about}>
            <MainLogo />
            <p>© 2024 STARVELL, лучший маркетплейс цифровых товаров и услуг</p>
            <p>Дизайн сделан в 0xHearts.com</p>
          </div>

          <nav className={styles.support} aria-label="Поддержка">
            <h2 className={styles.title}>Поддержка</h2>
            <div className={styles.links}>
              <a href="#">Написать в поддержку</a>
              <a href="#">Политика конфиденциальности</a>
              <a href="#">Пользовательское соглашение</a>
            </div>
          </nav>
        </div>

        <div className={styles.socials}>
          {SOCIAL_LINKS.map((social) => (
            <a key={social.label} href="#" aria-label={social.label} className={`${styles.social} ${social.className}`}>
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
