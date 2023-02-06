import { useEffect, useState } from "react";

const Banner = () => {
  const [movies, setMovies] = useState([]);
  // Function to fetch the data from the API.
  const fetchbannerdata = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
    );
    const responce = await data.json();
    setMovies(responce.results);
  };
  useEffect(() => {
    fetchbannerdata();
  }, []);
  // Pick up the random movie from the state(movie).
  const movie = movies[Math.floor(Math.random() * movies.length)];
  return (
    <div className="w-full h-[600px] text-white mt-5 ">
      <div className="w-full h-full">
        <div className="absolute w-full h-[600px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${
            movie?.backdrop_path ? movie?.backdrop_path : movie?.poster_path
          }`}
          alt={movie?.title}
        />
        <div className="absolute w-full top-[50%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold font-mono">
            {movie?.name ? movie?.name : movie?.original_title}
          </h1>
          <div className="my-4">
            <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5 font-semibold">
              Play
            </button>
            <button className="border text-white border-gray-300 py-2 px-5 ml-4 font-semibold">
              Watch Later
            </button>
          </div>
          <p className="text-gray-400 text-sm font-serif">
            Released:{" "}
            {movie?.first_air_date
              ? movie?.first_air_date
              : movie?.release_date}
          </p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200 line-clamp-2 font-semibold">
            {movie?.overview}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
