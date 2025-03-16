import { useEffect, useState } from "react";

export interface IGenre{
    id: number,
    name: string,
    description: string,
}

export function useGenres(){
    const [genres, setGenres] = useState<IGenre[]>([]);

    useEffect(() => {   
        async function getGenres(){
            const response = await fetch('http://localhost:8000/genre/all');
            const genres = await response.json();
            setGenres(genres.data);
        }

        getGenres();
    }, [])
    return {genres: genres};
}