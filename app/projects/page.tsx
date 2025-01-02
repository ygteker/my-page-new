
import HeaderAndText from "@/components/HeaderAndText"
import Navbar from "@/components/Navbar"
import ProjectCard from "@/components/ProjectCard"

import me from "@/assets/me.png";
import star from "@/assets/star.png";
import mag from "@/assets/mag.png";
import strings from "@/strings.json";

export default function Projects() {
  return (
    <div className="bg-gray-100">
      <div className="relative h-full w-3/4 mx-auto bg-white p-8 pb-12 space-y-12">
        <Navbar />
        <HeaderAndText title={strings["projects-title"]} text={strings["projects-content"]} />
        <div className="grid grid-cols-2 gap-24 px-12">
          <ProjectCard image={me} title={strings["projects-mypage-title"]} text={strings["projects-mypage-text"]} link="https://github.com/ygteker/my-page-new" linkText="GitHub" />
          <ProjectCard image={star} title={strings["projects-coffee-title"]} text={strings["projects-coffee-text"]} link="https://ygteker.github.io/coffee_shop_landing_page_clone/" linkText="demo" />
          <ProjectCard image={mag} title={strings["projects-magazine-title"]} text={strings["projects-magazine-text"]} link="https://ygteker.github.io/backstagetalksclone/" linkText="demo" />
          <ProjectCard title={strings["projects-others-title"]} text={strings["projects-others-text"]} link="" linkText="" />
        </div>
      </div>
    </div>
  )
}
