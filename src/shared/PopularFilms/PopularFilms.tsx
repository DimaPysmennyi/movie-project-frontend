import './PopularFilms.css';
import { FilmCard } from '../FilmCard/FilmCard';
import { useMovieById } from '../../hooks/useMovieById';

export function PopularFilms(){
    const {movie, error} = useMovieById(1);
    return (
        <div className="popularFilms">
            <h2>Популярні фільми</h2>
            <div className='films'>
                {movie?
                    <FilmCard className='popular-card' id={movie.id} name={movie.name} previewSrc={movie.previewSrc} rating={movie.rating}></FilmCard>
                :
                <div>{error}</div>
                }
            </div>
        </div>
    )
}