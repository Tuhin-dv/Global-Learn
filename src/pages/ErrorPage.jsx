"use client"

import { useState, useEffect } from "react"

const ErrorPage = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleGoBack = () => {
    if (typeof window !== "undefined") {
      window.history.back()
    }
  }

  const handleGoHome = () => {
    if (typeof window !== "undefined") {
      window.location.href = "/"
    }
  }

  const handleRefresh = () => {
    if (typeof window !== "undefined") {
      window.location.reload()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 dark:from-gray-900 dark:via-red-900/20 dark:to-gray-800 flex items-center justify-center p-4 transition-colors duration-500">
      <div className="max-w-4xl mx-auto text-center">
        {/* Animated Error Icon */}
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="relative mb-8">
            {/* Main Error Circle */}
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
              <span className="text-4xl md:text-5xl text-white font-bold">!</span>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce delay-300"></div>
            <div className="absolute -bottom-2 -left-6 w-6 h-6 bg-orange-400 rounded-full animate-bounce delay-700"></div>
            <div className="absolute top-1/2 -right-8 w-4 h-4 bg-red-300 rounded-full animate-bounce delay-500"></div>
          </div>
        </div>

        {/* Error Code */}
        <div
          className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 mb-4 tracking-tight">
            404
          </h1>
        </div>

        {/* Error Message */}
        <div
          className={`transform transition-all duration-1000 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">Oops! Page Not Found</h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            The page you're looking for seems to have vanished into the digital void. Don't worry, even the best
            explorers sometimes take a wrong turn!
          </p>
        </div>

        {/* Decorative Elements */}
        <div
          className={`transform transition-all duration-1000 delay-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="flex justify-center items-center space-x-4 mb-8">
            <div className="w-16 h-1 bg-gradient-to-r from-red-400 to-transparent rounded-full"></div>
            <div className="w-3 h-3 bg-red-400 rounded-full animate-ping"></div>
            <div className="w-16 h-1 bg-gradient-to-l from-red-400 to-transparent rounded-full"></div>
          </div>
        </div>

        {/* Action Buttons */}
        <div
          className={`transform transition-all duration-1000 delay-900 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleGoHome}
              className="group relative px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-red-300 focus:ring-offset-2"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span className="text-lg">🏠</span>
                <span>Go Home</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button
              onClick={handleGoBack}
              className="group px-8 py-4 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 font-semibold rounded-xl border-2 border-gray-300 dark:border-gray-600 hover:border-red-300 dark:hover:border-red-500 transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-gray-300 focus:ring-offset-2"
            >
              <span className="flex items-center space-x-2">
                <span className="text-lg">⬅️</span>
                <span>Go Back</span>
              </span>
            </button>

            <button
              onClick={handleRefresh}
              className="group px-8 py-4 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 font-semibold rounded-xl border-2 border-gray-300 dark:border-gray-600 hover:border-orange-300 dark:hover:border-orange-500 transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-gray-300 focus:ring-offset-2"
            >
              <span className="flex items-center space-x-2">
                <span className="text-lg group-hover:animate-spin">🔄</span>
                <span>Refresh</span>
              </span>
            </button>
          </div>
        </div>

        {/* Additional Help Section */}
        <div
          className={`transform transition-all duration-1000 delay-1100 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="mt-12 p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Need Help? 🤔</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center space-x-2">
                <span className="text-blue-500">📧</span>
                <span>Contact Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-500">💬</span>
                <span>Live Chat</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-purple-500">📚</span>
                <span>Help Center</span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Background Elements */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-3/4 left-1/3 w-48 h-48 bg-yellow-200/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage
