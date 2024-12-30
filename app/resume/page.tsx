
import Navbar from "@/components/Navbar"
import ResumeEntry from "@/components/ResumeEntry"

export default function Resume() {
  return (
    <>
      <div className="bg-gray-100">
        <div className="relative h-full w-3/4 mx-auto bg-white p-4 pb-12 space-y-12">
          <Navbar />
          <p className="text-xl font-bold">Business</p>
          <ResumeEntry dates="Since Ocotber 2023" title="regiocom SE, Berlin" text="Sofware Engineer" />
          <ResumeEntry dates="October 2022 - September 2023" title="VOQUZ Digital Experts GmbH, Ismaning" text="Sofware Engineer" />
          <ResumeEntry dates="March 2021 - Febraury 2022" title="amasol AG, Munich" text="IT Consultant" />
          <ResumeEntry dates="May 2018 - April 2019" title="adabay GmbH, Munich" text="Junior Software Engineer" />
          <p className="text-xl font-bold">Education</p>
          <ResumeEntry dates="2021" title="University of Munich" text="Informatik und Statistik in BSc." />
          <ResumeEntry dates="2015" title="Istanbuler Gymnasium" text="Allgemeine Hochschulreife (Abitur)" />
        </div>
      </div>
    </>
  )
}
