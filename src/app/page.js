import CategoryFilm from "./Components/CategoryFilm";
import SliderMovies from "./Components/SliderMovies";

export default function Home() {
  return (
    <div>
      <SliderMovies />
      <div className="pt-20">
        <CategoryFilm style1="flex flex-col gap-y-8 pl-10" style2="flex gap-x-4 items-center" style3="category-film flex flex-row gap-x-5 overflow-x-scroll" title="Most Plays Today" />
      </div>
      <div className="pt-10 pb-5">
        <CategoryFilm style1="flex flex-col gap-y-8 pr-10" style2="flex gap-x-4 items-center flex-row-reverse" style3="category-film flex flex-row-reverse gap-x-5 overflow-x-scroll" title="Best Rating" />
      </div>
    </div>
  );
}
