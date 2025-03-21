import { useEffect, useState } from "react";

interface IActorMovie{
    movieId: number,
    actorName: string,
    actorId: number,
}

export interface IActor{
    id: number,
    name: string,
    birthname: string,
    country: string,
    awards: string,
    src: string,
    movieCount: number,
    description: string,
    movies: IActorMovie[],
}

export function useActorById(id: number){
    let [actor, setActor] = useState<IActor>();
    let [error, setError] = useState<string>();

    useEffect(() => {
        async function getActor(){
            try{
                let response = await fetch(`http://localhost:8000/movie/actor/${id}`);
                let actor = await response.json();
                setActor(actor.data);
            } catch(error){
                const err = error instanceof Error ? error.message : undefined
                setError(err);
            }
        }
        getActor();
    }, [id])

    return {actor: actor, error: error};
}