import './PopularFilms.css'

export function PopularFilms(){
    const films = [
            {id: 0, src: "https://i.ebayimg.com/images/g/s~QAAOSwHx1m7WwH/s-l1600.jpg"},
            {id: 1, src: "https://i.ebayimg.com/images/g/ut8AAOSwaMZj0ABT/s-l1200.jpg"},
            {id: 2, src: "https://m.media-amazon.com/images/M/MV5BMTNhMDJmNmYtNDQ5OS00ODdlLWE0ZDAtZTgyYTIwNDY3OTU3XkEyXkFqcGc@._V1_.jpg"},
            {id: 3, src: "https://m.media-amazon.com/images/M/MV5BOWJhYjdjNWEtMWFmNC00ZjNkLThlZGEtN2NkM2U3NTVmMjZkXkEyXkFqcGc@._V1_.jpg"},
            {id: 4, src: "https://static0.srcdn.com/wordpress/wp-content/uploads/2024/05/deadpool-and-wolverine-poster-showing-wade-wilson-s-swords-showing-hugh-jackman-s-reflection.jpg"},
            {id: 5, src: "https://cinema-muenchen.com/wp-content/uploads/sites/5/2024/10/2cxhvwyEwRlysAmRH4iodkvo0z5-scaled.jpg"},
    ] 
    return (
        <div className="popularFilms">
            <h2>Популярні фільми</h2>
            <hr color='gray' />
            <div className='films'>
                {films.map((film) => {
                    return(
                        <div key={film.id} className='film'>
                            <img src={film.src} alt='film poster'/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}