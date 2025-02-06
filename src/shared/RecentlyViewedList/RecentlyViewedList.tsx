import { useRecentlyViewedContext } from "../../context/recentlyViewedContext"
import { FilmCard } from "../FilmCard/FilmCard"
import './RecentlyViewedList.css'

export function RecentlyViewedList(){
    const {recentlyViewed} = useRecentlyViewedContext()
    return (
        <>
        {recentlyViewed.length > 0 ?
        <div className="recently-viewed-container">
            <div className="recently-viewed-div">
                <div className="recently-viewed-text">
                    <h1>Що подивитись?</h1>
                    <h2>Нещодавні фільми</h2>
                </div>
                <div className="recently-viewed-list">
                    {recentlyViewed.map((movie)=>{
                        return (
                            <FilmCard key={movie.id} id={movie.id} name={movie.name} previewSrc={movie.previewSrc} rating = {movie.rating}/>
                        )
                    })}
                </div>
            </div>
        </div>
        :
        undefined
        }
       </>      
    )
}