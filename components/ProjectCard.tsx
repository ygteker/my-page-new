
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import linkImage from "@/assets/link.png";

interface ProjectCardProps {
  image?: StaticImageData,
  title: string,
  text: string,
  linkText: string,
  link: string
}
const ProjectCard = (props: ProjectCardProps) => {
  return (
    <>
      <div className="flex flex-col space-y-6 rounded-xl bg-sky-100 p-6">
        {props.image != undefined && <Image className="rounded-full" src={props.image} alt="" width={50} height={50} />}
        <p className="text-xl font-bold">{props.title}</p>
        <p>{props.text}</p>
        <div className="flex flex-row space-x-2">
          {props.title != "All the Others" && <Image src={linkImage} alt="" width={20} height={1} />}
          <Link className="hover:underline" href={props.link}>{props.linkText}</Link>
        </div>
      </div>
    </>
  )
}

export default ProjectCard;
