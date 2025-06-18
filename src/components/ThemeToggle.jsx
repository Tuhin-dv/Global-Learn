"use client"

import { useState, useEffect } from "react"
import { MdDarkMode, MdLightMode } from "react-icons/md"

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme")
    if (storedTheme === "dark") {
      setIsDark(true)
      document.documentElement.classList.add("dark")
    } else {
      setIsDark(false)
      document.documentElement.classList.remove("dark")
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    if (newTheme) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex h-8 w-14 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-700 transition-colors duration-200 hover:bg-slate-300 dark:hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {/* Toggle Track */}
      <div className="absolute inset-0 rounded-full bg-slate-200 dark:bg-slate-700 transition-colors duration-200" />

      {/* Toggle Thumb */}
      <div
        className={`relative flex h-6 w-6 items-center justify-center rounded-full bg-white dark:bg-slate-800 shadow-sm transition-all duration-200 transform ${
          isDark ? "translate-x-3" : "-translate-x-3"
        }`}
      >
        {/* Icon */}
        <div className="flex items-center justify-center">
          {isDark ? (
            <MdLightMode className="h-3.5 w-3.5 text-amber-500 transition-colors duration-200" />
          ) : (
            <MdDarkMode className="h-3.5 w-3.5 text-slate-600 transition-colors duration-200" />
          )}
        </div>
      </div>

      {/* Background Icons */}
      <div className="absolute inset-0 flex items-center justify-between px-2">
        <MdDarkMode
          className={`h-3 w-3 transition-opacity duration-200 ${isDark ? "opacity-40 text-slate-400" : "opacity-0"}`}
        />
        <MdLightMode
          className={`h-3 w-3 transition-opacity duration-200 ${isDark ? "opacity-0" : "opacity-40 text-slate-500"}`}
        />
      </div>
    </button>
  )
}

export default ThemeToggle
