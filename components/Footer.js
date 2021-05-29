import { GlobeIcon } from "@heroicons/react/solid";

function Footer() {
  return (
    <footer className="grid w-full divide-y-[1px] divide-gray-300 bg-gray-100 text-sm text-gray-500">
      <div className="px-8 py-3">
        <p>Sverige</p>
      </div>

      <div className="grid grid-cols-1 minMd:grid-cols-2 minLg:grid-cols-3 gap-y-4 grid-flow-row-dense px-8 py-3">
        <div className="flex justify-center items-center minMd:col-span-2 minLg:col-span-1 minLg:col-start-2">
          <GlobeIcon className="h-5 mr-1 text-green-700" />
          Koldioxidneutralt sedan 2007
        </div>

        <div className="flex justify-center space-x-8 whitespace-nowrap minMd:justify-self-start">
          <p>Om</p>
          <p>Annonsering</p>
          <p>Företagslösningar</p>
          <p>Så fungerar Sök</p>
        </div>
        <div className="flex justify-center space-x-8 minMd:ml-auto">
          <p>Sekretess</p>
          <p>Villkor</p>
          <p>Inställningar</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
