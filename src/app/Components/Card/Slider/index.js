import Image from "next/image";
import Link from "next/link";

// import icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../icon/solid";
import "../../../icon/regullar";

export default function CardSlider({id,imageCover, title, rating, duration, ageRating, click}) {
    return (
        <>
            <Link href={`/${id}`}>
                <div className="flex md:gap-x-5 w-full md:w-1/2">
                    <div className="hidden md:block">
                        <Image src={imageCover} alt="cover-slider" width={260} height={400} />
                    </div>
                    <div className="flex flex-col gap-5 md:gap-y-8">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold leading">{title}</h1>
                        </div>
                        <div className="flex flex-col gap-y-2 md:gap-y-3">
                            <div className="flex items-center gap-x-2">
                                <h2>Rating:</h2>
                                <div className="flex gap-x-1 items-center">
                                    <h2 className="text-[#F1CE2C]">{rating}</h2>
                                    <div className="flex gap-x-0.5">
                                        {renderStars(rating)}
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
                        </div>
                        <div className="bg-[#D9D9D9] flex items-center justify-center  py-2 gap-x-3 rounded-sm w-[125px] md:w-[150px] mb-8 md:mt-5 cursor-pointer hover:bg-white" onClick={click}>
                            <FontAwesomeIcon icon="fa-solid fa-play" className="text-black w-5"/>  
                            <h2 className="text-black text-xs">Watch Trailer</h2>    
                        </div>  
                    </div>  
                </div>
            </Link>
        </>  
  )
}

// membuat fungsi start
// Fungsi helper untuk merender bintang berdasarkan rating
const renderStars = (rating) => {
    const stars = [];
    // 1. Konversi rating dari skala 10 ke skala 5
    const normalizedRating = rating / 2;
    const totalStars = 5;

    // 2. Loop sebanyak 5 kali untuk setiap bintang
    for (let i = 1; i <= totalStars; i++) {
        if (i <= normalizedRating) {
        // Jika 'i' lebih kecil atau sama dengan rating, ini adalah bintang penuh
        stars.push(
            <FontAwesomeIcon
            key={`star-full-${i}`}
            icon="fa-solid fa-star"
            className="text-[#F1CE2C] w-4"
            />
        );
        } else if (i - 0.5 <= normalizedRating) {
        // Jika 'i' dikurangi 0.5 masih kurang dari rating, ini adalah bintang setengah
        stars.push(
            <FontAwesomeIcon
            key={`star-half-${i}`}
            icon="fa-solid fa-star-half-stroke"
            className="text-[#F1CE2C] w-4"
            />
        );
        } else {
        // Jika tidak, ini adalah bintang kosong
        stars.push(
            <FontAwesomeIcon
            key={`star-empty-${i}`}
            icon="fa-regular fa-star"
            className="text-[#F1CE2C] w-4"
            />
        );
        }
    }

    return stars;
};
