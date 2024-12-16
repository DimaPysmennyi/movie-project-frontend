import { ReactNode } from "react";
import './Layout.css'

import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Main } from "../main/Main/Main";
import { Footer } from "../Footer/Footer";

interface ILayoutProps{
    children?: ReactNode
}

export function Layout(props: ILayoutProps){
    return(
        <div className="layout">
            <Header></Header>
            <Main>
                <Outlet />
            </Main>
            <Footer></Footer>
        </div>
    )
}