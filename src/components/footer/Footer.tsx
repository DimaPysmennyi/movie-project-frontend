import { Facebook, Instagram, Youtube } from "react-bootstrap-icons";
import './Footer.css';
export function Footer(){
    return(
        <footer className="footer">
            <a href="#">Про нас</a>
            <a href="#">Підтримка</a>
            <div className="links">
                <a href="#"><Youtube/></a>
                <a href="#"><Facebook/></a>
                <a href="#"><Instagram/></a>
            </div>
        </footer>
    )
}