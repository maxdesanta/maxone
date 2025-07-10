import Image from "next/image";
import logoImage from '../../../../public/logo-rating.svg';
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image src={logoImage} alt="logo" width={120} />
    </Link>
  )
}
