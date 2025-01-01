
import HeaderAndText from "@/components/HeaderAndText"
import Navbar from "@/components/Navbar"
import ProjectCard from "@/components/ProjectCard"

import img1 from "@/assets/github.png";
import strings from "@/strings.json";

export default function Projects() {
  return (
    <div className="bg-gray-100">
      <div className="relative h-full w-3/4 mx-auto bg-white p-4 pb-12 space-y-12">
        <Navbar />
        <HeaderAndText title={strings["projects-title"]} text={strings["projects-content"]} />
        <div className="grid grid-cols-2 gap-24 px-12">
          <ProjectCard image={img1} title="Title" text="LLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumorem ipsum" link="https://www.google.com" />
          <ProjectCard image={img1} title="Title" text="LLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumorem ipsum" link="https://www.google.com" />
          <ProjectCard image={img1} title="Title" text="LLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumorem ipsum" link="https://www.google.com" />
          <ProjectCard image={img1} title="Title" text="LLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumorem ipsum" link="https://www.google.com" />
        </div>
      </div>
    </div>
  )
}
