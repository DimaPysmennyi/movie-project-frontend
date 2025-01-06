import { useEffect, useState } from 'react';
import './FilmsPage.css';
import { Link } from 'react-router-dom';
import { useMovies } from '../../hooks/useMovies';
import { IMovie } from '../../hooks/useMovies';
import { Oval } from 'react-loader-spinner';

// const films = [
//     {id: 0, title: 'Dune: Prophecy', rating: 7.3, image: 'https://preview.redd.it/official-poster-for-dune-prophecy-v0-rsh60b58clpd1.jpeg?auto=webp&s=986ccca6dcf1bb1954df74f4dca27771b8dc84ba', genre: 'Genre1'},
//     {id: 1, title: 'Dune: Prophecy', rating: 7.3, image: 'https://preview.redd.it/official-poster-for-dune-prophecy-v0-rsh60b58clpd1.jpeg?auto=webp&s=986ccca6dcf1bb1954df74f4dca27771b8dc84ba', genre: 'Genre1'},
//     {id: 2, title: 'Dune: Prophecy', rating: 7.3, image: 'https://preview.redd.it/official-poster-for-dune-prophecy-v0-rsh60b58clpd1.jpeg?auto=webp&s=986ccca6dcf1bb1954df74f4dca27771b8dc84ba', genre: 'Genre1'},
//     {id: 3, title: 'Dune: Prophecy', rating: 8.3, image: 'https://preview.redd.it/official-poster-for-dune-prophecy-v0-rsh60b58clpd1.jpeg?auto=webp&s=986ccca6dcf1bb1954df74f4dca27771b8dc84ba', genre: 'Genre1'},
//     {id: 4, title: 'Dune: Prophecy', rating: 8.3, image: 'https://preview.redd.it/official-poster-for-dune-prophecy-v0-rsh60b58clpd1.jpeg?auto=webp&s=986ccca6dcf1bb1954df74f4dca27771b8dc84ba', genre: 'Genre2'},
//     {id: 5, title: 'Dune: Prophecy', rating: 8.3, image: 'https://preview.redd.it/official-poster-for-dune-prophecy-v0-rsh60b58clpd1.jpeg?auto=webp&s=986ccca6dcf1bb1954df74f4dca27771b8dc84ba', genre: 'Genre2'},
//     {id: 6, title: 'Dune: Prophecy', rating: 7.3, image: 'https://preview.redd.it/official-poster-for-dune-prophecy-v0-rsh60b58clpd1.jpeg?auto=webp&s=986ccca6dcf1bb1954df74f4dca27771b8dc84ba', genre: 'Genre2'},
//     {id: 7, title: 'Dune: Prophecy', rating: 7.3, image: 'https://preview.redd.it/official-poster-for-dune-prophecy-v0-rsh60b58clpd1.jpeg?auto=webp&s=986ccca6dcf1bb1954df74f4dca27771b8dc84ba', genre: 'Genre3'},
//     {id: 8, title: 'Dune: Prophecy', rating: 7.3, image: 'https://preview.redd.it/official-poster-for-dune-prophecy-v0-rsh60b58clpd1.jpeg?auto=webp&s=986ccca6dcf1bb1954df74f4dca27771b8dc84ba', genre: 'Genre3'},
//     {id: 9, title: 'Dune: Prophecy', rating: 7.3, image: 'https://preview.redd.it/official-poster-for-dune-prophecy-v0-rsh60b58clpd1.jpeg?auto=webp&s=986ccca6dcf1bb1954df74f4dca27771b8dc84ba', genre: 'Genre3'},
//     {id: 10, title: 'Dune: Prophecy', rating: 7.3, image: 'https://preview.redd.it/official-poster-for-dune-prophecy-v0-rsh60b58clpd1.jpeg?auto=webp&s=986ccca6dcf1bb1954df74f4dca27771b8dc84ba', genre: 'Genre3'},
//     {id: 11, title: 'Dune: Prophecy', rating: 7.3, image: 'https://preview.redd.it/official-poster-for-dune-prophecy-v0-rsh60b58clpd1.jpeg?auto=webp&s=986ccca6dcf1bb1954df74f4dca27771b8dc84ba', genre: 'Genre3'},
// ]
export function FilmsPage(){
    const {movies, isLoading, error} = useMovies();
    const [filteredMovies, setFilteredMovies] = useState(movies);
    const [selectedGenre, setSelectedGenre] = useState('All')

    // setFilteredMovies({movies})

    

    // useEffect(() => {
    //     if (selectedGenre == 'All'){
    //         setFilteredMovies(movies)
    //     }   else {
    //         setFilteredMovies(movies.filter((movie)=> {
    //             return movie.genre === selectedGenre
    //         }))
    //     }
    // }, [selectedGenre])

    console.log(filteredMovies);

    
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
                        <option value="Genre1">Genre1</option>
                        <option value="Genre2">Genre2</option>
                        <option value="Genre3">Genre3</option>
                    </select>
                </div>
                <div className='selected-films'>

                    { isLoading === false ? !error ? filteredMovies.map((movie)=> {
                        return (
                            <div key={movie.id} className='film-card'>
                                <div className='film-image'>
                                    <Link to='#' className='watchlist-button'>
                                        <svg width="55" height="70" viewBox="0 0 55 70" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_177_87)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.3125 0C7.57746 0 4.95443 1.17856 3.02046 3.27641C1.08649 5.37426 0 8.21956 0 11.1864V65.0301C0.000285899 65.892 0.207148 66.7391 0.60029 67.4881C0.993432 68.2372 1.55935 68.8625 2.2425 69.3027C2.92566 69.7429 3.70258 69.9829 4.49705 69.9991C5.29151 70.0153 6.07622 69.8072 6.77417 69.3952L26.9546 57.4929C27.1221 57.3946 27.3095 57.3431 27.5 57.3431C27.6905 57.3431 27.8779 57.3946 28.0454 57.4929L48.2258 69.3952C48.9238 69.8072 49.7085 70.0153 50.503 69.9991C51.2974 69.9829 52.0743 69.7429 52.7575 69.3027C53.4407 68.8625 54.0066 68.2372 54.3997 67.4881C54.7929 66.7391 54.9997 65.892 55 65.0301V11.1864C55 8.21956 53.9135 5.37426 51.9795 3.27641C50.0456 1.17856 47.4225 0 44.6875 0H10.3125ZM22.9167 18.6439C22.9167 17.655 23.2788 16.7066 23.9235 16.0073C24.5681 15.308 25.4425 14.9152 26.3542 14.9152C27.2659 14.9152 28.1402 15.308 28.7848 16.0073C29.4295 16.7066 29.7917 17.655 29.7917 18.6439V24.8586H35.5208C36.4325 24.8586 37.3069 25.2514 37.9515 25.9507C38.5962 26.65 38.9583 27.5984 38.9583 28.5874C38.9583 29.5763 38.5962 30.5247 37.9515 31.224C37.3069 31.9233 36.4325 32.3162 35.5208 32.3162H29.7917V38.5308C29.7917 39.5197 29.4295 40.4682 28.7848 41.1675C28.1402 41.8667 27.2659 42.2596 26.3542 42.2596C25.4425 42.2596 24.5681 41.8667 23.9235 41.1675C23.2788 40.4682 22.9167 39.5197 22.9167 38.5308V32.3162H17.1875C16.2758 32.3162 15.4015 31.9233 14.7568 31.224C14.1122 30.5247 13.75 29.5763 13.75 28.5874C13.75 27.5984 14.1122 26.65 14.7568 25.9507C15.4015 25.2514 16.2758 24.8586 17.1875 24.8586H22.9167V18.6439Z" fill="white"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_177_87">
                                                    <rect width="55" height="70" fill="white"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </Link>


                                </div>
                                <div className='film-info'>
                                    <p>{movie.name}</p>
                                    <p>⭐{movie.rating}</p>
                                </div>
                            </div>
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