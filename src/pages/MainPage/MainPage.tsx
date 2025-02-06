import { CarouselComponent } from "../../shared/Carousel/Carousel";
import { PopularFilms } from "../../shared/PopularFilms/PopularFilms";
import { PopularReviews } from "../../shared/PopularReviews/PopularReviews";
import { RecentlyViewedList } from "../../shared/RecentlyViewedList/RecentlyViewedList";
import './MainPage.css'

export function MainPage(){
    return(
        <div className="main-page">
            <CarouselComponent />
            <RecentlyViewedList />
            <PopularFilms />
            <PopularReviews />
        </div>
    )
}