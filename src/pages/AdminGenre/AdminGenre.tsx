import { useForm, SubmitHandler } from "react-hook-form"
import { useGenres } from "../../hooks/useGenres"
import { useState } from "react"
import "./AdminGenre.css"
interface GenreFormInputs {
    name: string;
    description: string;
}

export function AdminGenre() {
    const { genres } = useGenres()
    const [selectedGenre, setSelectedGenre] = useState(genres[0] || null)
    const { register, handleSubmit, setValue, formState: {errors} } = useForm<GenreFormInputs>()
    const handleGenreChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const genre = genres.find(genre => genre.id === Number(event.target.value))
        if (genre) {
            setSelectedGenre(genre)
            setValue("name", genre.name)
            setValue("description", genre.description)
        }
    }
    const onSubmit: SubmitHandler<GenreFormInputs> = (data) => {
        if (selectedGenre) {
            const updatedGenre = { id: selectedGenre.id, ...data }
            console.log("новые данные", updatedGenre)
        }
    }
return (
    <div className="a">
        <h1 className="h11"> Site Administration</h1>
        <div className="mainlogic">
            <div className="selectorr">
                <h1 className="genreh1">Genre:</h1>
                <select onChange={handleGenreChange} value={selectedGenre?.id || ""} className="selector">
                    {genres.map((genre) => (
                        <option key={genre.id} value={genre.id}>{genre.name}</option>
                    ))}
                </select>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="fields">
                <div className="namediv">
                    <label className="namelabel">Name:</label>
                    <input className="nameinput" {...register("name", { required: "Name is required" })} />
                    {errors.name && <p>{errors.name.message}</p>}
                </div>
                <div className="descriptiondiv">
                    <label className="descriptionlabel">Description:</label>
                    <input className="descriptioninput" {...register("description", { required: "Description is required" })} />
                    {errors.description && <p>{errors.description.message}</p>}
                    
                </div>
                <button type="submit">Update</button>
            </form>
        </div>
    </div>
    )
}
