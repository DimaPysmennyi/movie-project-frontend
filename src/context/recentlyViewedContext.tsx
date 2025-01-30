import { createContext, ReactNode, useState } from "react"
import { useContext } from "react";
import { IMovie } from "../hooks/useMovies";

interface IRecentlyViewedContext {
    recentlyViewed: IMovie[]
    addRecentlyViewed: (movie: IMovie) => void
    updateRecentlyViewed: (movie: IMovie) => void
    isRecentlyViewed: (id: number) => boolean
}

const initialVanlue: IRecentlyViewedContext = {
    recentlyViewed: [],
    addRecentlyViewed: (movie: IMovie) => {},
    updateRecentlyViewed: (movie: IMovie) => {},
    isRecentlyViewed: (id: number) => false,
}

export const RecentlyViewedContext = createContext<IRecentlyViewedContext>(initialVanlue)

export function useRecentlyViewedContext(){
    return useContext(RecentlyViewedContext)
}

interface IRecentlyViewedContextProviderProps {
    children: ReactNode
}

export function RecentlyViewedContextProvider(props: IRecentlyViewedContextProviderProps){
    const {children} = props
    const [recentlyViewed, setRecentlyViewed] = useState<IMovie[]>([])

    function addRecentlyViewed(movie: IMovie){
        let array = [...recentlyViewed, movie]
        setRecentlyViewed(array)
    }

    function updateRecentlyViewed(movie: IMovie){
        let array = recentlyViewed.slice(1)
        array = [...array, movie]
        setRecentlyViewed(array)
    }

    function isRecentlyViewed(id: number){
        return recentlyViewed.some(movie => movie.id === id)
    }

    return (
        <RecentlyViewedContext.Provider value={{
            recentlyViewed: recentlyViewed,
            addRecentlyViewed: addRecentlyViewed,
            updateRecentlyViewed: updateRecentlyViewed,
            isRecentlyViewed: isRecentlyViewed
        }}>
            {children}
        </RecentlyViewedContext.Provider>
    )
}