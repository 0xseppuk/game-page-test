import { useEffect, type RefObject } from "react"

const FLOATING_PANEL_SELECTOR = "[data-floating-panel]"

export function useDismiss<T extends Element>(ref: RefObject<T | null>, onDismiss: () => void, enabled = true) {
  useEffect(() => {
    if (!enabled) return

    function handlePointerDown(event: PointerEvent) {
      const target = event.target as Element | null
      const isInside = ref.current?.contains(target)
      const isInFloatingPanel = target?.closest(FLOATING_PANEL_SELECTOR)

      if (!isInside && !isInFloatingPanel) {
        onDismiss()
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onDismiss()
      }
    }

    document.addEventListener("pointerdown", handlePointerDown)
    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown)
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [enabled, onDismiss, ref])
}
