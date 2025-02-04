
import { useMovieById } from '../../hooks/useMovieById'
import { useMovies } from '../../hooks/useMovies'
import { Review } from '../Review/Review'
import './PopularReviews.css'


export function PopularReviews(){
    const{movie,error} = useMovieById(1)
    if (movie != undefined){
        return (
            <div className='popularReviews'>
                <h2>Популярні відгуки</h2>
                <hr color='gray'/>
                <div className='reviews'>
                    {movie?.reviews.map((review) => {
                        return (
                            <div className='popularReview'>
                                <Review id = {review.id} key={review.id} title = {review.title} rate = {review.rate} text = {review.text} likes = {review.likes} dislikes = {review.dislikes}></Review>
                            </div>
                        )
                    })}
                </div>
            </div>
        )

    }

    return <div>error</div>
}