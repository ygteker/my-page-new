
import { CategoryEntry } from "@/types/CategoryEntry"

interface UsesEntryProps {
  title: string,
  uses: CategoryEntry[]
}

const UsesEntry = (props: UsesEntryProps) => {
  return (
    <div className="w-full max-w-5xl mx-auto my-12">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/4 pr-4 mb-6 md:mb-0">
          <h2 className="text-xl font-bold">
            {props.title}
          </h2>
        </div>
        <div className="md:w-3/4 space-y-8">
          {props.uses.map((use, index) => (
            <div
              key={index}
              className="border-t border-gray-300 pt-6">
              <h3 className="text-md font-semibold mb-2">
                {use.title}
              </h3>
              <p className="text-base leading-relaxed">
                {use.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>)
}

export default UsesEntry;
