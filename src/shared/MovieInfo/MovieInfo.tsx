import { ReactNode } from "react";
import { IMovie } from "../../hooks/useMovies";
import './MovieInfo.css';

interface IMovieProps{
    children: IMovie;
}

export function MovieInfo(props: IMovieProps){
    let movie = props.children
    return (
        <div className='movie-info'>
            <div className="headlines">
                <div className="movie-img-div">
                    <img className="movie-image" src={movie.previewSrc} alt={movie.name} />
                </div>
                
                <div className="movie-text-div">
                    <h1 className="movie-title">{movie.name}</h1>
                    <div className="additional-info-div">
                        <h3 className="movie-additional-info">{movie.year}</h3>
                        <h3 className="movie-additional-info">{movie.age}</h3>
                        <h3 className="movie-additional-info">{movie.country}</h3>
                        <h3 className="movie-additional-info">{movie.language}</h3>                            
                        <button className="add-to-watchlist">+ Зберегти</button>
                    </div>
                    <div className="movie-shot">
                        <img src={movie.shots} alt="shot"/>
                    </div>
                    <div className="movie-rating"> 
                        <p>⭐{movie.rating}/10</p>
                    </div>
                </div>
            </div>
            <hr className="movie-hr1"/>
            <div className="description">
                <h3 className="movie-description">{movie.description}</h3>
                <hr className="movie-hr" />
                <h3 className="movie-genres">
                    <label className="bold-text">Жанри:&nbsp;</label> 
                    
                    {movie.genres.map((genre) => {
                        if (movie.genres.length > 1){
                            return `${genre.genreName},`;
                        } 
                        return genre.genreName;
                    })}
                </h3>
                <hr className="movie-hr"/>
                <h3 className="movie-actors">
                    <label className="bold-text">Актори:&nbsp;</label> 
                    {movie.actors.map((actor) => {
                        if (movie.actors.length > 1){
                            return `${actor.actorName},`;
                        }
                        return actor.actorName;
                    })}
                </h3>
            </div>
            
        </div>
    )
}