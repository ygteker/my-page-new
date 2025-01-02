
import Navbar from "@/components/Navbar";
import UsesEntry from "@/components/UsesEntry";
import { CategoryEntry } from "@/types/CategoryEntry";
import strings from "@/strings.json";

export default function Uses() {
  const workstationEntries: CategoryEntry[] = [
    { title: strings["uses-workstation-laptop-title"], text: strings["uses-workstation-laptop-text"] },
    { title: strings["uses-workstation-monitor-title"], text: strings["uses-workstation-monitor-text"] },
    { title: strings["uses-workstation-keyboard-title"], text: strings["uses-workstation-keyboard-text"] },
    { title: strings["uses-workstation-mouse-title"], text: strings["uses-workstation-mouse-text"] },
  ];
  const devtoolsEntries: CategoryEntry[] = [
    { title: strings["uses-devtools-editor-title"], text: strings["uses-devtools-editor-text"] },
    { title: strings["uses-devtools-terminal-title"], text: strings["uses-devtools-terminal-text"] },
    { title: strings["uses-devtools-ide-title"], text: strings["uses-devtools-ide-text"] },
  ];
  const designEntries: CategoryEntry[] = [
    { title: strings["uses-design-figma-title"], text: strings["uses-design-figma-text"] },
  ];
  const productivityEntries: CategoryEntry[] = [
    { title: strings["uses-productivity-alfred-title"], text: strings["uses-productivity-alfred-text"] },
    { title: strings["uses-productivity-forest-title"], text: strings["uses-productivity-forest-text"] },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="relative h-full w-3/4 mx-auto bg-white p-8 space-y-12">
        <Navbar />
        <UsesEntry title={strings["uses-workstation"]} uses={workstationEntries} />
        <UsesEntry title={strings["uses-devtools"]} uses={devtoolsEntries} />
        <UsesEntry title={strings["uses-design"]} uses={designEntries} />
        <UsesEntry title={strings["uses-productivity"]} uses={productivityEntries} />
      </div>
    </div>);
}
