import { useEffect, useState } from "react";
import { IMovie } from "./useMovies";

export function useMovieById(id: number){
    let [movie, setMovie] = useState<IMovie>();
    let [error, setError] = useState<string>();
    useEffect(() => {

        async function getMovieById(){
            try{
                let response = await fetch(`http://localhost:8000/movie/${id}`);
                let movie = await response.json();
                setMovie(movie)
            } catch(error){
                const err = error instanceof Error ? error.message : undefined
                setError(err);
            }

        }
        getMovieById();
    }, [id]);

    return {movie: movie, error: error};
}