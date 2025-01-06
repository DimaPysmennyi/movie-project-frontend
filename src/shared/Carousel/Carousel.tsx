import { Carousel } from "react-bootstrap";
import './Carousel.css';

export function CarouselComponent(){
    const movies = [
      {caption: 'Penguin', description: 'Watch the series now', src: 'https://static.skyassets.com/contentstack/assets/blt143e20b03d72047e/blt851c786bf407b502/66bf1ea0f641a67ea6abc155/the-penguin-hero.jpg'},
      {caption: 'Alien: Romulus', description: 'Watch the new Alien movie now', src: 'https://m.media-amazon.com/images/S/pv-target-images/3a2abb3359c0da3d1541ddb343bbd3c35a43f76b799a8e39783d345f557bba07._SX1080_FMjpg_.jpg'},
      {caption: 'How To Train Your Dragon', description: 'Watch the teaser trailer', src: 'https://image.tmdb.org/t/p/original/qEFTuoFIAwrnVn7IsvE8RVt2TK3.jpg'},
    ]
    return (
        <Carousel data-bs-theme="light" className="carousel">
          {movies.map((movie) => {
              return <Carousel.Item>
              <img src={movie.src} className="carouselImage" alt="Slide" />
              <Carousel.Caption>
               <h3>{movie.caption}</h3>
               <p>{movie.description}</p>
              </Carousel.Caption>
              </Carousel.Item>
          })}
        </Carousel>
      );
}