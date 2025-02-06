import { useEffect, useState } from 'react';
import './FilmsPage.css';
import { useMovies } from '../../hooks/useMovies';
import { Oval } from 'react-loader-spinner';
import { IGenre, useGenres } from '../../hooks/useGenres';
import { FilmCard } from '../../shared/FilmCard/FilmCard';
import { Modal } from '../../shared/Modal/Modal';

export function FilmsPage(){
    const {movies, isLoading, error} = useMovies();
    const {genres} = useGenres();
    const [filteredMovies, setFilteredMovies] = useState(movies);
    const [selectedGenres, setSelectedGenres] = useState<IGenre[]>([]);
    let [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    // setFilteredMovies({movies})

    function inputOnClick(){
        setIsModalOpen(true);
    }
    
    useEffect(() => {
        setFilteredMovies(movies);
    }, [movies])
    
    function addSelectedGenre(genre: IGenre){
        let genres = [...selectedGenres, genre]
        if (!isGenreSelected(genre)){
            setSelectedGenres(genres);
            return;
        }
        removeSelectedGenre(genre);
    }
    
    function isGenreSelected(genreToCheck: IGenre){
        return selectedGenres.some(genre => genre.name === genreToCheck.name)
    }

    function removeSelectedGenre(genreToCheck: IGenre) {
        let array = selectedGenres.filter((genre) => {
            return genre.name != genreToCheck.name
        })
        setSelectedGenres(array)
    }
    
    function isSubset(){
        let movies = filteredMovies.filter((movie) => {
            // console.log(movie);
            return selectedGenres.every(value => movie.genres.filter((genre) => {
                return genre.genreId === value.id;
            }));
        })
        return movies;
    }

    useEffect(() => {
        if (selectedGenres.length === 0){
            setFilteredMovies(movies);
        } else{
            let newMovies = isSubset();
            console.log(newMovies);
            setFilteredMovies(newMovies);
        }
        console.log(selectedGenres);
    }, [selectedGenres])

    // useEffect(() => console.log(filteredMovies), [filteredMovies])

    // console.log(selectedGenres);
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
                                    return <button type="button" className='filter-button' onClick={()=>{addSelectedGenre(genre);}}>{genre.name}</button>
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