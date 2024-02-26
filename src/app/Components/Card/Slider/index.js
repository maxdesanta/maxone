import Image from "next/image";
import Link from "next/link";

// import icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../icon/solid";
import "../../../icon/regullar";

export default function CardSlider({imageCover, title, rating, duration, ageRating, click}) {
  return (
      <div className="flex gap-x-5 w-1/2">
        <Link href="/2">
            <Image src={imageCover} alt="cover-slider" width={260} />
            <div className="flex flex-col gap-y-8">
                <h1 className="text-6xl font-bold leading">{title}</h1>
                <div className="flex flex-col gap-y-3">
                    <div className="flex items-center gap-x-2">
                        <h2>Rating:</h2>
                        <div className="flex gap-x-1 items-center">
                            <h2 className="text-[#F1CE2C]">{rating}</h2>
                            <div className="flex gap-x-0.5">
                                <FontAwesomeIcon icon="fa-solid fa-star" className="text-[#F1CE2C] w-4" />
                                <FontAwesomeIcon icon="fa-solid fa-star" className="text-[#F1CE2C] w-4" />
                                <FontAwesomeIcon icon="fa-solid fa-star" className="text-[#F1CE2C] w-4" />
                                <FontAwesomeIcon icon="fa-solid fa-star" className="text-[#F1CE2C] w-4" />
                                <FontAwesomeIcon icon="fa-regular fa-star" className="text-[#F1CE2C] w-4" />    
                            </div>      
                        </div>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <h2>Duration:</h2>
                        <div className="flex items-center gap-x-1">
                            <FontAwesomeIcon icon="fa-regular fa-clock" className="text-[#3584BC] w-4"/> 
                            <h2 className="text-[#3584BC]">{duration}</h2>          
                        </div>      
                    </div>      
                    <h2 className="text-3xl mt-3">{ageRating}</h2>
                </div>
                <div className="bg-[#D9D9D9] flex items-center justify-center py-2 gap-x-3 rounded-sm w-[150px] mt-5 cursor-pointer hover:bg-white" onClick={click}>
                    <FontAwesomeIcon icon="fa-solid fa-play" className="text-black w-5"/>  
                    <h2 className="text-black text-xs">Watch Trailer</h2>    
                </div>  
            </div>
        </Link>
      </div>
  )
}
