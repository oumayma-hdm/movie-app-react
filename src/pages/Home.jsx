import MovieCard from "../components/MovieCard";
import { useState } from "react";

function Home() {
    const [searchQuery , setSearchQuery]= useState("");
    const handleSearch= ()=> {
        e.preventDefault()
        alert (searchQuery);
        setSearchQuery("------ ")
    };
    const movies =[
       { id:1, title:"Train to Busan", release_date: "2016"},
       { id:2, title:"Midnight Runner", release_date: "2020"},
       { id:3, title:"Unlocked", release_date: "2022"},
       { id:4, title:"The call", release_date: "2023"},
    ]
    return( <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text" placeholder="Search for move ... " className="search-input" value={searchQuery} onChange={(e)=> setSearchQuery(e.target.value)}/>
            <button type="submit" className="search-button"></button>
        </form>
        <div className="movies-grid">
            {movies.map(
                (movie)=> 
            movie.title.toLowerCase().startsWith(searchQuery)&&(
            <MovieCard movie={movie} key={movie.id}/>
            )
        )}
        </div>
    </div>
    );
}
export default Home