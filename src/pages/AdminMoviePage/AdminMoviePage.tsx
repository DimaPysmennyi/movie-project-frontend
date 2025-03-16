import { useParams } from "react-router-dom";
import { useMovieById } from "../../hooks/useMovieById";
import './AdminMoviePage.css';
import { useForm } from "react-hook-form";
import { useState } from "react";

interface IFormMovie{
    name: string,
    age: string,
    country: string,
    year: number,
    description: string,
    language: string,
    facts: string,
    previewSrc: string,
    shots: string,
}

export function AdminMoviePage(){
    let params = useParams();
    const {movie, error} = useMovieById(Number(params.id));
    const {register, handleSubmit, formState} = useForm<IFormMovie>();
    let [resultMessage, setResultMessage] = useState<string | null>(null);
    async function onSubmit(data: IFormMovie){
        const response = await fetch(`http://localhost:8000/movie/update/${params.id}`, {
            method: 'POST',
            body: JSON.stringify({
                id: movie?.id,
                name: data.name,
                rating: movie?.rating,
                age: data.age,
                country: data.country,
                year: +data.year,
                description: data.description,
                language: data.language,
                facts: data.facts,
                previewSrc: data.previewSrc,
                shots: data.shots,
            }),
            headers: {'Content-Type': 'application/json'}
        })
        let result = await response.json();
        if (result.status == "error"){
            setResultMessage(result.message);
        } else{
            setResultMessage(result.status)
        }
    }
    return (
        <div className="admin-movie-panel">
            { movie ? (
                <div>
                    <div className="admin-headline">
                        <h1>Site Administration</h1>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="movie-input">
                            <h1>Name</h1>
                            <input type="text" defaultValue={movie.name} {...register("name", {
                                required: {value: true, message: 'Field required'}
                            })}/>
                        </div>
                        <p>{formState.errors.name?.message}</p>
                        <hr />
                        <div className="movie-input">
                            <h1>Age Restriction</h1>
                            <input type="text" defaultValue={movie.age} {...register("age", {
                                required: {value: true, message: 'Field required'},
                                maxLength: {value: 3, message: 'Under 4 symbols required'}
                            })}/>
                        </div>
                        <p className="movie-input-error">{formState.errors.age?.message}</p>
                        <hr />
                        <div className="movie-input">
                            <h1>Country</h1>
                            <input type="text" defaultValue={movie.country} {...register("country", {
                                required: {value: true, message: 'Field required'}
                            })}/>
                        </div>
                        <p className="movie-input-error">{formState.errors.country?.message}</p>
                        <hr />
                        <div className="movie-input">
                            <h1>Year</h1>
                            <input type="number" defaultValue={movie.year} {...register("year", {
                                required: {value: true, message: 'Field required'}
                            })}/>
                        </div>
                        <p className="movie-input-error">{formState.errors.year?.message}</p>
                        <hr />
                        <div className="movie-input">
                            <h1>Description</h1>
                            <textarea defaultValue={movie.description} rows={10} cols={50} {...register("description", {
                                required: {value: true, message: 'Field required'}
                            })}/>
                        </div>
                        <p className="movie-input-error">{formState.errors.description?.message}</p>
                        <hr />
                        <div className="movie-input">
                            <h1>Language</h1>
                            <input type="text" defaultValue={movie.language} {...register("language", {
                                required: {value: true, message: 'Field required'}
                            })}/>
                        </div>
                        <p className="movie-input-error">{formState.errors.name?.message}</p>
                        <hr />
                        <div className="movie-input">
                            <h1>Facts</h1>
                            <textarea defaultValue={movie.facts} rows={10} cols={50} {...register("facts", {
                                required: {value: true, message: 'Field required'}
                            })}/>
                        </div>
                        <p className="movie-input-error">{formState.errors.facts?.message}</p>
                        <hr />
                        <div className="movie-input">
                            <h1>Preview Image</h1>
                            <input type="url" defaultValue={movie.previewSrc} {...register("previewSrc", {
                                required: {value: true, message: 'Field required'}
                            })}/>
                        </div>
                        <p className="movie-input-error">{formState.errors.previewSrc?.message}</p>
                        <hr />
                        <div className="movie-input">
                            <h1>Shot</h1>
                            <input type="url" defaultValue={movie.shots} {...register("shots", {
                                required: {value: true, message: 'Field required'}
                            })}/>
                        </div>
                        <p className="movie-input-error">{formState.errors.shots?.message}</p>
                        <hr />
                        <button type="submit">Submit</button>
                        <p className="movie-result-message">{resultMessage}</p>
                    </form>
                </div>
            ) : (<h2>{error}</h2>)}
            
        </div>
    )
}