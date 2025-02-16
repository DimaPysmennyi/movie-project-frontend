import { Link } from "react-router-dom";
import './LoginPage.css'

export function LoginPage() {
    return (
        <div className="login-page">
            <div className="login-form">
                <h1>Вхід</h1>
                <div className="login-inputs">
                    <input type="text" placeholder="Електронна пошта" required/>
                    <input type="password" placeholder="Пароль" required/>
                    <button type='submit' className="login-btn">Увійти</button>
                </div>
                <p>Ще немає акаунту? <Link to={'/registration'}>Зареєструватись</Link></p>
            </div>
        </div>
    )
       
}