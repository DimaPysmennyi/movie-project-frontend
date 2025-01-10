import './Review.css';
import { HandThumbsUp, HandThumbsDown, Controller } from "react-bootstrap-icons";

interface IReviewProps{
    id: number
    title: string
    rate: number
    text: string
    likes: number
    dislikes: number
}

export function Review(props: IReviewProps){
    return (
        <div className='review'>
            <div className = 'review-header'>
                <div className = 'title'>{props.title}</div>
                <div className = 'rate'>⭐ {props.rate}/10 </div>
            </div>
            <div className = 'review-body'>
                <p className='review-text'>{props.text}</p>
            </div>
            <div className = 'review-footer'>
                <div className='likes'><HandThumbsUp></HandThumbsUp> {props.likes}</div>
                <div className='dislikes'><HandThumbsDown></HandThumbsDown> {props.dislikes}</div>
            </div>
        </div>
    )
}