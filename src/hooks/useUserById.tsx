
import { useEffect, useState } from "react"

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

interface IUser {
    id: number
    name: string
    email: string
    picture: string
    
    reviews: IReview[]
}

export function useUserById(id: number){
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>()
    const [user, setUser] = useState<IUser>({
        id: 0,
        name:'',
        email: '',
        picture: '',
        reviews: []
    })

    useEffect(() => {
        async function getUser(){
            try {
                setIsLoading(true)
                const response = await fetch(`http://localhost:8000/user/${id}`)
                const result = await response.json()
                if (result.status === 'error'){
                    setError(result.message)
                }else{
                    setUser(result.data)
                }
            }
            catch (error) {
                const err = error instanceof Error ? error.message : "An unknown error occurred";
                setError(`${err}`)
            }
            finally {
                setIsLoading(false)
            }
        }
        getUser()
    },[id])

    return {user: user, isLoading: isLoading, error: error}
}
