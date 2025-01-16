import { Link, useParams } from "react-router-dom";
import { useMovieById } from "../../hooks/useMovieById";
// import './MoviePage.css';
import { MovieInfo } from "../../shared/MovieInfo/MovieInfo";
import { Review } from "../../shared/Review/Review";

export function MoviePage(){
    const params: any = useParams();
    const {movie, error} = useMovieById(params.id);
    if (movie != undefined){
        return (
            <>
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
            </>
        )
    } else{
        return(
            <div>{error}</div>
        )
    }

}