import { CarouselComponent } from "../Carousel/Carousel";
import { PopularFilms } from "../PopularFilms/PopularFilms";
import { PopularReviews } from "../PopularReviews/PopularReviews";
import './MainPage.css'

export function MainPage(){
    return(
        <div className="main-page">
            <CarouselComponent />
            <PopularFilms />
            <PopularReviews />
        </div>
    )
}