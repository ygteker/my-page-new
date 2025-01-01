
import { CategoryEntry } from "@/types/CategoryEntry"

interface UsesEntryProps {
  title: string,
  uses: CategoryEntry[]
}

const UsesEntry = (props: UsesEntryProps) => {
  return (
    <>
      <p>{props.title}</p>
      <ul>
        {props.uses.map(use => {
          return (
            <>
              <li>
                {use.title}
              </li>
              <li>
                {use.text}
              </li>
            </>
          )
        })}
      </ul>
    </>
  )
}

export default UsesEntry;
