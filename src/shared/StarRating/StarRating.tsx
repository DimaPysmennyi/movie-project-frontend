import { useState } from "react";
import { FaStar } from "react-icons/fa";
import './StarRating.css'
import { useParams } from "react-router-dom";

interface StarRatingProps {
    onSubmit: () => void,
}
export function StarRating(props: StarRatingProps){
    const [rating, setRating] = useState<number>(0)
    const [hover, setHover] = useState<number>(0)
    let {onSubmit} = props
    let params  = useParams()

    async function sendRating() {
        if (rating === 0) {
            return;
        }

        try {
            const response = await fetch(`http://localhost:8000/movie/${params.id}/updateMovieRating`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ rating }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data);
                onSubmit()

            } else {
                console.error("error");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }

    return(
        <>
            <div className="rating-div">
                {[...Array(10)].map((_, index) => {
                    return (
                        <>
                            <FaStar size={35}
                            className={`${index + 1 <=rating ? 'selected-star' : ''} ${index + 1 <= hover ? 'selected-star' : ''}`}
                            key = {index}
                            onMouseOut={()=>{
                                setHover(0)
                            }}
                            onMouseOver={()=>{
                                setHover(index + 1)
                            }}
                            onClick={()=>{
                                setRating(index+1)
                            }}
                            />
                        </>
                    )
                })}
                
            </div>
        <button className="modal-rate-button" onClick={sendRating}>Оцінити</button>
    </>
    )
}