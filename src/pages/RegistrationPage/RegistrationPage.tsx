import { Link } from "react-router-dom";
import "./RegistrationPage.css"




export function RegistrationPage(){
    return(
        <div className="maindiv">
        <div className="Info-div">
            <h2 className="h2-r">Реєстрація</h2>
            <div className="Inputs-and-button">
                <input className = "inputreg"type="text" placeholder="  ім'я" required/>
                <input className = "inputreg"type="email" placeholder="  Електронна пошта" required/>
                <input className = "inputreg"type="password" placeholder="  Пароль" required/>
                <input className = "inputreg"type="password" placeholder="  Підтвердіть пароль" required/>
                <button className = "registration-btn" type="submit">Зареєструватися</button>
            </div>
            <div className="dop-info">
                <h3>Вже є аккаунт ? <Link to= "/login">Увійти</Link></h3>

            </div>

        </div>
        </div>
    )
}