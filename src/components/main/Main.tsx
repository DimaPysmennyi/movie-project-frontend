import './Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CarouselComponent } from './carousel/Carousel';
export function Main(){
    return (
        <main className='main'>
            <CarouselComponent></CarouselComponent>
        </main>
        
    )
}