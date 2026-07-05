import { type SVGProps } from "react"

export function SortIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M5 0L9.33013 5H0.669873L5 0Z" fill="currentColor" />
      <path d="M5 14L0.669872 9L9.33013 9L5 14Z" fill="currentColor" />
    </svg>
  )
}
