import { useEffect, useRef, type RefObject } from "react"

const FLOATING_PANEL_SELECTOR = "[data-floating-panel]"

export function useDismiss<T extends Element>(
  refs: RefObject<T | null> | RefObject<T | null>[],
  onDismiss: () => void,
  enabled = true
) {
  const onDismissRef = useRef(onDismiss)
  const refsList = Array.isArray(refs) ? refs : [refs]

  useEffect(() => {
    onDismissRef.current = onDismiss
  })

  useEffect(() => {
    if (!enabled) return

    function handlePointerDown(event: PointerEvent) {
      const target = event.target as Element | null
      const isInside = refsList.some((ref) => ref.current?.contains(target as Node))
      const isInFloatingPanel = target?.closest(FLOATING_PANEL_SELECTOR)
      if (!isInside && !isInFloatingPanel) onDismissRef.current()
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onDismissRef.current()
      }
    }

    document.addEventListener("pointerdown", handlePointerDown)
    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown)
      document.removeEventListener("keydown", handleKeyDown)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled, ...refsList])
}
