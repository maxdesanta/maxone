import Image from "next/image";
import Link from "next/link";

// import icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../icon/solid";
import "../../../icon/regullar";

export default function CardCategory({image, title, rating, key, idFilm}) {
  return (
    <>
      <Link href={`/${idFilm}`}>
        <div key={key} className="relative min-w-[200px] h-[300px] shadow-[0_2px_8px_rgba(255,255,255,0.5)]">
          <Image src={image} alt="cover-film" width={200} height={300} className="object-cover"/>
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div className="p-3 flex items-center flex-col">
              <h4 className="text-base text-center font-semibold line-clamp-1">{title}</h4>
              <h5 className="text-[#F1CE2C] text-lg">
              <FontAwesomeIcon icon="fa-solid fa-star" className="w-6 mr-1" />
              {rating}
              </h5>
            </div>
          </div>  
        </div>
      </Link>
    </>
  )
}
