import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../icon/solid";

export default function Search() {
  return (
    <div className="bg-[#373737] py-2 px-5 rounded-full flex items-center">
      <FontAwesomeIcon
        icon="fa-solid fa-magnifying-glass"
        className="text-[#F1CE2C] mr-5 w-5 h-5 rotate-90"
      />
      <input
        type="text"
        name="search"
        placeholder="Fun, Romantic, War"
        className="bg-[#373737] outline-none text-[#8F8989] text-sm w-40"
      />
    </div>
  );
}
