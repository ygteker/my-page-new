import strings from '@/strings.json';
interface HeaderAndTextProps {
  title: string,
  text: string,
}
const HeaderAndText = (props: HeaderAndTextProps) => {
  return (
    <>
      <p className="text-4xl text-black mb-4">{strings['main-title']}</p>
      <p>{strings['main-content']}</p>
    </>
  )
}

export default HeaderAndText;
