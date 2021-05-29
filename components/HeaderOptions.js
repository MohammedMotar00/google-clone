import HeaderOption from "./HeaderOption";
import {
  DotsVerticalIcon,
  ShoppingBagIcon,
  NewspaperIcon,
  PhotographIcon,
  PlayIcon,
  SearchIcon,
} from "@heroicons/react/outline";

function HeaderOptions() {
  return (
    <div className="flex w-full text-gray-700 justify-evenly text-sm minLg:text-base minLg:justify-start minLg:space-x-36 minLg:pl-52 border-b">
      {/* Left */}
      <div className="flex space-x-6">
        <HeaderOption Icon={SearchIcon} title="Allt" selected />
        <HeaderOption Icon={PhotographIcon} title="Bilder" />
        <HeaderOption Icon={PlayIcon} title="Videor" />
        <HeaderOption Icon={ShoppingBagIcon} title="Shopping" />
        <HeaderOption Icon={NewspaperIcon} title="Nyheter" />
        <HeaderOption Icon={DotsVerticalIcon} title="Fler" />
      </div>

      {/* Right */}
      <div className="flex space-x-4">
        <p className="link">Inställningar</p>
        <p className="link">Verktyg</p>
      </div>
    </div>
  );
}

export default HeaderOptions;
