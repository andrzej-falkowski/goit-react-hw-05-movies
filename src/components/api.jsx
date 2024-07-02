import axios from "axios";

const API_KEY = "5357a18218526fd8ba84c65d928d7308";
const BASE_URL = "https://api.themoviedb.org/3";

export async function getTrendingMovies() {
  const response = await axios.get(
    `${BASE_URL}/trending/get-trending?api_key${API_KEY}`,
  );
  console.log(response.data);
  return response.data;
}

export async function searchMovies(query) {
  const response = await axios.get(
    `${BASE_URL}/search/search-movies?api_key${API_KEY}?${query}`,
  );
  return response.data;
}

export async function getMovieDetails(id) {
  const response = await axios.get(
    `${BASE_URL}/movies/get-movie-details?api_key${API_KEY}?${id}`,
  );
  return response.data;
}

export async function getMovieCredits(id) {
  const response = await axios.get(
    `${BASE_URL}/movies//movies/get-movie-credits?api_key${API_KEY}?${id}`,
  );
  return response.data;
}

export async function getMovieReviews(id) {
  const response = await axios.get(
    `${BASE_URL}/movies/movies/movies/get-movie-reviews?api_key${API_KEY}?${id}`,
  );
  return response.data;
}
