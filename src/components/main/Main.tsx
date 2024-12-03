import './Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CarouselComponent } from './carousel/Carousel';
import { PopularFilms } from './PopularFilms/PopularFilms';
import { PopularReviews } from './PopularReviews/PopularReviews';
export function Main(){
    return (
        <main className='main'>
            <CarouselComponent></CarouselComponent>
            <PopularFilms></PopularFilms>
            <PopularReviews></PopularReviews>
        </main>
        
    )
}