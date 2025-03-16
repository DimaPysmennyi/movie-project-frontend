import { useEffect, useState } from "react";

interface IReview{
    id: number
    title: string
    text: string
    movieId: number
    userId: number
    likes: number
    rate: number
    dislikes: number
}


export interface IUser{
    id: number,
    name: string,
    email: string,
    age: number,
    picture: string,
    description: string,
    reviews: IReview[],
}

export function useUsers(){
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {   
        async function getUsers(){
            const response = await fetch('http://localhost:8000/user/all');
            const users = await response.json();
            setUsers(users.data);
        }

        getUsers();
    }, [])
    return {users: users};
}