import { Button } from "@/shared/ui/button"
import { OffersTableFooter } from "./OffersTableFooter"
import { OffersTableHeader } from "./OffersTableHeader"
import { OffersTableRow, type Offer } from "./OffersTableRow"
import styles from "./styles.module.scss"

const OFFERS: Offer[] = [
  {
    id: "1",
    description: "Аренда Вип Сервера | 24 часа, VIP-сервер",
    seller: {
      name: "0xHearts.com",
      avatar: "/assets/game-page/avatars/0xHearts.png",
      rating: 4.9,
      meta: "3 года на сайте, 4288 отзывов",
    },
    quantity: 322,
    price: "0.64 ₽",
  },
  {
    id: "2",
    description: "ФРУКТ СПИРИТ, СПИРИТ, БЛОКС ФРУКТ, SPIRIT, Предметы, Трейд",
    seller: {
      name: "IgorDun4enkoff",
      avatar: "/assets/game-page/avatars/IgorDun4enkoff.png",
      rating: 2.0,
      meta: "1 год на сайте, 45 отзывов",
    },
    quantity: "∞",
    price: "0.63 ₽",
  },
  {
    id: "3",
    description:
      "🤲Куплю и пройду рейд БУДДЫ - БУДДА РЕЙД - БУДА - место будды - Рейды буды - BUDDHA RAID - 🤲, Услуги",
    seller: {
      name: "Dendi",
      avatar: "/assets/game-page/avatars/dendi.png",
      rating: 5.0,
      meta: "2 дня на сайте, 4 отзыва",
    },
    quantity: 4556,
    price: "0.60 ₽",
  },
  {
    id: "4",
    description: "Рейд Теста - Куплю и пройду рейд Теста - РЕЙДЫ ТЕСТА - МЕСТО ТЕСТА - ДОУЧ, Услуги",
    seller: {
      name: "qewbie",
      avatar: "/assets/game-page/avatars/qewbie.png",
      rating: 1.0,
      meta: "5 лет на сайте, 200 отзывов",
    },
    quantity: 15666,
    price: "0.55 ₽",
  },
  {
    id: "5",
    description: "💛Фрукт Будда 💛 🟡Buddha Fruit🟡, Предметы, Трейд",
    seller: {
      name: "qewbie",
      avatar: "/assets/game-page/avatars/qewbie.png",
      rating: 3.0,
      meta: "5 лет на сайте, 200 отзывов",
    },
    quantity: 104242,
    price: "0.55 ₽",
  },
  {
    id: "6",
    description: "🧠spirit fruit | Спирит | фрукт Спирит🧠, Предметы, Трейд",
    seller: {
      name: "0xHearts.com",
      avatar: "/assets/game-page/avatars/0xHearts.png",
      rating: 4.9,
      meta: "3 года на сайте, 4288 отзывов",
    },
    quantity: 322,
    price: "0.64 ₽",
  },
  {
    id: "7",
    description: "🟦Rumble Fruit🟦Фрукт Грохот, Предметы, Трейд",
    seller: {
      name: "IgorDun4enkoff",
      avatar: "/assets/game-page/avatars/IgorDun4enkoff.png",
      rating: 2.1,
      meta: "1 год на сайте, 45 отзывов",
    },
    quantity: "∞",
    price: "0.63 ₽",
  },
  {
    id: "8",
    description: "🐘 Фрукт Мамонта 🐘 Мамонт/Mammoth 🐘, Предметы, Трейд",
    seller: {
      name: "Dendi",
      avatar: "/assets/game-page/avatars/dendi.png",
      rating: 4.9,
      meta: "2 дня на сайте, 4 отзыва",
    },
    quantity: 1502410,
    price: "0.60 ₽",
  },
  {
    id: "9",
    description: "🔑 🔪  Заспавню и убью катакури в1 / Получение бледного шарфа / бледный шарф  🔪 🔑, Услуги",
    seller: {
      name: "qewbie",
      avatar: "/assets/game-page/avatars/qewbie.png",
      rating: 3.6,
      meta: "5 лет на сайте, 200 отзывов",
    },
    quantity: 15666,
    price: "0.55 ₽",
  },
  {
    id: "10",
    description:
      "👾Призову / Убью(если надо) рип индру / активирую все плиты / Rip_indra / rip_indra / выбью чашу👾, Услуги",
    seller: {
      name: "qewbie",
      avatar: "/assets/game-page/avatars/qewbie.png",
      rating: 3.6,
      meta: "5 лет на сайте, 200 отзывов",
    },
    quantity: 15666,
    price: "0.55 ₽",
  },
  {
    id: "11",
    description:
      "🔑👑 Заспавню и убью катакури в2 / Получение рейда теста / миррор фрактал / зеркальный фрактал /👑🔑, Услуги",
    seller: {
      name: "IgorDun4enkoff",
      avatar: "/assets/game-page/avatars/IgorDun4enkoff.png",
      rating: 2.1,
      meta: "1 год на сайте, 45 отзывов",
    },
    quantity: "∞",
    price: "0.63 ₽",
  },
  {
    id: "12",
    description: "⚔️ КУПЛЮ И ПРОЙДУ ЛО - БОСС ЛО - ЛО - РЕЙД ЛО - ЧИП ЛО - БУСТ - RAID LO - LO - ⚔️, Услуги",
    seller: {
      name: "qewbie",
      avatar: "/assets/game-page/avatars/qewbie.png",
      rating: 3.6,
      meta: "5 лет на сайте, 200 отзывов",
    },
    quantity: 15666,
    price: "0.55 ₽",
  },
  {
    id: "13",
    description: "Вандо, УслугиВандо, Услуги",
    seller: {
      name: "Dendi",
      avatar: "/assets/game-page/avatars/dendi.png",
      rating: 4.9,
      meta: "2 дня на сайте, 4 отзыва",
    },
    quantity: 1502410,
    price: "0.60 ₽",
  },
  {
    id: "14",
    description: "✨🍀Прокачка LvL цена за 1 уровень🍀✨, Услуги",
    seller: {
      name: "qewbie",
      avatar: "/assets/game-page/avatars/qewbie.png",
      rating: 3.6,
      meta: "5 лет на сайте, 200 отзывов",
    },
    quantity: 15666,
    price: "0.55 ₽",
  },
  {
    id: "15",
    description:
      "💝Набор 3 в 1 Покупка Легендарных мечей 💝 wando / shisui / saddi / ТТК / TTK / Вандо / Шисуи/ Садди, Услуги",
    seller: {
      name: "qewbie",
      avatar: "/assets/game-page/avatars/qewbie.png",
      rating: 3.6,
      meta: "5 лет на сайте, 200 отзывов",
    },
    quantity: 104242,
    price: "0.55 ₽",
  },
]

export function OffersTable() {
  return (
    <div className={styles.table}>
      <OffersTableHeader />
      <div className={styles.list}>
        {OFFERS.map((offer) => (
          <OffersTableRow key={offer.id} offer={offer} />
        ))}
      </div>
      <Button type="button" className={styles.moreButton}>
        Показать больше предложений
      </Button>
      <hr className={styles.divider} />
      <OffersTableFooter />
    </div>
  )
}
