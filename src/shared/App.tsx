import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainPage } from '../pages/MainPage/MainPage'
import { Layout } from './Layout/Layout'
import { FilmsPage } from '../pages/FilmsPage/FilmsPage'
import { MoviePage } from '../pages/MoviePage/MoviePage'
export function App(){
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path = '/' element = {<Layout></Layout>}>
                        <Route path = '/' element = {<MainPage></MainPage>}></Route>
                        <Route path = '/films' element = {<FilmsPage></FilmsPage>}></Route>
                        <Route path = '/movie/:id' element = {<MoviePage></MoviePage>}></Route> 
                    </Route>
                </Routes>
            </BrowserRouter>

        </div>
    )
}