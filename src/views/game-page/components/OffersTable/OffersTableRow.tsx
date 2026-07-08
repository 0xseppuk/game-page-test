import { Avatar } from "@/shared/ui/avatar"
import { StarIcon } from "@/shared/ui/icons"
import { cn } from "@/shared/lib/cn"
import styles from "./styles.module.scss"

export interface Offer {
  id: string
  description: string
  seller: {
    name: string
    avatar: string
    rating: number | null
    meta: string
  }
  quantity: number | string
  price: string
}

function getRatingTone(rating: number) {
  if (rating >= 4.5) return styles.rating_high
  if (rating >= 2.5) return styles.rating_mid
  return styles.rating_low
}

function formatQuantity(quantity: number | string) {
  return typeof quantity === "number" ? new Intl.NumberFormat("ru-RU").format(quantity) : quantity
}

export function OffersTableRow({ offer }: { offer: Offer }) {
  return (
    <section className={styles.item}>
      <div className={styles.itemContent}>
        <span className={styles.description}>{offer.description}</span>
        <div className={styles.seller}>
          <Avatar name={offer.seller.name} src={offer.seller.avatar} size={28} />
          <div className={styles.sellerInfo}>
            <div className={styles.sellerName}>
              <span>{offer.seller.name}</span>
              {offer.seller.rating !== null && (
                <span className={cn(styles.rating, getRatingTone(offer.seller.rating))}>
                  {offer.seller.rating.toFixed(1)}
                  <StarIcon className={styles.star} />
                </span>
              )}
            </div>
            <div className={styles.sellerMeta}>{offer.seller.meta}</div>
          </div>
        </div>
        <span className={styles.availability}>{formatQuantity(offer.quantity)}</span>
        <span className={styles.price}>{offer.price}</span>
      </div>
    </section>
  )
}
