import { useEffect, useState } from 'react';
import './FilmsPage.css';
import { useMovies } from '../../hooks/useMovies';
import { Oval } from 'react-loader-spinner';
import { useGenres } from '../../hooks/useGenres';
import { FilmCard } from '../../shared/FilmCard/FilmCard';
import { Modal } from '../../shared/Modal/Modal';

export function FilmsPage(){
    const {movies, isLoading, error} = useMovies();
    const {genres} = useGenres();
    const [filteredMovies, setFilteredMovies] = useState(movies);
    const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
    let [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    function inputOnClick(){
        setIsModalOpen(true);
    }
    
    useEffect(() => {
        console.log(selectedGenres);
    }, [selectedGenres])
    
    function toggleGenreSelection(genre: string) {
        setSelectedGenres((prevGenres) => {
            if (prevGenres.includes(genre)){
                return prevGenres.filter((prevGenre) => prevGenre !== genre);
            }else{
                return [...prevGenres, genre];
            }
        }
        );
    }

    useEffect(() => {
        if (selectedGenres.length === 0) {
            setFilteredMovies(movies);
        } else {
            let newMovies = movies.filter((movie) => {
                return movie.genres.some((genre) => selectedGenres.includes(genre.genreName))
            })
            setFilteredMovies(newMovies) 
        }
    }, [selectedGenres, movies]);

    return (
        <div className='films-page'>
            <div className="text">
                <h1>Усі фільми</h1>
                <p>Підберіть собі новий фільм</p>
            </div>

            <div className='films-list'>
                <div className='select-genre'>
                    <button onClick={(event) => {event.stopPropagation(); inputOnClick()}}>Filters</button>
                    {   isModalOpen === true
                            ?
                            <Modal className="filters-modal" 
                            allowModalCloseOutside={true}
                            onClose={() => setIsModalOpen(false)}
                            >
                            <h3>Genres</h3> 
                            <div>
                                {genres.map((genre) => {
                                    return <button type="button" key = {genre.id} className='filter-button' value={genre.name} onClick={()=>{toggleGenreSelection(genre.name)}}>{genre.name}</button>
                                })} 

                            </div>
                            </Modal>
                            
                            :
                            undefined
                    }
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