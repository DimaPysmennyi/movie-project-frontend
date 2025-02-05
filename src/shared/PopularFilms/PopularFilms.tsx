import './PopularFilms.css';
import { FilmCard } from '../FilmCard/FilmCard';
import { useMovieById } from '../../hooks/useMovieById';

export function PopularFilms() {
    const movie1 = useMovieById(1).movie;
    const movie2 = useMovieById(2).movie;
    const movie3 = useMovieById(3).movie;
    const movie4 = useMovieById(4).movie;
    const movie5 = useMovieById(5).movie;
    

    return (
        <div className="popularFilms">
            <h2>|Популярні фільми</h2>
            <div className='films'>
                {movie1 && <FilmCard className='popular-card' {...movie1} />}
                {movie2 && <FilmCard className='popular-card' {...movie2} />}
                {movie3 && <FilmCard className='popular-card' {...movie3} />}
                {movie4 && <FilmCard className='popular-card' {...movie4} />}
                {movie5 && <FilmCard className='popular-card' {...movie5} />}
            </div>
        </div>
    );
}