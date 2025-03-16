import { useEffect, useState } from "react";
import { IGenre } from "./useGenres";

export function useGenreByName(name: string){
    let [genre, setGenre] = useState<IGenre>();
    let [error, setError] = useState<string>();
    useEffect(() => {
        async function getMovieById(){
            try{
                let response = await fetch(`http://localhost:8000/movie/genre/${name}`);
                let genre = await response.json();
                setGenre(genre.data);
            } catch(error){
                const err = error instanceof Error ? error.message : undefined
                setError(err);
            }
        
        }
        getMovieById();
    }, [genre]);

    return {genre: genre, error: error};
}