import { useEffect, useState } from 'react'

// Returns the id of the section whose top has most recently scrolled past
// 40% of the viewport height. At the very bottom of the page, the last section wins.
export default function useActiveSection(ids, enabled = true) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    if (!enabled) return

    const update = () => {
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2
      const line = atBottom ? Infinity : window.innerHeight * 0.4

      let current = ids[0]
      let closestTop = -Infinity
      for (const id of ids) {
        const element = document.getElementById(id)
        if (!element) continue
        const top = element.getBoundingClientRect().top
        if (top <= line && top > closestTop) {
          closestTop = top
          current = id
        }
      }
      setActive(current)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [ids, enabled])

  return active
}
