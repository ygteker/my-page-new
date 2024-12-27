"use client";

import Image, { StaticImageData } from "next/image";
import { redirect } from "next/navigation";

interface SocialButtonProps {
  imagePath: StaticImageData,
  address: string,
}
const SocialButton = (props: SocialButtonProps) => {
  const handleClick = () => {
    redirect(props.address);
  }
  return (
    <div>
      <Image src={props.imagePath} onClick={handleClick} alt="" width={40} height={40} />
    </div>
  )
}

export default SocialButton;
