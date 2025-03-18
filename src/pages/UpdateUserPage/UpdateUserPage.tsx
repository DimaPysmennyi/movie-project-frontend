import { useEffect, useState } from 'react'
import './UpdateUserPage.css'
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useUserById } from '../../hooks/useUserById';
import { Review } from '../../shared/Review/Review';
import { Oval } from 'react-loader-spinner';

interface IUpdateUserForm{
    name: string
    email: string
    picture: string
    
}

export function UpdateUserPage(){
    const params = useParams();
    const { user, isLoading, error } = useUserById(Number(params.id))
    const {register, handleSubmit, formState} = useForm<IUpdateUserForm>()
        async function onSubmit(data: IUpdateUserForm){
            const response = await fetch(`http://localhost:8000/user/update/${user.id}`, {
                method: 'POST',
                body: JSON.stringify({
                    name: data.name,
                    email: data.email,
                    picture: data.picture
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }
    
    const [name, setName] = useState<string>()
    const [email, setEmail] = useState<string>()
    const [picture, setPicture] = useState<string>()

    useEffect(()=>{
        setName(user.name)
        setEmail(user.email)
        setPicture(user.picture)
    },[user])
    
    return (
        <div className="user-update-page">
            {isLoading === false ? !error ?
            <div className='user-update-div'>
                <h1 className='user-update-page-header'>Site Administration</h1>
                <form className='user-update-form' onSubmit={handleSubmit(onSubmit)}>
                    <div className='user-update-inputs'>
                        <label>Name:
                            <div className='user-input-div'>
                                <input className='name-input' type="text"
                                {...register('name', {
                                    required: {value: true, message: 'Name is required'},
                                })} 
                                value = {name}
                                onChange={(event) => setName(event.target.value)}/>
                                <p className = "update-error">{formState.errors.name?.message}</p>
                            </div>
                        </label>

                        <label>Email:
                            <div className='user-input-div'>
                                <input className='email-input' type="email" 
                                {...register('email', {
                                    required: {value: true, message: 'E-mail is required'},
                                })} 
                                value = {email}
                                onChange={(event) => setEmail(event.target.value)}/>
                                <p className = "update-error">{formState.errors.email?.message}</p>
                            </div>
                        </label>

                        <label>Picture:
                            <div className='user-input-div'>
                                <textarea className='picture-input' 
                                {...register('picture')} 
                                value = {picture}
                                onChange={(event) => setPicture(event.target.value)}/>
                                <p className = "update-error">{formState.errors.picture?.message}</p>
                            </div>
                        </label>
                    </div>
                    <div className='user-update-btn-div'>
                        <button className='user-update-btn' type='submit'>Save</button>
                    </div>
                </form>
                <div>
                <h1>Reviews: </h1>
                <div className='user-update-reviews'>
                    {user.reviews.map((review) =>(
                        <Review id = {review.id} key={review.id} title = {review.title} rate = {review.rate} text = {review.text} likes = {review.likes} dislikes = {review.dislikes}></Review>
                    ))}
                </div>
            </div>
            </div>
            : (<div>{error}</div>) : 
            (<div className='oval'><Oval
                                    visible={true}
                                    height="100"
                                    width="100"
                                    color="white"
                                    secondaryColor='#FFFFFF'
                                    ariaLabel="oval-loading"
                                    wrapperStyle={{}}
                                    wrapperClass=""    
                                /></div>)}
        </div>
    )
}