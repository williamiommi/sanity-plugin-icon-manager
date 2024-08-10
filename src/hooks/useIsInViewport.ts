/* eslint-disable no-undef */
/* eslint-disable consistent-return */
import {RefObject, useEffect, useRef, useState} from 'react'

export default function useIsInViewport<T extends Element>(
  options: IntersectionObserverInit = {},
): {ref: RefObject<T>; elementHitViewport: boolean} {
  const [elementHitViewport, setElementHitViewport] = useState(false)
  const ref = useRef<T>(null)

  useEffect(() => {
    if (elementHitViewport || !ref.current) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setElementHitViewport(true)
        observer.disconnect()
      }
    }, options)

    const element = ref.current
    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [elementHitViewport, options])

  return {ref, elementHitViewport}
}
