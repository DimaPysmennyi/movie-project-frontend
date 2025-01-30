import { Link, useParams } from "react-router-dom";
import { useMovieById } from "../../hooks/useMovieById";
// import './MoviePage.css';
import { MovieInfo } from "../../shared/MovieInfo/MovieInfo";
import { Review } from "../../shared/Review/Review";
import { useRecentlyViewedContext } from "../../context/recentlyViewedContext";
import { useEffect } from "react";

export function MoviePage(){
    const params = useParams();
    const {movie, error} = useMovieById(Number(params.id));
    const {recentlyViewed, addRecentlyViewed, updateRecentlyViewed, isRecentlyViewed} = useRecentlyViewedContext()

    useEffect(() => {
        function recentlyViewedHandler(){
            if (!movie) {
                return
            }

            if (isRecentlyViewed(movie.id)) {
                return
            }

            if (recentlyViewed.length < 10){
                addRecentlyViewed(movie)

            }else{
                updateRecentlyViewed(movie)
            }

        }
        recentlyViewedHandler()
    }, [movie]);
    
    useEffect(() => {
        console.log(recentlyViewed)
    },[recentlyViewed])

    if (movie != undefined){
        return (
            <div>
                <MovieInfo children={movie}></MovieInfo>
                <h2 className="user-reviews">Відгуки користувачів</h2>
                <div className="movie-reviews">
                    {movie.reviews.map((review) =>{
                        return <Review id = {review.id} key={review.id} title = {review.title} rate = {review.rate} text = {review.text} likes = {review.likes} dislikes = {review.dislikes}></Review>
                    })}
                </div>
                <Link to = {'/'} className="add-review-link">
                    <button className="add-review">
                        + Додати відгук
                    </button>
                </Link>
            </div>
        )
    } else{
        return(
            <div>{error}</div>
        )
    }

}