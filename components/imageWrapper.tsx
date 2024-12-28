import Image, { StaticImageData } from "next/image";

interface ImageWrapperProps {
  image: StaticImageData,
  order: number
}

const ROTATIONS = [10, 350, 5, 355, 15, 345];

const ImageWrapper = (props: ImageWrapperProps) => {
  return (
    <div className="flex rounded-md justify-center items-center overflow-hidden aspect-[4/3]"
      style={{ transform: `rotate(${ROTATIONS[props.order]}deg)` }} >
      <Image
        className="object-cover"
        src={props.image} alt="" width={400} height={1000} />
    </div >
  )
}

export default ImageWrapper;
