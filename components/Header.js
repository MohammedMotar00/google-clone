import { SmallGoogleCloneLogo } from "./GoogleCloneLogo";
import { useRouter } from "next/router";
import { useRef } from "react";
import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

function Header() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();

    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <div
          className="inline-flex p-3 cursor-pointer"
          onClick={() => router.push("/")}
        >
          <SmallGoogleCloneLogo />
        </div>

        <form className="flex flex-grow border px-6 py-3 ml-10 mr-5 border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
          <input
            type="text"
            ref={searchInputRef}
            className="flex-grow w-full focus:outline-none"
            defaultValue={router.query.term}
          />
          <XIcon
            className="h-7 minSm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
            onClick={() => (searchInputRef.current.value = "")}
          />

          <MicrophoneIcon className="mr-3 h-6 hidden minSm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />

          <SearchIcon className="h-6 text-blue-500 hidden minSm:inline-flex" />
          <button hidden type="submit" onClick={search}>
            Sök
          </button>
        </form>
        <Avatar
          className="ml-auto"
          url="https://lh3.googleusercontent.com/-6ES5Dw2fsoY/YKa4g9tcDDI/AAAAAAAAAAg/YBgCaHz-_Ior3KC_lXDU0i2getbmAXoQQCEwYBhgLKtMDAL1OcqzF1vfmHGBleiPM5hXJ8iMNEEQDGhYrPKYmKm7FAwuq7sA3fG2fpqIsN-FQdDlWG3SLCeUdHmr1YQ7WOOXv-TGDkKgxInV6RvyaUL_AGi4jChElBbmYo-8kU4ffO3ctDJXO3KHeNMVfcyAymL85ALwBXyVFvFSXog7QadoAEHM2wGYbgfZJtXQaGAH5D4uMKuIVzYv7vG_bsfQhlermfhJjE95HmusHatWhYFRmVP0Us0q_kMpzjSiksKa4tP3lku1GQOjD2wjhe8oWwV1mMOPWfY59ErzwYmjm1Rv1vJbycKbbDvPYOIB6aTTYZxJGZmej7QVXN2grMpoMaC6MAacKiSHrtKyiI6ZdOOPdAnFohwHRSB9cjgSGNZYU100CZjNGiZUlXb9Y-53X6POCFAXR5ZKxXasBueVdpfZJfcu_PYbv-n6yUfRbUbjhY72E1oF_agYPOHHk2khpdrkGKImXIMJbNLPcDLeGR5CUilf4qwY2qxWkjPkL_-BbIdMe2kxQ57sDi5bUpVPyFKAY7KDqJhncALNzC6kckMj-HUNs8q3_KBThgl6bHlRe9Rxqh6_JiydLbduMQNF1PupUb8mHEHC77PWnj7Y0e2ITjWkw7Ke0hQY/w139-h140-p/117697176_625128418437238_1764737668208809646_n.jpg"
        />
      </div>

      {/* HeaderOptions */}
      <HeaderOptions />
    </header>
  );
}

export default Header;
