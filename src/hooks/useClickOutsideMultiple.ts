import {createRef, RefObject, useCallback, useEffect, useRef} from 'react'

const useClickOutsideMultiple = <T extends HTMLElement = HTMLElement>(
  cb: (event: Event) => void,
  numberOfRef: number,
): RefObject<T>[] => {
  const els = Array.from(Array(numberOfRef).keys())
  const refs = useRef<RefObject<T>[]>(els.map(() => createRef()))
  const refCB = useRef<(event: Event) => void>(cb)

  const onClickOutsideHandler = useCallback(
    (event: Event) => {
      if (refs?.current?.some((ref) => ref?.current?.contains(event.target as Node))) {
        return
      }
      if (refCB.current) refCB.current(event)
      else refCB.current = cb
    },
    [refs, refCB, cb],
  )

  useEffect(() => {
    if (refs.current) {
      document.addEventListener('click', onClickOutsideHandler)
      document.addEventListener('touchstart', onClickOutsideHandler)
    }
    return () => {
      document.removeEventListener('click', onClickOutsideHandler)
      document.removeEventListener('touchstart', onClickOutsideHandler)
    }
  }, [refs, onClickOutsideHandler])

  return [...refs.current]
}

export default useClickOutsideMultiple
