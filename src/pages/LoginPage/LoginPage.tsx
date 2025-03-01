import { Link } from "react-router-dom";
import './LoginPage.css'
import { useForm } from "react-hook-form";

interface IForm{
    email: string,
    password: string,
}

export function LoginPage() {
    const {register, handleSubmit, formState} = useForm<IForm>();
    async function onSubmit(data: IForm){
        let response = await fetch('http://localhost:8000/user/login', {
            method: 'POST',
            body: JSON.stringify({
                email: data.email,
                password: data.password,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        let token = await response.json();
        console.log(token);
    }
    return (
        <div className="login-page">
            <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                <h2>Вхід</h2>
                <div className="login-inputs">
                    <input type="email" placeholder="E-mail" {...register('email', {
                        required: {value: true, message: 'E-mail is required'},
                    })}/>
                    <input type="password" placeholder="Password" {...register('password', {
                        required: {value: true, message: 'Password is required'},
                    })}/>
                    <div>
                        <button className = "login-btn" type="submit">Авторизуватися</button>
                    </div>
                </div>
                <p>Ще немає акаунту? <Link to={'/registration'}>Зареєструватись</Link></p>
            </form>
        </div>
    )
       
}