const API_KEY = "72d512e0cf2b02382aca40f275a7486e";

const requests = {
    fetchTrending : '/trending/all/week?api_key=${API_KEY}&language=en-US',
    fetchNetflixOriginals: '/discover/tv?api_key=${API_KEY}&with_networks=213',
    fetchTopRated: '/movie/top_rated?api_key=${API_KEY}&language=en-US',
    fetchActionMovies: '/discover/movie?api_key=&{API_KEY}&with_genres=1365',
    fetchComedyMovies: '/discover/movie?api_key=&{API_KEY}&with_genres=35',
    fetchHorrorMovies: '/discover/movie?api_key=&{API_KEY}&with_genres=27',
    fetchRomanceMovies: '/discover/movie?api_key=&{API_KEY}&with_genres=10749',
}

export default requests;
