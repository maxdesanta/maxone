import Image from "next/image";
import Link from "next/link";

// import icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../icon/solid";
import "../../../icon/regullar";

export default function CardCategory({image, title, rating}) {
  return (
    <>
      <Link href="2">
        <div className="relative min-w-[150px] shadow-[0_2px_8px_rgba(255,255,255,0.5)]">
          <Image src={image} alt="cover-film" width={150}/>
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <h4 className="text-lg">{title}</h4>
              <h5 className="text-[#F1CE2C] mt-[-3px] text-sm">
              <FontAwesomeIcon icon="fa-solid fa-star" className="w-4 mr-1" />
              {rating}
              </h5>
          </div>  
        </div>
      </Link>
    </>
  )
}
