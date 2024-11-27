import MovieCard from "../components/MovieCard";
import { useState , useEffect } from "react";
import "../css/Home.css"
import { SearchMovies , getPopularMovies } from "../services/api";
function Home() {
    const [searchQuery , setSearchQuery]= useState("");
    // ... existing code ...
const handleSearch = async (e) => {  // Change to async function
    e.preventDefault();
    alert(searchQuery);
    const searchedMovies = await SearchMovies(searchQuery);  // Call SearchMovies with searchQuery
    setMovies(searchedMovies);  // Update movies state with the search results
    setSearchQuery("");  // Clear the search input
};
// ... existing code ...
    const [movies, setMovies] = useState([]);
    const [error , setError] = useState(null);
    const [loading , setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                console.log("Fetched Popular Movies:", popularMovies); // Debugging line
                setMovies(popularMovies);
            } catch (err) {
                console.error("Error fetching popular movies:", err); // Error handling
                setError("Failed to load movies ...");
            } finally {
                setLoading(false);
            }
        };
        loadPopularMovies();
    }, []);
    // const movies =[
    //    { id:1, title:"Train to Busan", release_date: "2016"},
    //    { id:2, title:"Midnight Runner", release_date: "2020"},
    //    { id:3, title:"Unlocked", release_date: "2022"},
    //    { id:4, title:"The call", release_date: "2023"},
    // ]

    return( <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text" placeholder="Search for movie ... " className="search-input" value={searchQuery} onChange={(e)=> setSearchQuery(e.target.value)}/>
            <button type="submit" className="search-button"></button>
        </form>
        <div className="movie-card-container">
  
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        
</div>
    </div>
    );
}
export default Home