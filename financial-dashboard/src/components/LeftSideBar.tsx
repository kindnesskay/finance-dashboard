import ButtonLink from "./ButtonLink";
import DeatailsCard from "./cards/DetailsCard.tsx";
import menu_links from "../constants/menu_links.ts";
import { MouseEventHandler } from "react";
import SearchField from "./SearchField.tsx";

interface LeftSideBar {
  open: boolean;
  close: MouseEventHandler;
}
export default function LeftSideBar({ open, close }: LeftSideBar) {
  return (
    <div
      className={`left-sidebar transition-transform max-lg:fixed fake-h overflow-auto ${
        open ? "left-0 " : "max-lg:-translate-x-full"
      }`}
    >
      <div className="flex items-center font-semibold text-2xl justify-between py-2 h-16  w-full mb-4">
        My Money
        <button className="h-12 w-12 max-lg:block hidden" onClick={close}>
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
      </div>
      <div className="flex flex-col gap-2">
        <div className="hidden max-lg:block">
          <SearchField />
        </div>
        {menu_links.map((link, index) => {
          return <ButtonLink buttonData={link} key={index} />;
        })}
      </div>
      <DeatailsCard />
    </div>
  );
}
