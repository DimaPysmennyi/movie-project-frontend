import { Link } from 'react-router-dom';
import './Header.css';



export function Header(){
    return (
        <header>    
            <Link to={'/'}>PopcornHeaven</Link>
            <Link to={'/'}>Профіль</Link>
            <Link to={'/films'}>Фільми</Link>
            <Link to={'/'}>Списки перегляду</Link>
            <input type="text" placeholder="Пошук..." />
        </header>
    )
}