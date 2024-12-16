import { useEffect, useState } from 'react';
import './FilmsPage.css';
const films = [
    {id: 0, title: 'Dune: Prophecy', rating: 7.3, image: 'https://preview.redd.it/official-poster-for-dune-prophecy-v0-rsh60b58clpd1.jpeg?auto=webp&s=986ccca6dcf1bb1954df74f4dca27771b8dc84ba', genre: 'Genre1'},
    {id: 1, title: 'Dune: Prophecy', rating: 7.3, image: 'https://preview.redd.it/official-poster-for-dune-prophecy-v0-rsh60b58clpd1.jpeg?auto=webp&s=986ccca6dcf1bb1954df74f4dca27771b8dc84ba', genre: 'Genre1'},
    {id: 2, title: 'Dune: Prophecy', rating: 7.3, image: 'https://preview.redd.it/official-poster-for-dune-prophecy-v0-rsh60b58clpd1.jpeg?auto=webp&s=986ccca6dcf1bb1954df74f4dca27771b8dc84ba', genre: 'Genre1'},
    {id: 3, title: 'Dune: Prophecy', rating: 8.3, image: 'https://preview.redd.it/official-poster-for-dune-prophecy-v0-rsh60b58clpd1.jpeg?auto=webp&s=986ccca6dcf1bb1954df74f4dca27771b8dc84ba', genre: 'Genre1'},
    {id: 4, title: 'Dune: Prophecy', rating: 8.3, image: 'https://preview.redd.it/official-poster-for-dune-prophecy-v0-rsh60b58clpd1.jpeg?auto=webp&s=986ccca6dcf1bb1954df74f4dca27771b8dc84ba', genre: 'Genre2'},
    {id: 5, title: 'Dune: Prophecy', rating: 8.3, image: 'https://preview.redd.it/official-poster-for-dune-prophecy-v0-rsh60b58clpd1.jpeg?auto=webp&s=986ccca6dcf1bb1954df74f4dca27771b8dc84ba', genre: 'Genre2'},
    {id: 6, title: 'Dune: Prophecy', rating: 7.3, image: 'https://preview.redd.it/official-poster-for-dune-prophecy-v0-rsh60b58clpd1.jpeg?auto=webp&s=986ccca6dcf1bb1954df74f4dca27771b8dc84ba', genre: 'Genre2'},
    {id: 7, title: 'Dune: Prophecy', rating: 7.3, image: 'https://preview.redd.it/official-poster-for-dune-prophecy-v0-rsh60b58clpd1.jpeg?auto=webp&s=986ccca6dcf1bb1954df74f4dca27771b8dc84ba', genre: 'Genre3'},
    {id: 8, title: 'Dune: Prophecy', rating: 7.3, image: 'https://preview.redd.it/official-poster-for-dune-prophecy-v0-rsh60b58clpd1.jpeg?auto=webp&s=986ccca6dcf1bb1954df74f4dca27771b8dc84ba', genre: 'Genre3'},
    {id: 9, title: 'Dune: Prophecy', rating: 7.3, image: 'https://preview.redd.it/official-poster-for-dune-prophecy-v0-rsh60b58clpd1.jpeg?auto=webp&s=986ccca6dcf1bb1954df74f4dca27771b8dc84ba', genre: 'Genre3'},
    {id: 10, title: 'Dune: Prophecy', rating: 7.3, image: 'https://preview.redd.it/official-poster-for-dune-prophecy-v0-rsh60b58clpd1.jpeg?auto=webp&s=986ccca6dcf1bb1954df74f4dca27771b8dc84ba', genre: 'Genre3'},
    {id: 11, title: 'Dune: Prophecy', rating: 7.3, image: 'https://preview.redd.it/official-poster-for-dune-prophecy-v0-rsh60b58clpd1.jpeg?auto=webp&s=986ccca6dcf1bb1954df74f4dca27771b8dc84ba', genre: 'Genre3'},
]
export function FilmsPage(){
    const [filteredFilms, setFilteredFilms] = useState(films);
    const [selectedGenre, setSelectedGenre] = useState('All')

    useEffect(() => {
        if (selectedGenre == 'All'){
            setFilteredFilms(films)
        } else {
            setFilteredFilms(films.filter((film)=> {
                return film.genre === selectedGenre
            }))
        }
    }, [selectedGenre])

    
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
                    {filteredFilms.map((film)=> {
                        return (
                    <div key={film.id} className='film-card'>
                        <img src={film.image} alt={film.title}/>
                        <p>{film.title}</p>
                        <p>⭐ {film.rating}</p>
                    </div>
                        )}
                    )}
                </div>
            
            </div>
        </div>
    )
}