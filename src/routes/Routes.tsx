import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FilmsPage } from "../pages/FilmsPage/FilmsPage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { MainPage } from "../pages/MainPage/MainPage";
import { MoviePage } from "../pages/MoviePage/MoviePage";
import { RegistrationPage } from "../pages/RegistrationPage/RegistrationPage";
import { Layout } from "../shared/Layout/Layout";
import { ActorPage } from "../pages/ActorPage/ActorPage";

export function AppRoutes(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path = '/' element = {<Layout></Layout>}>
                    <Route path = '/' element = {<MainPage></MainPage>}></Route>
                    <Route path = '/films' element = {<FilmsPage></FilmsPage>}></Route>
                    <Route path = '/login' element = {<LoginPage></LoginPage>}></Route>
                    <Route path = '/registration' element = {<RegistrationPage></RegistrationPage>}></Route>
                    <Route path = '/movie/:id' element = {<MoviePage></MoviePage>}></Route>
                    <Route path = '/actor/:id' element = {<ActorPage></ActorPage>}></Route> 
                </Route>
            </Routes>
        </BrowserRouter>
    )
}