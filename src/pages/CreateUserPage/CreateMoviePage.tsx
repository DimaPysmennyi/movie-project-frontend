import { useEffect, useState } from 'react';
import './CreateMoviePage.css'
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { IGenre, useGenres } from '../../hooks/useGenres';
import { useActors } from '../../hooks/useActors';
import { IActor } from '../../hooks/useActorById';

interface ICreateMovieForm{
    name: string,
    age: string,
    country: string,
    year: number,
    description: string,
    language: string,
    facts: string,
    previewSrc: string,
    shots: string,
    genres: IGenre[],
    actors: [],
}

export function CreateMoviePage(){

    const params = useParams();
    const {genres} = useGenres()
    const {actors} = useActors()
    const {register, handleSubmit, formState} = useForm<ICreateMovieForm>()
    const [selectedGenres, setSelectedGenres] = useState<IGenre[]>([])
    const [selectedActors, setSelectedActors] = useState<IActor[]>([])
        async function onSubmit(data: ICreateMovieForm){
            const response = await fetch(`http://localhost:8000/movie/create`, {
                method: 'POST',
                body: JSON.stringify({
                    name: data.name,
                    age: data.age,
                    country: data.country,
                    year: data.year,
                    description: data.description,
                    language: data.language,
                    facts: data.facts,
                    previewSrc: data.previewSrc,
                    shots: data.shots,
                    genres: selectedGenres,
                    actors: selectedActors,
                    rating: 0
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }
    
        function handleGenreChange (genre: IGenre) {
            setSelectedGenres((prevSelectedGenres) => {
                if (prevSelectedGenres.some((selectedGenre) => selectedGenre.id === genre.id)) {
                    return prevSelectedGenres.filter((selectedGenre) => selectedGenre.id !== genre.id)
                } else {
                    return [...prevSelectedGenres, genre]
                }
            })
        }

        function handleActorChange (actor: IActor) {
            setSelectedActors((prevSelectedActors) => {
                if (prevSelectedActors.some((selectedActor) => selectedActor.id === actor.id)) {
                    return prevSelectedActors.filter((selectedActor) => selectedActor.id !== actor.id)
                } else {
                    return [...prevSelectedActors, actor]
                }
            })
        }

        useEffect(() => {
            console.log(selectedGenres)
        }, [selectedGenres])

        useEffect(() => {
            console.log(selectedActors)
        }, [selectedActors])

    return (
        <div className="user-update-page">
            <div className='user-update-div'>
                <h1 className='user-update-page-header'>Site Administration</h1>
                <form className='user-update-form' onSubmit={handleSubmit(onSubmit)}>
                    <div className='user-update-inputs'>
                        <label>Name:
                            <div className='user-input-div'>
                                <input className='name-input' type="text"
                                {...register('name', {
                                    required: {value: true, message: 'Name is required'},
                                })}/>
                                <p className = "update-error">{formState.errors.name?.message}</p>
                            </div>
                        </label>

                        <label>Age Restriction:
                            <div className='user-input-div'>
                                <input className='name-input' type="text" 
                                {...register('age', {
                                    required: {value: true, message: 'Age restriction is required'},
                                })} />
                                <p className = "update-error">{formState.errors.age?.message}</p>
                            </div>
                        </label>

                        <label>Country:
                            <div className='user-input-div'>
                                <input className='name-input' type='text'
                                {...register('country', {
                                    required: {value: true, message: 'Country is required'},
                                })} />
                                <p className = "update-error">{formState.errors.country?.message}</p>
                            </div>
                        </label>

                        <label>Year:
                            <div className='user-input-div'>
                                <input className='name-input' type='text'
                                {...register('year', {
                                    required: {value: true, message: 'Year is required'},
                                })} />
                                <p className = "update-error">{formState.errors.year?.message}</p>
                            </div>
                        </label>

                        <label>Language:
                            <div className='user-input-div'>
                                <input className='name-input' type='text'
                                {...register('language', {
                                    required: {value: true, message: 'Language is required'},
                                })} />
                                <p className = "update-error">{formState.errors.language?.message}</p>
                            </div>
                        </label>

                        <label>Facts:
                            <div className='user-input-div'>
                                <input className='name-input' type='text'
                                {...register('facts', {
                                    required: {value: true, message: 'Facts is required'},
                                })} />
                                <p className = "update-error">{formState.errors.facts?.message}</p>
                            </div>
                        </label>

                        <label>Preview:
                            <div className='user-input-div'>
                                <input className='name-input' type='text'
                                {...register('previewSrc', {
                                    required: {value: true, message: 'Preview is required'},
                                })} />
                                <p className = "update-error">{formState.errors.previewSrc?.message}</p>
                            </div>
                        </label>

                        <label>Shots:
                            <div className='user-input-div'>
                                <input className='name-input' type='text'
                                {...register('shots', {
                                    required: {value: true, message: 'Shots is required'},
                                })} />
                                <p className = "update-error">{formState.errors.shots?.message}</p>
                            </div>
                        </label>
                        
                        <label>Description:
                            <div className='user-input-div'>
                                <textarea className='picture-input' 
                                {...register('description', {
                                    required: {value: true, message: 'Description is required'},
                                })} />
                                <p className = "update-error">{formState.errors.description?.message}</p>
                            </div>
                        </label>
                    </div>
                     
                
                <div className='create-movie-selects'>
                <div className='actor-select'>
                      <h1>Actors:</h1>
                      {actors.map((actor) =>{
                        return <label key={actor.id}>
                          <input type="checkbox" 
                            value={actor.id} 
                            checked={selectedActors.some(selectedActor => selectedActor.id === actor.id)}
                            onChange={() => handleActorChange(actor)}
                          />
                            {actor.name}
                            </label>
                        })}
                      </div>
                    <div className='genre-select'>
                    <h1>Genres:</h1>
                      {genres.map((genre) =>{
                        return <label key={genre.id}>
                          <input type="checkbox" 
                            value={genre.id} 
                            checked={selectedGenres.some(selectedGenre => selectedGenre.id === genre.id)}
                            onChange={() => handleGenreChange(genre)}
                          />
                            {genre.name}
                            </label>
                        })}
                      </div>
                </div>

                    <div className='user-update-btn-div'>
                        <button className='user-update-btn' type='submit'>Create</button>
                    </div>   
                </form>    
            </div>
        </div>
    )
}