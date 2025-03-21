import { useForm, SubmitHandler } from "react-hook-form"
import { useGenres } from "../../hooks/useGenres"
import { useState } from "react"
import "./AdminGenrePage.css"
import { useGenreById } from "../../hooks/useGenreById";
import { useParams } from "react-router-dom";

interface GenreFormInputs {
    name: string;
    description: string;
}

export function AdminGenrePage() {
    const params = useParams();
    const { genre, error } = useGenreById(Number(params.id));
    const [ resultMessage, setResultMessage ] = useState<string | null>(null)
    const { register, handleSubmit, formState } = useForm<GenreFormInputs>()

    async function onSubmit(data: GenreFormInputs){
        try{
            const response = await fetch(`http:localhost:8000/genre/update/${genre?.id}`, {
                method: 'POST',
                body: JSON.stringify({
                    name: data.name,
                    description: data.description
                })
            });

            const result = await response.json();
            if (result.status == "error"){
                setResultMessage(result.message);
                // return;
            } else{
                setResultMessage(result.status);
            }
        } catch(error){
            setResultMessage("Could not fetch");
        }
    }

return (
    <div className="admin-genre-panel">
        <div className="admin-headline"> 
            <h1>Site Administration</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="genre-input">
                <h1>Name:</h1>
                <input defaultValue={genre?.name} {...register("name", { required: "Name is required" })} />
            </div>
            {formState.errors.name && <p className="genre-error">{formState.errors.name.message}</p>}
            <hr />
            <div className="genre-input">
                <h1>Description:</h1>
                <textarea defaultValue={genre?.description} {...register("description", { required: "Description is required" })} />
            </div>
            {formState.errors.description && <p className="genre-error">{formState.errors.description.message}</p>}
            <hr />
            <button type="submit">Update</button>
            <p>{resultMessage}</p>
        </form>
    </div>
    )
}
