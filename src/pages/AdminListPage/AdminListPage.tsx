import { useEffect, useState } from "react";
import './AdminListPage.css';
import { IMovie, useMovies } from "../../hooks/useMovies";
import { IGenre, useGenres } from "../../hooks/useGenres";
import { IUser, useUsers } from "../../hooks/useUsers";
import { Link } from "react-router-dom";

type listState = "Movies" | "Genres" | "Users"

export function AdminListPage(){
    let [listState, setListState] = useState<listState>("Movies");
    const {movies} = useMovies();
    const {genres} = useGenres();
    const {users} = useUsers();

    const [currentState, setCurrentState] = useState<IMovie[] | IGenre[] | IUser[]>(movies);

    useEffect(() => {
        if (listState === "Movies"){
            setCurrentState(movies);
        } else if (listState === "Genres"){
            setCurrentState(genres);
        } else{
            setCurrentState(users);
        }
        console.log(listState);
    }, [listState])

    return (
        <div className="admin-list-panel">
            <div className="admin-headline">
                <h1>Site Administration</h1>
            </div>
            <div className="admin-list-state">
                <div onClick={() => setListState('Movies')}>Movies</div>
                <div onClick={() => setListState('Genres')}>Genres</div>
                <div onClick={() => setListState('Users')}>Users</div>  
            </div>
            <h1>{listState} ({currentState.length}):</h1>
            <div className="list-object">
                {currentState.map((obj) => {
                    return <div className="list-object-div">
                        <Link to='/'>{obj.name}</Link>
                    </div>
                })}
            </div>

        </div>
    )
}