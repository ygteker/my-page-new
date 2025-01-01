
import Navbar from "@/components/Navbar";
import UsesEntry from "@/components/UsesEntry";
import { CategoryEntry } from "@/types/CategoryEntry";

export default function Uses() {
  const entries: CategoryEntry[] = [
    { title: "Title", text: "Text" },
    { title: "Title2", text: "Text2" }
  ]
  return (
    <div className="bg-gray-100">
      <div className="relative h-full w-3/4 mx-auto bg-white p-4 pb-12 space-y-12">
        <Navbar />
        <div>
          <UsesEntry title="Main Title" uses={entries} />
        </div>
        <div>
          <UsesEntry title="Main Title" uses={entries} />
        </div>
      </div>
    </div>
  )
}
