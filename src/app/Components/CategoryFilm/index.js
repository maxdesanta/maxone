import { headers } from "next/headers";
import coverFilm from "../../../../public/the-flash-cover.jpg";

// import component
import CardCategory from "../Card/Catergory";

export default function CategoryFilm({style1, style2, style3, title, movies}) {
  return (
    <div className={style1}>
      <div className={style2}>
          <div className="w-[5px] h-[28px] bg-[#F1CE2C] rounded-sm"></div>      
          <h3 className="font-semibold text-lg">{title}</h3>
      </div>
      <div className={style3}>
        {movies?.length ? movies.map((m, i) =>
          <CardCategory key={i} idFilm={m.id} image={`https://image.tmdb.org/t/p/original/${m.poster_path}`} title={m.title} rating={Math.round(m.vote_average * 10) / 10} />) : 'Data kosong'}
      </div>
    </div>
  )
}

