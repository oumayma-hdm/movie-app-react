const API_KEY = "fe68dd7be46b4a115e7e09f148dd4433";
const BASE_URL = "https://api.themoviedb.org/3"

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await  response.json()
    return data.results
};

export const SearchMovies = async (query) => {  // Added query as a parameter
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=
        ${encodeURIComponent(query)}`);
    const data = await  response.json()
    return data.results
};
