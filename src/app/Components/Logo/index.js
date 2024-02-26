import Image from "next/image";
import logoImage from '../../../../public/logo-rating.svg';

export default function Logo() {
  return (
    <>
      <Image src={logoImage} alt="logo" width={120} />
    </>
  )
}
