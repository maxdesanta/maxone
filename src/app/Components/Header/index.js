import Logo from "../Logo";
import Search from "../search";

export default function Header() {
  return (
    <div className="h-[80px] container mx-auto flex items-center justify-between px-10"> 
        <Logo />
        <Search />  
    </div>
  )
}
