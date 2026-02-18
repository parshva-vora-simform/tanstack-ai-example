import { useState, useEffect } from 'react'
import { Plus, Minus, RotateCcw } from 'lucide-react'

export function Counter() {
  const [count, setCount] = useLocalStorage('counter', 0)

  return (
    <div className="fixed bottom-6 right-6 bg-white rounded-2xl shadow-lg border border-slate-200 p-6 min-w-[240px]">
      <div className="text-center mb-4">
        <p className="text-sm font-medium text-slate-600 mb-2">Counter Value</p>
        <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          {count}
        </div>
      </div>
      
      <div className="flex gap-2 justify-center">
        <button 
          onClick={() => setCount(count - 1)}
          className="p-3 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
          title="Decrement"
        >
          <Minus className="w-5 h-5 text-slate-700" />
        </button>
        
        <button 
          onClick={() => setCount(0)}
          className="p-3 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
          title="Reset"
        >
          <RotateCcw className="w-5 h-5 text-slate-700" />
        </button>
        
        <button 
          onClick={() => setCount(count + 1)}
          className="p-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-xl transition-colors"
          title="Increment"
        >
          <Plus className="w-5 h-5 text-white" />
        </button>
      </div>
      
      <p className="text-xs text-slate-500 text-center mt-3">
        Try asking the AI to update this counter!
      </p>
    </div>
  )
}

function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key)
    return storedValue ? (JSON.parse(storedValue) as T) : initialValue
  })

  useEffect(() => {
    // Listen for storage changes from other tabs/windows
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === key && e.newValue) {
        setValue(JSON.parse(e.newValue) as T)
      }
    }

    // Listen for custom storage events (for same-tab updates)
    const handleCustomStorageChange = (e: CustomEvent) => {
      if (e.detail.key === key) {
        setValue(e.detail.value as T)
      }
    }

    // Poll localStorage to catch changes made by AI tools
    const intervalId = setInterval(() => {
      const storedValue = localStorage.getItem(key)
      if (storedValue) {
        const parsedValue = JSON.parse(storedValue) as T
        setValue(parsedValue)
      }
    }, 500) // Check every 500ms

    window.addEventListener('storage', handleStorageChange)
    window.addEventListener('localStorageChange' as any, handleCustomStorageChange as any)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
      window.removeEventListener('localStorageChange' as any, handleCustomStorageChange as any)
      clearInterval(intervalId)
    }
  }, [key])

  const setLocalStorageValue = (newValue: T) => {
    setValue(newValue)
    localStorage.setItem(key, JSON.stringify(newValue))
    
    // Dispatch custom event for same-tab updates
    window.dispatchEvent(new CustomEvent('localStorageChange', {
      detail: { key, value: newValue }
    }))
  }

  return [value, setLocalStorageValue] as const
}
