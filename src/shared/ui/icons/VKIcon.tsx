import { type SVGProps } from "react"

export function VKIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none" {...props}>
      <g clipPath="url(#clip0_3661_268)">
        <ellipse cx="22" cy="12" rx="12" ry="5" fill="#0077FF" />
        <g filter="url(#filter0_i_3661_268)">
          <circle cx="22" cy="22" r="22" transform="matrix(1 0 0 -1 0 44)" fill="url(#paint0_linear_3661_268)" />
        </g>
        <circle
          cx="22"
          cy="22"
          r="21"
          transform="matrix(1 0 0 -1 0 44)"
          stroke="url(#paint1_linear_3661_268)"
          strokeWidth="2"
          style={{ mixBlendMode: "soft-light" }}
        />
        <g transform="translate(3.73 3.57) scale(0.36)">
          <path
            d="M53.7085 72.042C30.9168 72.042 17.9169 56.417 17.3752 30.417H28.7919C29.1669 49.5003 37.5834 57.5836 44.25 59.2503V30.417H55.0004V46.8752C61.5837 46.1669 68.4995 38.667 70.8329 30.417H81.5832C79.7915 40.5837 72.2915 48.0836 66.9582 51.1669C72.2915 53.6669 80.8336 60.2086 84.0836 72.042H72.2499C69.7082 64.1253 63.3754 58.0003 55.0004 57.1669V72.042H53.7085Z"
            fill="#0077FF"
          />
        </g>
      </g>
      <rect
        x="0.5"
        y="0.5"
        width="43"
        height="43"
        rx="21.5"
        stroke="url(#paint2_linear_3661_268)"
        strokeOpacity="0.32"
      />
      <defs>
        <filter
          id="filter0_i_3661_268"
          x="0"
          y="0"
          width="44"
          height="44"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology radius="5.6" operator="erode" in="SourceAlpha" result="effect1_innerShadow_3661_268" />
          <feOffset />
          <feGaussianBlur stdDeviation="6.4" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.27451 0 0 0 0 0.501961 0 0 0 0 0.760784 0 0 0 0.04 0" />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_3661_268" />
        </filter>
        <linearGradient id="paint0_linear_3661_268" x1="22" y1="44" x2="22" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#DFEAF5" />
          <stop offset="1" stopColor="#F2F7FB" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_3661_268"
          x1="14.7093"
          y1="0"
          x2="14.7093"
          y2="44"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0.49" />
        </linearGradient>
        <linearGradient id="paint2_linear_3661_268" x1="22" y1="0" x2="22" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0077FF" />
          <stop offset="1" stopColor="#0077FF" stopOpacity="0.52" />
        </linearGradient>
        <clipPath id="clip0_3661_268">
          <rect width="44" height="44" rx="22" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
