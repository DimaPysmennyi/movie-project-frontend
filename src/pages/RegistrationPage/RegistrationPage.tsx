import { Link } from "react-router-dom";
import "./RegistrationPage.css";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

interface IForm{
    name: string,
    email: string,
    password: string,
    confirmPassword: string
}


export function RegistrationPage(){
    let [response, setResponse] = useState();
    let [safeToReset, setSafeToReset] = useState(false);
    const {register: register, watch, handleSubmit, resetField, formState} = useForm<IForm>({
        mode: 'onSubmit'
    })

    async function onSubmit(){
        let response = await fetch('http://localhost:8000/user/registration', {
            method: 'POST',
            body: JSON.stringify({
                name: watch("name"),
                email: watch("email"),
                password: watch("password"),
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        let token = await response.json();
        setResponse(token);
    }

    return(
        <div className="reg-page">
            <form className="reg-form" onSubmit={handleSubmit(onSubmit)}>
                <h2 className="h2-r">Реєстрація</h2>
                <div className="registration-inputs">
                    <input type="text" placeholder="Name" {...register('name', {
                        required: {value: true, message: 'Name is required'},
                    })}/>
                    <input type="email" placeholder="E-mail" {...register('email', {
                        required: {value: true, message: 'E-mail is required'},
                    })}/>
                    <input type="password" placeholder="Password" {...register('password', {
                        required: {value: true, message: 'Password is required'},
                    })}/>
                    <input type="password" placeholder="Confirm Password" {...register('confirmPassword', {
                        required: {value: true, message: 'Confirm your password!'},
                        validate: (value: string) => {
                            if (watch("password") != value){
                                return "Passwords do not match!"
                            }
                        }
                    })}/>
                    <div>
                        <button className = "registration-btn" type="submit">Зареєструватися</button>
                        <p>{formState.errors.name?.message}</p>
                        <p>{formState.errors.email?.message}</p>
                        <p>{formState.errors.password?.message}</p>
                        <p>{formState.errors.confirmPassword?.message}</p>
                        <p>{response}</p>
                    </div>
                </div>
                <div className="dop-info">
                    <p>Вже є аккаунт ? <Link to= "/login">Увійти</Link></p>
                </div>

            </form>
        </div>
    )
}