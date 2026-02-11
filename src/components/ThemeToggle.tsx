import { Moon, Sun } from 'lucide-react'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { toggleTheme } from '../store/themeSlice'

const ThemeToggle = () => {
  const dispatch = useAppDispatch()
  const theme = useAppSelector((state) => state.theme.mode)

  const handleToggle = () => {
    dispatch(toggleTheme())
  }

  return (
    <button
      onClick={handleToggle}
      className="fixed top-6 right-6 z-50 p-3 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-md 
                 shadow-lg border border-gray-200 dark:border-gray-700
                 hover:scale-110 active:scale-95 transition-all duration-300
                 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 cursor-pointer"
      aria-label={
        theme === 'light' ? 'Ativar modo escuro' : 'Ativar modo claro'
      }
      title={theme === 'light' ? 'Ativar modo escuro' : 'Ativar modo claro'}
    >
      <div className="relative w-6 h-6 flex items-center justify-center">
        <Sun
          className={`absolute w-5 h-5 text-yellow-500 transition-all duration-500 transform
            ${theme === 'dark' ? 'scale-100 rotate-0 opacity-100' : 'scale-0 -rotate-90 opacity-0'}`}
        />

        <Moon
          className={`absolute w-5 h-5 text-purple-600 transition-all duration-500 transform
            ${theme === 'light' ? 'scale-100 rotate-0 opacity-100' : 'scale-0 rotate-90 opacity-0'}`}
        />
      </div>
    </button>
  )
}

export default ThemeToggle
