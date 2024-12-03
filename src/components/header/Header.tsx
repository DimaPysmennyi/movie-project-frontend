import './Header.css';
import { Search } from 'react-bootstrap-icons';

export function Header(){
    return (
        <header>    
            <a href="">PopcornHeaven</a>
            <a href="">Профіль</a>
            <a href="">Фільми</a>
            <a href="">Списки перегляду</a>
            <input type="text" placeholder="Пошук..." />
        </header>
    )
}