import { MainLogo } from "@/shared/ui/icons"
import styles from "./styles.module.scss"

function TelegramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.7 4.1 17.8 19c-.2 1.1-.8 1.4-1.7.9l-4.4-3.2-2.1 2.1c-.2.2-.4.4-.9.4l.3-4.5 8.2-7.4c.4-.3-.1-.5-.5-.2L6.6 13.5l-4.4-1.4c-1-.3-1-1 .2-1.5L19.5 4c.8-.3 1.5.2 1.2.1Z" />
    </svg>
  )
}

function DiscordIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.8 5.4a16 16 0 0 0-4-1.2l-.5 1a14.9 14.9 0 0 0-4.6 0l-.5-1a16 16 0 0 0-4 1.2C2.6 9.2 1.9 12.9 2.3 16.5a16.2 16.2 0 0 0 4.9 2.5l1.2-1.7-1.8-.9.4-.3a11.5 11.5 0 0 0 10 0l.4.3-1.8.9 1.2 1.7a16.2 16.2 0 0 0 4.9-2.5c.5-4.2-.8-7.9-2.9-11.1ZM8.6 14.4c-1 0-1.9-.9-1.9-2s.8-2 1.9-2 1.9.9 1.9 2-.9 2-1.9 2Zm6.8 0c-1 0-1.9-.9-1.9-2s.8-2 1.9-2 1.9.9 1.9 2-.9 2-1.9 2Z" />
    </svg>
  )
}

function VkIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12.7 17.4C6.9 17.4 3.6 13.5 3.5 7h2.9c.1 4.8 2.2 6.8 3.8 7.2V7h2.7v4.1c1.6-.2 3.3-2.1 3.9-4.1h2.7a8 8 0 0 1-3.6 5.2 8.3 8.3 0 0 1 4.2 5.2h-3c-.6-1.9-2.2-3.4-4.2-3.6v3.6h-.2Z" />
    </svg>
  )
}

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M21.2 7.1a2.7 2.7 0 0 0-1.9-1.9C17.6 4.8 12 4.8 12 4.8s-5.6 0-7.3.4a2.7 2.7 0 0 0-1.9 1.9A28.2 28.2 0 0 0 2.4 12a28.2 28.2 0 0 0 .4 4.9 2.7 2.7 0 0 0 1.9 1.9c1.7.4 7.3.4 7.3.4s5.6 0 7.3-.4a2.7 2.7 0 0 0 1.9-1.9 28.2 28.2 0 0 0 .4-4.9 28.2 28.2 0 0 0-.4-4.9ZM10 15.1V8.9l5.2 3.1-5.2 3.1Z" />
    </svg>
  )
}

const SOCIAL_LINKS = [
  { label: "Telegram", className: styles.social_telegram, icon: <TelegramIcon /> },
  { label: "Discord", className: styles.social_discord, icon: <DiscordIcon /> },
  { label: "ВКонтакте", className: styles.social_vk, icon: <VkIcon /> },
  { label: "YouTube", className: styles.social_youtube, icon: <YoutubeIcon /> },
]

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.about}>
          <MainLogo />
          <p>© 2024 STARVELL, лучший маркетплейс цифровых товаров и услуг</p>
          <p>Дизайн сделан в 0xHearts.com</p>
        </div>

        <nav className={styles.support} aria-label="Поддержка">
          <h2 className={styles.title}>Поддержка</h2>
          <a href="#">Написать в поддержку</a>
          <a href="#">Политика конфиденциальности</a>
          <a href="#">Пользовательское соглашение</a>
        </nav>

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
