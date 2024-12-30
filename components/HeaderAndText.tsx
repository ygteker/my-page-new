import strings from '@/strings.json';
interface HeaderAndTextProps {
  title: string,
  text: string,
}
const HeaderAndText = (props: HeaderAndTextProps) => {
  return (
    <div className="py-16 px-8">
      <p className="text-4xl font-extrabold text-gray-800 mb-6 text-left">{props.title}</p>
      <p className="text-lg text-gray-600 leading-relaxed text-left">{props.text}</p>
    </div>
  )
}

export default HeaderAndText;
