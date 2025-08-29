import { createContext, useContext, useState, type ReactNode } from "react"

interface Filme {
  id: number
  title: string
  poster_path: string
  backdrop_path: string
}

interface FavoritesContextType {
  favorites: Filme[]
  addFavorite: (filme: Filme) => void
  removeFavorite: (id: number) => void
  isFavorite: (id: number) => boolean
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined)

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<Filme[]>([])

  const addFavorite = (filme: Filme) => {
    if (!favorites.find(f => f.id === filme.id)) {
      setFavorites([...favorites, filme])
    }
  }

  const removeFavorite = (id: number) => {
    setFavorites(favorites.filter(f => f.id !== id))
  }

  const isFavorite = (id: number) => {
    return favorites.some(f => f.id === id)
  }

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  )
}

export const useFavorites = () => {
  const context = useContext(FavoritesContext)
  if (!context) throw new Error("useFavorites precisa estar dentro do FavoritesProvider")
  return context
}
