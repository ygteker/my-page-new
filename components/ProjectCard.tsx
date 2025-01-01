
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  image: StaticImageData,
  title: string,
  text: string,
  link: string
}
const ProjectCard = (props: ProjectCardProps) => {
  return (
    <div className="flex flex-col space-y-6 rounded-xl bg-sky-100 p-6">
      <Image src={props.image} alt="" width={50} height={50} />
      <p>{props.title}</p>
      <p>{props.text}</p>
      <Link className="hover:underline" href={props.link}>{props.link}</Link>
    </div>
  )
}

export default ProjectCard;
