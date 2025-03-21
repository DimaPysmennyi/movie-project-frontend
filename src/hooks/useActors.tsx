import { useEffect, useState } from "react";
import { IActor } from "./useActorById";

export function useActors(){
    const [actors, setActors] = useState<IActor[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>();
    useEffect(() => {   
        async function getActors(){
            try{
                setIsLoading(true);
                const response = await fetch('http://localhost:8000/movie/actor/all');
                const actors = await response.json();
                setActors(actors.data);
            } catch(error){
                const err = error instanceof Error ? error.message : undefined;
                setError(`${err}`);
            } finally{
                setIsLoading(false);
            }
        }

        getActors();
    }, [])
    return {actors: actors, isLoading: isLoading, error: error};
}