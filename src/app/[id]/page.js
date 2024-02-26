import Image from "next/image";
import image from "../../../public/the-flash-cover.jpg";
import RecomendtationCard from "../Components/Card/Recomendation";

// import icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../icon/solid";

export default function DetailMovie({ params }) {
  return (
    <div className="container mx-auto px-10 pt-5">
        <div className="flex gap-x-5">
            <div>
                <div>
                    <iframe width="100%" height="500" src="https://www.youtube.com/embed/hebWYacbdvc?si=uel2qeFbvMB0p1uu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className="flex justify-between pt-5 pb-6">
                    <div>
                    <h4 className="text-2xl font-semibold">The Flash</h4>   
                    </div>
                    <div className="bg-[#201F1F] flex items-center justify-center gap-x-2 rounded-full px-2">
                        <FontAwesomeIcon icon="fa-solid fa-star" className="text-[#F1CE2C] w-5" /> 
                        <h4 className="text-xl font-semibold">6.0</h4> 
                    </div>  
                </div> 
                <div className="border-white border-t border-r pr-48 flex flex-col gap-y-10 pb-5">
                    <div>
                        <h6 className="text-2xl font-semibold py-5">Synopsis</h6>
                        <p className="text-sm">Barry Allen is struck by a bolt of lightning and thus, an extraordinary power is born inside him: The Speed Force. When he uses this power to run back in time and save his mother, he creates a world without heroes and General Zod has returned. To defeat him, his only hope rests in the hands of a retired Batman, another Barry and an imprisoned kryptonian.</p>
                    </div>
                    <div className="flex gap-x-3">
                        <div>
                            <Image src={image} alt="cover-film" width={150} />
                        </div>      
                        <div className="text-sm flex flex-col gap-y-10">
                            <div className="flex flex-col gap-y-2">
                                <div className="flex gap-x-1">
                                    <p>Director</p>
                                    <p className="text-[#3584BC]">Andy Muschietti</p>  
                                </div>
                                <div className="flex gap-x-1">
                                    <p>Writers</p>
                                    <p className="text-[#3584BC]">Christina Hodson</p> 
                                    <p className="text-[#3584BC]">John Frcancis Daley</p> 
                                    <p className="text-[#3584BC]">Jonathan Goldstein</p> 
                                </div>
                                <div className="flex gap-x-1">
                                    <p>Stars</p>
                                    <p className="text-[#3584BC]">Ezra Miller</p> 
                                    <p className="text-[#3584BC]">Michael Keaton</p> 
                                    <p className="text-[#3584BC]">Sasha Calle</p> 
                                </div>
                                <div className="flex gap-x-1">
                                    <p>Release Date</p>
                                    <p className="text-[#3584BC]">June 16, 2023</p> 
                                </div>
                            </div>
                            <div className="flex gap-x-2">
                                <p className="px-2 rounded-full bg-[#201F1F]">Action</p>
                                <p className="px-2 rounded-full bg-[#201F1F]">Advanture</p>
                                <p className="px-2 rounded-full bg-[#201F1F]">Fantasy</p>
                                <p className="px-2 rounded-full bg-[#201F1F]">Sci-Fi</p>    
                            </div>  
                        </div>  
                    </div>
                    
                </div>
            </div>
            <div className="w-[900px]">
                <h4 className="text-2xl font-semibold pb-7">Recommendation</h4>
                <div className="flex flex-col gap-y-6">
                    <RecomendtationCard />
                    <RecomendtationCard /> 
                    <RecomendtationCard />
                    <RecomendtationCard />   
                </div>  
            </div>  
        </div> 
    </div>
  )
}
