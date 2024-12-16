import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainPage } from './main/MainPage/MainPage'
import { Layout } from './Layout/Layout'
import { FilmsPage } from './main/FilmsPage/FilmsPage'
export function App(){
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path = '/' element = {<Layout></Layout>}>
                        <Route path = '/' element = {<MainPage></MainPage>}></Route>
                        <Route path = '/films' element = {<FilmsPage></FilmsPage>}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>

        </div>
    )
}