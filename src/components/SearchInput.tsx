import { Search } from 'lucide-react'

interface SearchInputProps {
  searchTerm: string
  onSearchChange: (value: string) => void
}

const SearchInput = ({ searchTerm, onSearchChange }: SearchInputProps) => {
  return (
    <div className="relative w-full max-w-md">
      <label htmlFor="project-search" className="sr-only">
        Pesquisar projetos por nome, tecnologia ou categoria
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search size={18} className="text-purple-600 dark:text-purple-400" />
        </div>
        <input
          id="project-search"
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Ex: React, Fullstack, API..."
          className="w-full pl-11 pr-4 py-3 bg-gray-100/50 dark:bg-gray-900 border border-purple-200 dark:border-purple-900/50 rounded-2xl focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 font-medium"
        />
      </div>
    </div>
  )
}

export default SearchInput
