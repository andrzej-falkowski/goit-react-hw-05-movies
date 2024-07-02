import axios from "axios";

const API_KEY = "5357a18218526fd8ba84c65d928d7308";
const BASE_URL = "https://api.themoviedb.org/3";

export async function getTrendingMovies() {
  const response = await axios.get(
    `${BASE_URL}/trending/all/day?language=en-US?api_key${API_KEY}`,
  );
  console.log(response.data.results);
  return response.data.results;
}

export async function searchMovies(query) {
  const response = await axios.get(
    `${BASE_URL}/search/search-movie?include_adult=false&language=en-US?api_key${API_KEY}?${query}`,
  );
  return response.data.results;
}

export async function getMovieDetails(id) {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}?language=en-US?api_key${API_KEY}?${id}`,
  );
  return response.data;
}

export async function getMovieCredits(id) {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}/credits?language=en-US?api_key${API_KEY}?${id}`,
  );
  return response.data.cast;
}

export async function getMovieReviews(id) {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}/reviews?language=en-US?api_key${API_KEY}?${id}`,
  );
  return response.data.results;
}
