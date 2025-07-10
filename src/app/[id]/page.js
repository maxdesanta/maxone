import Image from "next/image";
import RecomendtationCard from "../Components/Card/Recomendation";

// import icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../icon/solid";

export default async function DetailMovie({ params }) {
  const { id } = params;
  const [movie, videos, person, recommendations, certificate] = await Promise.all([
    fetchDetailMovie(id),
    fetchTrailer(id),
    fetchCast(id),
    fetchRecomendation(id),
    fetchCertificateMovie(id),
  ]);

  const trailer = videos.results.find((video) => video.type === "Trailer");
  const director = person.crew.filter((crew) => crew.job === "Director");
  const writing = person.crew.filter(
    (crew) => crew.department === "Writing"
  );
  const usRelease = certificate.results.find(r => r.iso_3166_1 === "US");
  let cer = "N/A";
  if (usRelease && usRelease.release_dates.length > 0) {
    cer = usRelease.release_dates[0].certification || "N/A";
  }

  const cast = person.cast.slice(0, 5);
  // Limit the number of recommendations to 4
  const sliceRecommendations = recommendations.results.slice(0, 4);

  return (
    <div className="container mx-auto px-10 pt-5">
      <div className="flex flex-col md:flex-row gap-x-5">
        <div>
          <div className="aspect-video w-full h-[250px] md:h-[500px]">
            <iframe
              width="100%"
              className="h-full w-full" 
              src={`https://www.youtube.com/embed/${trailer.key}`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="flex justify-between pt-3 pb-5">
            <div>
              <h4 className="text-xl md:text-2xl font-semibold">{movie.title}</h4>
            </div>
            <div className="bg-[#201F1F] flex items-center justify-center gap-x-2 rounded-full px-2">
              <FontAwesomeIcon
                icon="fa-solid fa-star"
                className="text-[#F1CE2C] w-4"
              />
              <h4 className="text-base font-semibold">
                {Math.round(movie.vote_average * 10) / 10}
              </h4>
            </div>
          </div>
          <div className="border-white border md:border-t md:border-r md:border-l-0 md:border-b-0 md:pr-48 flex flex-col gap-y-10 lg:pb-5 md:w-[1100px] md:h-auto p-5 md:p-0 mb-5 md:mb-0">
            <div>
              <h6 className="text-2xl font-semibold md:py-5 pb-5">Synopsis</h6>
              <p className="text-sm">{movie.overview}</p>
            </div>
            <div className="flex gap-x-3">
              <div className="hidden md:block">
                <Image
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  alt="cover-film"
                  className="object-cover"
                  width={140}
                  height={200}
                />
              </div>
              <div className="text-sm flex flex-col gap-y-10">
                <div className="flex flex-col gap-y-2">
                  <div className="flex gap-x-1">
                    <p>Director</p>
                    <p className="text-[#3584BC]">
                      {director.map((director) => director.name).join(", ")}
                    </p>
                  </div>
                  <div className="flex gap-x-1">
                    <p>Writers</p>
                    <p className="text-[#3584BC]">
                      {" "}
                      {writing.map((writing) => writing.name).join(", ")}
                    </p>
                  </div>
                  <div className="flex gap-x-1">
                    <p>Stars</p>
                    <p className="text-[#3584BC]">
                      {cast.map((cast) => cast.name).join(", ")}
                    </p>
                  </div>
                  <div className="flex gap-x-1">
                    <p>Release Date</p>
                    <p className="text-[#3584BC]">
                      {new Date(movie.release_date).toLocaleDateString(
                        "en-US",
                        { year: "numeric", month: "long", day: "numeric" }
                      )}
                    </p>
                  </div>
                  <div className="flex gap-x-1">
                    <p>Duration</p>
                    <p className="text-[#3584BC]">
                      {formatDuration(movie.runtime)}
                    </p>
                  </div>
                  <div className="flex gap-x-1">
                    <p>Certification</p>
                    <p className="text-[#3584BC]">
                      {cer}
                    </p>
                  </div>
                </div>
                <div className="flex gap-x-2">
                  {movie.genres.map((genre) => (
                    <p
                      key={genre.id}
                      className="px-2 rounded-full bg-[#201F1F]"
                    >
                      {genre.name}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pb-5 md:pb-0 md:w-[750px]">
          <h4 className="text-xl md:text-2xl font-semibold pb-4 md:pb-7">Recommendation</h4>
          <div className="flex flex-col gap-y-6">
            {sliceRecommendations.map((recommendation) => (
              <RecomendtationCard
                key={recommendation.id}
                image={`https://image.tmdb.org/t/p/original/${recommendation.backdrop_path}`}
                title={recommendation.title}
                rating={recommendation.vote_average}
                idFilm={recommendation.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// fetch detail movie
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

// fetch trailer
async function fetchTrailer(id) {
  const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;

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

// fetch data cast
async function fetchCast(id) {
  const url = `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`;

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

// fetch data recomendations film
async function fetchRecomendation(id) {
  const url = `https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US&page=1`;

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

// format duration
const formatDuration = (totalMinutes) => {
  if (!totalMinutes) return 'N/A';
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return `${hours}h ${minutes}m`;
};

// fetch rating
async function fetchCertificateMovie(id) {
  const url = `https://api.themoviedb.org/3/movie/${id}/release_dates`;

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