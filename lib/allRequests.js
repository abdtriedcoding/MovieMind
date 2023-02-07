// All endpoints are present in this file.
export default {
    trending: {
        title: "Trending",
        url: `/trending/all/week?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`,
    },
    top_rated: {
        title: "Top Rated",
        url: `/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`,
    },
    action_movies: {
        title: "Action",
        url: `/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=28`,
    },
    comedy: {
        title: "Comedy",
        url: `/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=35`,
    },
    horror_movies: {
        title: "Horror",
        url: `/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=27`,
    },
    romance: {
        title: "Romance",
        url: `/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=10749`,
    },
    mystery_movies: {
        title: "Mystery",
        url: `/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=9648`,
    },
    Sky_Fi: {
        title: "Sky-Fi",
        url: `/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=878`,
    },
    western_movies: {
        title: "Western",
        url: `/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=37`,
    },
    animation_movies: {
        title: "Animation",
        url: `/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=16`,
    },
    tv_movies: {
        title: "TV Movie",
        url: `/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=10770`,
    },
}