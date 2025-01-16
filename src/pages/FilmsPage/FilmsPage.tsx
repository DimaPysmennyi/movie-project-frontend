import { useEffect, useState } from 'react';
import './FilmsPage.css';
import { Link } from 'react-router-dom';
import { IMovie } from '../../hooks/useMovies';
import { useMovies } from '../../hooks/useMovies';
import { Oval } from 'react-loader-spinner';
import { IGenre, useGenres } from '../../hooks/useGenres';
import { FilmCard } from '../../shared/FilmCard/FilmCard';

export function FilmsPage(){
    const {movies, isLoading, error} = useMovies();
    const {genres} = useGenres();
    const [filteredMovies, setFilteredMovies] = useState(movies);
    // const [genres, setGenres] = useState<IGenre[]>([]);
    const [selectedGenre, setSelectedGenre] = useState('All');

    // setFilteredMovies({movies})

    useEffect(() => {
        setFilteredMovies(movies);
    }, [movies])    

    useEffect(() => {
        if (selectedGenre === "All"){
            setFilteredMovies(movies);
        } else {
            setFilteredMovies(movies.filter((movie)=> {
                for (let genre of movie.genres){
                    return selectedGenre === genre.genreName; 
                }

            }))
        }
        console.log(selectedGenre);
    }, [selectedGenre])

    // console.log(filteredMovies);
    console.log(genres);
    
    return (
        <div className='films-page'>
            <div className="text">
                <h1>Усі фільми</h1>
                <p>Підберіть собі новий фільм</p>
            </div>

            <div className='films-list'>
                <div className='select-genre'>
                    <select onChange={(event)=>{
                        setSelectedGenre(event.target.value)
                        }}>
                        <option value="All">All</option>
                        {genres.map((genre) => {
                            return (
                                <option key={genre.id} value={genre.name}>{genre.name}</option>
                            )
                        })}
                    </select>
                </div>

                <div className='selected-films'>
                    { isLoading === false ? !error ? filteredMovies.map((movie)=> {
                        return (
                            <FilmCard id={movie.id} name={movie.name} previewSrc={movie.previewSrc} rating={movie.rating}></FilmCard>
                        )}
                    ) : (<div>{error}</div>) : (<div className='oval'><Oval
                        visible={true}
                        height="100"
                        width="100"
                        color="white"
                        secondaryColor='#FFFFFF'
                        ariaLabel="oval-loading"
                        wrapperStyle={{}}
                        wrapperClass=""    
                    /></div>)}
                    
                </div>    
            </div>
        </div>
    )
}