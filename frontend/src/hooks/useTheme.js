import { useState, useEffect } from 'react'

export default function useTheme() {
  const [isDark, setIsDark] = useState(() => {
    const stored = localStorage.getItem('theme')
    return stored ? stored === 'dark' : true
  })

  useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.classList.remove('light')
      root.classList.add('dark')
      document.body.classList.remove('light')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      root.classList.add('light')
      document.body.classList.add('light')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  const toggleTheme = () => setIsDark(prev => !prev)
  return { isDark, toggleTheme }
}
