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
      aria-pressed={theme === 'dark'}
      aria-label={
        theme === 'light' ? 'Ativar modo escuro' : 'Ativar modo claro'
      }
      className="absolute top-6 right-6 z-50 flex items-center p-1 rounded-full 
                 bg-gray-200 dark:bg-gray-700 
                 border border-gray-200 dark:border-gray-700
                 transition-all duration-300 cursor-pointer group
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-950"
    >
      <div
        className={`
          relative flex items-center rounded-full p-1 w-12 h-7 overflow-hidden transition-all duration-500
          
          group-hover:brightness-90
          dark:group-hover:brightness-130
          ${theme === 'dark' ? 'bg-purple-700' : 'bg-purple-300'}
        `}
      >
        <div
          className={`relative z-10 flex items-center justify-center w-5 h-5 rounded-full shadow-md transform transition-transform duration-500 cubic-bezier(0.34, 1.56, 0.64, 1) ${
            theme === 'dark'
              ? 'translate-x-5 bg-gray-600'
              : 'translate-x-0 bg-gray-100'
          }`}
        >
          {theme === 'light' ? (
            <Sun
              className="w-3 h-3 text-yellow-500 fill-yellow-500"
              aria-hidden="true"
            />
          ) : (
            <Moon
              className="w-3 h-3 text-purple-300 fill-white"
              aria-hidden="true"
            />
          )}
        </div>

        <div className="absolute inset-0 flex justify-between items-center px-2 pointer-events-none">
          <Moon
            className={`w-2.5 h-2.5 text-purple-600 transition-opacity duration-500 ${theme === 'light' ? 'opacity-20' : 'opacity-0'}`}
          />
          <Sun
            className={`w-2.5 h-2.5 text-gray-400 transition-opacity duration-500 ${theme === 'dark' ? 'opacity-20' : 'opacity-0'}`}
          />
        </div>
      </div>
    </button>
  )
}

export default ThemeToggle
