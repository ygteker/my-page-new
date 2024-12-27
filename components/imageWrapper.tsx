import Image, { StaticImageData } from "next/image";

interface ImageWrapperProps {
  image: StaticImageData,
  order: number
}

const ROTATIONS = [20, 335, 15, 340, 25, 345];

const ImageWrapper = (props: ImageWrapperProps) => {
  return (
    <div className="w-32 h-32 bg-gray-200 flex justify-center items-center"
      style={{ transform: `rotate(${ROTATIONS[props.order]}deg)` }} >
      <Image src={props.image} alt="" width={200} height={300} />
    </div >
  )
}

export default ImageWrapper;
