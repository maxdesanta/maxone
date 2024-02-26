import coverFilm from "../../../../public/the-flash-cover.jpg";

// import component
import CardCategory from "../Card/Catergory";

export default function CategoryFilm({style1, style2, style3, title}) {
  return (
    <div className={style1}>
      <div className={style2}>
          <div className="w-[5px] h-[28px] bg-[#F1CE2C] rounded-sm"></div>      
          <h3 className="font-semibold text-lg">{title}</h3>
      </div>
      <div className={style3}>
        <CardCategory image={coverFilm} title="The Flash" rating="6.0" />
        <CardCategory image={coverFilm} title="The Flash" rating="6.0" />
        <CardCategory image={coverFilm} title="The Flash" rating="6.0" />
        <CardCategory image={coverFilm} title="The Flash" rating="6.0" />
        <CardCategory image={coverFilm} title="The Flash" rating="6.0" />
        <CardCategory image={coverFilm} title="The Flash" rating="6.0" />
        <CardCategory image={coverFilm} title="The Flash" rating="6.0" />
        <CardCategory image={coverFilm} title="The Flash" rating="6.0" />
        <CardCategory image={coverFilm} title="The Flash" rating="6.0" />
        <CardCategory image={coverFilm} title="The Flash" rating="6.0" />
        <CardCategory image={coverFilm} title="The Flash" rating="6.0" />
        <CardCategory image={coverFilm} title="The Flash" rating="6.0" />
      </div>
    </div>
  )
}
