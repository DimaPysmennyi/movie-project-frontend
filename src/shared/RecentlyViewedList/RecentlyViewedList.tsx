import { useEffect, useState } from "react";
import { useRecentlyViewedContext } from "../../context/recentlyViewedContext"
import { FilmCard } from "../FilmCard/FilmCard"
import './RecentlyViewedList.css'
import { IMovie, useMovies } from "../../hooks/useMovies";

interface IFrequentGenres{
    [key: string]: number
}

export function RecentlyViewedList(){
    const { recentlyViewed } = useRecentlyViewedContext();
    const { movies } = useMovies();
    const [recommendatedMovies, setRecommendatedMovies] = useState<IMovie[]>([]);

    function findMostFrequent() {
        let frequentGenres: IFrequentGenres = {}
        let recommendations: string[] = [];
        recentlyViewed.forEach((movie: IMovie) => {
            movie.genres.forEach((genre) => recommendations.push(genre.genreName));
        })

        for (let genre of recommendations) {
            if (frequentGenres[genre]){
                frequentGenres[genre] += 1;
            } else{
                frequentGenres[genre] = 1;
            }
        }
        
        const values = Object.keys(frequentGenres).map(key => frequentGenres[key]);
        const max = values.reduce((a, b) => Math.max(a, b), -Infinity);

        return Object.keys(frequentGenres).find(key => frequentGenres[key] === max);
    }

    useEffect(() => {
        const frequent = findMostFrequent();
        if (frequent != undefined){
            const newRecommendatedMovies = movies.filter((movie) => {
                return movie.genres.some((genre) => genre.genreName === frequent)
            })
            console.log(newRecommendatedMovies)
            setRecommendatedMovies(newRecommendatedMovies);
        }
    }, [recentlyViewed, movies])

    console.log(findMostFrequent());

    return (
        <>
        {recentlyViewed.length > 0 ?
        <div className="recently-viewed-container">
            <div className="recommendations">
                <div className="recently-viewed-text">
                    <h1>Що подивитись?</h1>
                    <h2>Рекомендовані фільми</h2>
                </div>
                <div className="recently-viewed-list">
                    {recommendatedMovies.map((movie)=>{
                        return (
                            <FilmCard key={movie.id} id={movie.id} name={movie.name} previewSrc={movie.previewSrc} rating = {movie.rating}/>
                        )
                    })}
                </div>
            </div>
            <div className="recently-viewed-div">
                <div className="recently-viewed-text">
                    <h2>Нещодавні фільми</h2>
                </div>
                <div className="recently-viewed-list">
                    {recentlyViewed.map((movie)=>{
                        return (
                            <FilmCard key={movie.id} id={movie.id} name={movie.name} previewSrc={movie.previewSrc} rating = {movie.rating}/>
                        )
                    })}
                </div>
            </div>
        </div>
        :
        undefined
        }
        
       </>      
    )
}