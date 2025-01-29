const API_KEY = '64422b19ff6d242b3851b117c783ec08'


const requests = {
  upcoming: { url: `/movie/upcoming?api_key=${API_KEY}&language=en-US`, type: "movie" },
  popular: { url: `/movie/popular?api_key=${API_KEY}&language=en-US`, type: "movie" },
  latest: { url: `/tv/top_rated?api_key=${API_KEY}&language=en-US`, type: "tv" },
  trend: { url: `/trending/tv/week?api_key=${API_KEY}&language=en-US`, type: "tv" },
  airing: { url: `/tv/airing_today?api_key=${API_KEY}&language=en-US`, type: "tv" },
  discoverTv: { url: `/discover/tv?api_key=${API_KEY}&language=en-US`, type: "tv" },
};



export default requests
