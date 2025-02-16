import { useParams } from "react-router-dom"
import { useActorById } from "../../hooks/useActorById"
import { IMovie, useMovies } from "../../hooks/useMovies";
import { FilmCard } from "../../shared/FilmCard/FilmCard";
import { useEffect, useState } from "react";
import './ActorPage.css';

export function ActorPage(){
    const params = useParams();
    let { actor, error }: any = useActorById(Number(params.id));
    let { movies } = useMovies();
    let [ actorMovies, setActorMovies ] = useState<IMovie[]>([]);

    useEffect(() => { 
        if (actor !== undefined){
            let actorMovies = movies.filter((movie) => {
                return movie.actors.some((movieActor) => movieActor.actorName === actor.name)
            })
            setActorMovies(actorMovies);
        }
    }, [movies, actor])

    if (actor != undefined){
        return (
            <div className="actor-div">
                <div className="actor-info">
                    <img src={actor.src} alt="actor img" />
                    <div className="actor-info-text">
                        <p>{actor.name}</p>
                        <p>{actor.birthdate}</p>
                        <p>{actor.country}</p>
                        <p>{actor.movieCount} movies</p>
                        <p>{actor.awards}</p>
                    </div>
                </div>
                <div className="actor-secondary-info">
                    <h2>{actor.name}</h2>
                    <hr />
                    <h2>Фільми актора</h2>
                    <div className="actor-movies">
                        {actorMovies.map((movie) => {
                            return <FilmCard key={movie.id} id={movie.id} name={movie.name} previewSrc={movie.previewSrc} rating = {movie.rating}/>
                        })}
                    </div>
                </div>
            </div>
        )
    } else{
        return <div>{error}</div>
    }
}