import { MouseEventHandler } from "react";
import profile_data from "../constants/profile_data";
import ProfileQuickAction from "./ProfileQuickAction";
import Transactions from "./Transactions";
import ProfileCard from "./cards/ProfileCard";
interface RighSideBar {
  isOpen: boolean;
  close: MouseEventHandler;
}
export default function RighSideBar({ isOpen, close }: RighSideBar) {
  return (
    <div
      className={`right-sidebar transition-all max-xl:fixed fake-h overflow-auto ${
        isOpen ? "right-0" : " -right-[100%]"
      }`}
    >
      <p className="text-2xl font-semibold text-white">Profile</p>
      <div className=" flex flex-col gap-2 ">
        <button
          className="h-12 w-12 max-xl:block hidden absolute right-4 top-2"
          onClick={close}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <ProfileCard profileData={profile_data} />
        <ProfileQuickAction />
        <Transactions />
      </div>
    </div>
  );
}
