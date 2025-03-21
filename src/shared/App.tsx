import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainPage } from '../pages/MainPage/MainPage'
import { Layout } from './Layout/Layout'
import { FilmsPage } from '../pages/FilmsPage/FilmsPage'
import { MoviePage } from '../pages/MoviePage/MoviePage'
import { LoginPage } from '../pages/LoginPage/LoginPage'
import { RegistrationPage } from '../pages/RegistrationPage/RegistrationPage'
import { RecentlyViewedContextProvider } from '../context/recentlyViewedContext'
import { ActorPage } from '../pages/ActorPage/ActorPage'
import { AdminGenrePage } from '../pages/AdminGenrePage/AdminGenrePage'
import { UpdateUserPage } from '../pages/UpdateUserPage/UpdateUserPage'
import { AdminMoviePage } from '../pages/AdminMoviePage/AdminMoviePage'
import { AdminListPage } from '../pages/AdminListPage/AdminListPage'
export function App(){
    return (
        <div>
            <RecentlyViewedContextProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path = '/' element = {<Layout></Layout>}>
                            <Route path = '/' element = {<MainPage></MainPage>}></Route>
                            <Route path = '/films' element = {<FilmsPage></FilmsPage>}></Route>
                            <Route path = '/login' element = {<LoginPage></LoginPage>}></Route>
                            <Route path = '/registration' element = {<RegistrationPage></RegistrationPage>}></Route>
                            <Route path = '/movie/:id' element = {<MoviePage></MoviePage>}></Route>
                            <Route path = '/actor/:id' element = {<ActorPage></ActorPage>}></Route> 
                            <Route path = '/admin/all' element = {<AdminListPage></AdminListPage>}></Route>
                            <Route path = '/admin/movie/:id' element = {<AdminMoviePage></AdminMoviePage>}></Route> 
                            <Route path = '/admin/genre/:id' element = {<AdminGenrePage></AdminGenrePage>}></Route> 
                            <Route path = '/admin/user/:id' element = {<UpdateUserPage></UpdateUserPage>}></Route> 

                        </Route>
                    </Routes>
                </BrowserRouter>
            </RecentlyViewedContextProvider>
        </div>
    )
}