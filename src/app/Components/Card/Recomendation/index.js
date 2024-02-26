import Link from "next/link";
import r from "../../../../../public/black-panther-bg.jpg";
import Image from "next/image";

// import icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../icon/solid";

export default function RecomendtationCard() {
    return (
    <>
        <Link href="/">
            <div className="relative flex h-44 w-full max-w-[28rem] flex-col items-end justify-end overflow-hidden rounded-xl bg-clip-border">
                <Image src={r} alt="cover-image" className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-noneobject-cover shadow-none -z-40" />
                <div className="-z-10 absolute inset-0 h-full w-full bg-gradient-to-t from-[#6b6b6be7] via-transparent to-[#6b6b6bd3]"></div>
                <div className="pr-3 pb-1 flex justify-center items-center gap-x-2">
                    <FontAwesomeIcon icon="fa-solid fa-star" className="text-[#F1CE2C] w-6" />          
                    <p className="text-xl font-semibold">9.0</p>
                </div>
            </div> 
            <p className="font-semibold pt-2">Black Panther</p>      
        </Link>    
    </>
  )
}
