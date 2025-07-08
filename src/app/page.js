import CategoryFilm from "./Components/CategoryFilm";
import SliderMovies from "./Components/SliderMovies";

export default async function Home() {
  // You can perform any data fetching here
  const movies = await fetchMoviesByTitle("Most Plays Today");
  const movieRatings = await fetchMoviesByTitle("Best Rating");
  const moviePopular = await fetchMoviesByPopular();
  const fetchData = moviePopular.slice(0, 4);
  const detailMovies = await fetchData.map(mov => fetchDetailMovie(mov.id));
  const sliderMovies = await Promise.all(detailMovies);

  return (
    <div>
      <SliderMovies movies={sliderMovies} />
      <div className="pt-20">
        <CategoryFilm
          style1="flex flex-col gap-y-8 pl-10"
          style2="flex gap-x-4 items-center"
          style3="category-film flex flex-row gap-x-5 overflow-x-scroll"
          title="Most Plays Today"
          movies={movies}
        />
      </div>
      <div className="pt-10 pb-5">
        <CategoryFilm
          style1="flex flex-col gap-y-8 pr-10"
          style2="flex gap-x-4 items-center flex-row-reverse"
          style3="category-film flex flex-row-reverse gap-x-5 overflow-x-scroll"
          title="Best Rating"
          movies={movieRatings}
        />
      </div>
    </div>
  );
}

// fetch data movies
async function fetchMoviesByTitle(t) {
  let url = "";

  if (t === "Most Plays Today") {
    url =
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
  } else if (t === "Best Rating") {
    url = "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
  }

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
    },
  };

  const res = await fetch(url, options);
  const response = await res.json();

  return response.results;
}

// fetch data slider
async function fetchMoviesByPopular() {
  const url = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
    },
  };

  const res = await fetch(url, options);
  const response = await res.json();

  return response.results;
}

// fetch detail movies
async function fetchDetailMovie(id) {
  const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
    },
  };

  const res = await fetch(url, options);
  const response = await res.json();

  return response;
}

