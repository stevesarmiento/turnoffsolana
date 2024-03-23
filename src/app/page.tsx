//import ButtonSkeu from "./components/ButtonSkeu";
//import { Pause, Play, Square } from "lucide-react";

import Navvy from "./components/Navvy";
import OnOffToggle from "./components/OnOffToggle";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-[#151724]">
      <Navvy />
      <div className="p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between lg:flex">
          <div className="mx-auto bg-[#202739] border-[1px] border-white/10 p-6 rounded-[20px] inline-flex space-x-6 rotate-90">
            <OnOffToggle />
          </div>
        </div>
      </div>
    </main>
  );
}
