import { MouseEventHandler } from "react";
import profile_data from "../constants/profile_data";
import ProfileButton from "./ProfileButton";
import SearchField from "./SearchField";
interface NavBar {
  open: MouseEventHandler;
  isOpen: boolean;
  openProfile: MouseEventHandler;
}
export default function NavBar({ open, isOpen, openProfile }: NavBar) {
  return (
    <nav className="w-full h-20 bg-slate-900 flex items-center justify-center glass">
      <div className="flex justify-between w-full max-w-4xl px-4 items-center py-4">
        <div className="max-lg:hidden">
          <SearchField />
        </div>

        <button
          className="text-white  h-12 w-12 max-lg:block hidden"
          onClick={open}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={`${isOpen ? "hidden" : "block"}`}
          >
            <path
              fillRule="evenodd"
              d="M3 9a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9Zm0 6.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <button className="text-white text-2xl font-bold">Dashboard</button>
        <div onClick={openProfile}>
          <ProfileButton profileData={profile_data} />
        </div>
      </div>
    </nav>
  );
}
