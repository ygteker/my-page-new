
interface ResumeEntryProps {
  dates: string,
  title: string,
  text: string
}

const ResumeEntry = (props: ResumeEntryProps) => {
  return (
    <div className="border-l-4 border-blue-500 pl-4 mb-6">
      <p className="text-sm text-gray-500">{props.dates}</p>
      <p className="text-lg font-semibold text-gray-800 mt-1">{props.title}</p>
      <p className="text-gray-600 mt-2 leading-relaxed">{props.text}</p>
    </div>
  )
}

export default ResumeEntry;
