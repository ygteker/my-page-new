import Navbar from "@/components/Navbar";
import HeaderAndText from "@/components/HeaderAndText";
import SocialButton from "@/components/SocialButton";
import img1 from "@/assets/p1.jpg";
import img2 from "@/assets/my_img1.png";
import img3 from "@/assets/p4.jpg";
import img4 from "@/assets/my_img2.png";
import img5 from "@/assets/my_img3.png";
import linkedinImg from "@/assets/linkedin.png";
import githubImg from "@/assets/github.png";
import ImageWrapper from "@/components/imageWrapper";
import strings from "@/strings.json";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <div className="relative h-screen w-3/4 mx-auto bg-white p-8 space-y-12">
        <Navbar />
        <HeaderAndText title={strings['main-title']} text={strings['main-content']} />
        <div className="flex mx-auto space-x-4 w-fit">
          <SocialButton imagePath={linkedinImg} address="https://www.linkedin.com/in/gunesteker/" />
          <SocialButton imagePath={githubImg} address="https://www.github.com/ygteker/" />
        </div>
        <div className="absolute left-0 flex flex-row justify-between">
          <ImageWrapper image={img1} order={1} />
          <ImageWrapper image={img2} order={2} />
          <ImageWrapper image={img3} order={3} />
          <ImageWrapper image={img4} order={4} />
          <ImageWrapper image={img5} order={5} />
        </div>
      </div>
    </div>
  );
}
