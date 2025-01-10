import { useEffect, useState } from "react";

export interface IMovie{
    id: number,
    name: string,
    rating: number,
    age: string,
    year: number,
    country: string,
    language: string,
    description: string,
    facts: string,
    previewSrc: string,
    shots: string,
    genres: any[],
    actors: any[],
}

export function useMovies(){
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>();
    useEffect(() => {   
        async function getMovies(){
            try{
                setIsLoading(true);
                const response = await fetch('http://localhost:8000/movie/all');
                const movies = await response.json();
                setMovies(movies);
            } catch(error){
                const err = error instanceof Error ? error.message : undefined;
                setError(`${err}`);
            } finally{
                setIsLoading(false);
            }
        }

        getMovies();
    }, [])
    return {movies: movies, isLoading: isLoading, error: error};
}