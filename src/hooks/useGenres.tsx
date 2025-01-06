import { useEffect, useState } from "react";

export function useGenres(){
    const [genres, setGenres] = useState<string[]>([]);

    useEffect(() => {   
        async function getGenres(){
            const response = await fetch('http://localhost:8000/movie/genres');
            const genres = await response.json();
            setGenres(genres);
        }

        getGenres();
    }, [])
    return {genres: genres}
}