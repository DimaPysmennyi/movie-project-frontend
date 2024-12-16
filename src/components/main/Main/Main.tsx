import './Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { ReactNode } from 'react';

interface IMainProps {
    children?: ReactNode
}

export function Main(props: IMainProps){
    return (
        <main className='main'>
            {props.children}
        </main>
        
    )
}