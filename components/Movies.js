import { useEffect, useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  HeartIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// This function helps to get the movie from the localStorage.
const getLocalItems = () => {
  let storedFavorites = [];
  if (typeof localStorage !== "undefined") {
    storedFavorites = JSON.parse(localStorage.getItem("movies")) || [];
  }
  return storedFavorites;
};
const Movies = ({ results }) => {
  // Store the results in state so that we can also use used search functionality as a smartly.
  const [responceDate, setresponceDate] = useState(results);
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);
  const [localStorageMovies, setLocalStorageMovies] = useState(getLocalItems());
  const [error, setError] = useState(null);

  // Function to make request to fetch the movie data whatever the user aks for as query.
  const userInputMovie = async (e) => {
    e.preventDefault();
    if (!input) return;
    let responceData;
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${input}`
      );
      const responce = await data.json();
      if (responce.results.length === 0) {
        setError("Check Spelling, Movie Not Found.");
        setInput("");
        return;
      }
      responceData = responce;
      setInput("");
      setError("");
    } catch (error) {
      console.error(error);
      setError("An error occurred while fetching the data.");
    }
    setresponceDate(responceData);
  };

  // This useEffect is very very important to fetch the data from the server because we are using the usestate, that only helps to renders the data when the component is rendered firstly.
  useEffect(() => {
    setresponceDate(results);
  }, [results]);

  // This useEffect function helps to set the localStorage as soon as the page loads as well as when the new movie is added to localdstorage.
  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("movies", JSON.stringify(localStorageMovies));
    }
  }, [localStorageMovies]);

  // This function helps us to add a new favorite movie to our favorites list without duplicating the existing favorite movie.
  const addToFavourite = (movie) => {
    if (!localStorageMovies.find((m) => m.id === movie.id)) {
      setLocalStorageMovies([...localStorageMovies, movie]);
    }
    toast.success("Movie Added to favourites!!");
  };

  // This function helps us to delete the favorite movie from the localStorage.
  const deleteFromFavorites = (product) => {
    setLocalStorageMovies(
      localStorageMovies.filter((m) => m.id !== product.id)
    );
  };

  // This function helps to cleanup the localStorage.
  const clearLocalStorageMovies = () => {
    setLocalStorageMovies([]);
    localStorage.removeItem("movies");
  };

  return (
    <>
      {/* Movies Section */}
      <section className="bg-white">
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <div className="container px-6 py-10 mx-auto">
          <div className="flex items-center space-x-6">
            <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl flex-1">
              Movies
            </h1>
            {/* Heart Icon Button */}
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="focus:outline-none"
            >
              <HeartIcon className="w-6 h-6 text-gray-600 transition-colors duration-300 transform  hover:text-blue-500" />
            </button>
            {/* Input Bar */}
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Search  Movie..."
              className="w-1/3 h-10 text-black text-[12px] lg:text-[16px] rounded bg-transparent  border-solid border-gray-500 border-2 outline-none px-2 hover:border-blue-500 focus:border-blue-500  placeholder:text-[12px] placeholder:tracking-wide placeholder:lg:text-[16px]"
            />
            {/* Search Icon Button */}
            <button onClick={userInputMovie} className="focus:outline-none">
              <MagnifyingGlassIcon className="w-6 h-6 text-gray-600 transition-colors duration-300 transform  hover:text-blue-500" />
            </button>
          </div>

          <hr className="my-8 border-gray-200" />

          {/* Movies Cards Section */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {error && (
              <p className="text-center text-red-500 text-2xl">{error}</p>
            )}
            {!error &&
              responceDate?.results?.map((movie) => {
                return (
                  <div key={movie.name}>
                    {/* Image component */}
                    <img
                      className="object-cover h-64 rounded-lg lg:h-80"
                      src={`https://image.tmdb.org/t/p/original/${
                        movie?.backdrop_path
                          ? movie?.backdrop_path
                          : movie?.poster_path
                      }`}
                      alt=""
                    />
                    {/* Below card components */}
                    <div className="mt-8">
                      <span className="text-blue-500 uppercase font-bold">
                        Rating: {movie?.vote_average.toFixed(1)}
                      </span>
                      <h1 className="mt-4 text-xl font-semibold text-gray-800">
                        {movie.name ? movie?.name : movie?.original_title}
                      </h1>
                      <p className="mt-2 text-gray-500 line-clamp-3 font-semibold">
                        {movie?.overview}
                      </p>
                      <div className="items-center justify-between mt-4">
                        <div>
                          <p className="text-sm text-gray-500 font-semibold">
                            Released Date :{" "}
                            {movie?.first_air_date
                              ? movie?.first_air_date
                              : movie?.release_date}
                          </p>
                        </div>
                        <button
                          onClick={() => addToFavourite(movie)}
                          className="inline-block text-blue-500 underline hover:text-blue-400 font-semibold"
                        >
                          Add to Favourite
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
      {/* Sidebar which comes when click on HeartIcon */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                      <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-lg font-medium text-gray-900">
                            Favourite Movies List
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                              onClick={() => setOpen(false)}
                            >
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>

                        <div className="mt-8">
                          <div className="flow-root">
                            <ul
                              role="list"
                              className="-my-6 divide-y divide-gray-200"
                            >
                              {localStorageMovies.length === 0 && (
                                <h1 className="font-semibold text-lg text-red-500">
                                  No favourite movies. Please add movies to
                                  display here.
                                </h1>
                              )}
                              {localStorageMovies.map((product) => (
                                <li key={product?.name} className="flex py-6">
                                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                    <img
                                      src={`https://image.tmdb.org/t/p/original/${product?.backdrop_path}`}
                                      className="h-full w-full object-cover object-center"
                                    />
                                  </div>
                                  <div className="ml-4 flex flex-1 flex-col">
                                    <div>
                                      <div className="flex justify-between text-base font-medium text-gray-900">
                                        <h1>
                                          {product?.name
                                            ? product?.name
                                            : product?.original_title}
                                        </h1>
                                      </div>
                                      {/* <p className="mt-1 text-md text-gray-500">Rating: {product?.vote_average ? product?.vote_average.toFixed(1) : 'Not Available'}</p> */}
                                      <p className="text-sm text-gray-500">
                                        ReleasedOn:{" "}
                                        {product?.first_air_date
                                          ? product?.first_air_date
                                          : product?.release_date}
                                      </p>
                                    </div>
                                    <div className="flex flex-1 items-end justify-between text-sm">
                                      {/* <p className="text-md text-gray-500">ReleasedOn: {product?.first_air_date ? product?.first_air_date : product?.release_date}</p> */}
                                      <p className="mt-1 text-sm text-gray-500">
                                        Rating:{" "}
                                        {product?.vote_average
                                          ? product?.vote_average.toFixed(1)
                                          : "Not Available"}
                                      </p>
                                      <button
                                        onClick={() =>
                                          deleteFromFavorites(product)
                                        }
                                        type="button"
                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                        {localStorageMovies.length > 0 && (
                          <button
                            onClick={clearLocalStorageMovies}
                            className="flex justify-between text-base font-medium text-gray-900"
                          >
                            <p>Clear All</p>
                          </button>
                        )}
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default Movies;
