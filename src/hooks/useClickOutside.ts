import {RefObject, useCallback, useEffect, useRef} from 'react'

const useClickOutside = <T extends HTMLElement = HTMLElement>(
  cb: (event: Event) => void,
): RefObject<T> => {
  const ref = useRef<T>(null)
  const refCB = useRef<(event: Event) => void>()

  const onClickOutsideHandler = useCallback(
    (event: Event) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return
      }
      if (refCB.current) refCB.current(event)
      else refCB.current = cb
    },
    [ref, refCB, cb],
  )

  useEffect(() => {
    if (ref.current) {
      document.addEventListener('click', onClickOutsideHandler)
      document.addEventListener('touchstart', onClickOutsideHandler)
    }
    return () => {
      document.removeEventListener('click', onClickOutsideHandler)
      document.removeEventListener('touchstart', onClickOutsideHandler)
    }
  }, [ref, onClickOutsideHandler])

  return ref
}

export default useClickOutside
