import { useEffect, useState } from "react";
import { IGenre } from "./useGenres";

export function useGenreById(id: number){
    let [genre, setGenre] = useState<IGenre>();
    let [error, setError] = useState<string>();
    useEffect(() => {
        async function getGenreById(){
            try{
                let response = await fetch(`http://localhost:8000/genre/${id}`);
                let genre = await response.json();
                setGenre(genre.data);
            } catch(error){
                const err = error instanceof Error ? error.message : undefined
                setError(err);
            }
        
        }
        getGenreById();
    }, []);

    return {genre: genre, error: error};
}