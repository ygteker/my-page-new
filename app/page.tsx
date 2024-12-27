import Navbar from "@/components/Navbar";
import HeaderAndText from "@/components/HeaderAndText";
import SocialButton from "@/components/SocialButton";
import linkedinImg from "@/assets/linkedin.png";
import githubImg from "@/assets/github.png";
import mailImg from "@/assets/mail.png";
import ImageWrapper from "@/components/imageWrapper";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="w-3/4 mx-auto bg-gray-100 p-4 rounded-lg shadow-md">
        <HeaderAndText title="Test" text="Test text" />
        <div className="flex mx-auto mt-4 space-x-4 w-fit">
          <SocialButton imagePath={linkedinImg} address="https://www.linkedin.com/in/gunesteker/" />
          <SocialButton imagePath={mailImg} address="mailto://gunes.teker@gmail.com" />
          <SocialButton imagePath={githubImg} address="https://www.github.com/ygteker/" />
        </div>
        <div className="flex flex-row space-x-8">
          <ImageWrapper image={linkedinImg} order={1} />
          <ImageWrapper image={mailImg} order={2} />
          <ImageWrapper image={githubImg} order={3} />
        </div>
      </div>
    </>
  );
}
