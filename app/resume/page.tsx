
import Navbar from "@/components/Navbar"
import ResumeEntry from "@/components/ResumeEntry"

export default function Resume() {
  return (
    <>
      <div className="bg-gray-100">
        <div className="relative h-full w-3/4 mx-auto bg-white p-4 pb-12 space-y-12">
          <Navbar />
          <p className="text-xl font-bold">Business</p>
          <ResumeEntry dates="since 2023" title="regiocom SE, Berlin" text="Sofware Engineer" />
          <ResumeEntry dates="2022 - 2023" title="VOQUZ Digital Experts GmbH, Ismaning" text="Sofware Engineer" />
          <ResumeEntry dates="2021 - 2022" title="amasol AG, Munich" text="IT Consultant" />
          <ResumeEntry dates="2018 - 2019" title="adabay GmbH, Munich" text="Junior Software Engineer" />
          <p className="text-xl font-bold">Education</p>
          <ResumeEntry dates="2021" title="University of Munich" text="Informatik und Statistik in BSc." />
          <ResumeEntry dates="2015" title="Istanbuler Gymnasium" text="Allgemeine Hochschulreife (Abitur)" />
          <p className="text-xl font-bold">Certifications</p>
          <ResumeEntry dates="2020" title="English in Computer Science and Information Technology at level C1.1 CEF" text="HTWK Leipzig" />
          <ResumeEntry dates="2019" title="Consultant for a Day Workshop" text="NTT Data, Munich" />
          <ResumeEntry dates="2019" title="LMU Entrepreneurship Certificate of Excellence" text="LMU Munich" />
        </div>
      </div>
    </>
  )
}
