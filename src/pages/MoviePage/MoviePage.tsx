import { Link, useParams } from "react-router-dom";
import { useMovieById } from "../../hooks/useMovieById";
// import './MoviePage.css';
import { MovieInfo } from "../../shared/MovieInfo/MovieInfo";
import { Review } from "../../shared/Review/Review";
const reviews = [
    {   id: 0, title: 'Title of the review', rate: 8, 
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum dictum convallis. Sed nisl est, semper eu fermentum quis, ultricies at ante. Sed a iaculis elit. Fusce congue vestibulum neque id malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ',
        likes: 20, dislikes: 4,
    },
    {   id: 1, title: 'Title of the review', rate: 8, 
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum dictum convallis. Sed nisl est, semper eu fermentum quis, ultricies at ante. Sed a iaculis elit. Fusce congue vestibulum neque id malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ',
        likes: 10, dislikes: 14,
    },
    {   id: 2, title: 'Title of the review', rate: 8, 
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum dictum convallis. Sed nisl est, semper eu fermentum quis, ultricies at ante. Sed a iaculis elit. ',
        likes: 18, dislikes: 8,
    }
]
export function MoviePage(){
    const params: any = useParams();
    const {movie, error} = useMovieById(params.id);
    if (movie != undefined){
        return (
            <>
                <MovieInfo children={movie}></MovieInfo>
                <h2 className="user-reviews">Відгуки користувачів</h2>
                <div className="movie-reviews">
                    {reviews.map((review) =>{
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