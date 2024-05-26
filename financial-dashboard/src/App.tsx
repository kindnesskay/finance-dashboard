import { useState } from "react";
import Analysis from "./components/Analysis.tsx";
import CardsContainer from "./components/CardsContainer.tsx";
import LeftSideBar from "./components/LeftSideBar.tsx";
import NavBar from "./components/NavBar.tsx";
import RighSideBar from "./components/RighSideBar.tsx";

export default function App() {
  const [open, setOpen] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [overlay, setOverLay] = useState(false);
  const handleOpen = () => {
    if (openProfile) return setOpen(false);
    setOpen(true);
    setOverLay(true);
  };

  function handleOpenProfile() {
    if (open) return setOpenProfile(false);
    setOpenProfile(true);
    setOverLay(true);
  }
  const handleClose = () => {
    setOpen(false);
    setOverLay(false);
  };
  const handleCloseProfile = () => {
    setOpenProfile(false);
    setOverLay(false);
  };
  return (
    <main className="bg-gray-950 w-full relative ">
      {overlay && (
        <div className="absolute max-lg:block hidden z-[5] top-0 left-0 w-full h-screen bg-slate-950 opacity-60 backdrop-blur"></div>
      )}

      <NavBar open={handleOpen} isOpen={open} openProfile={handleOpenProfile} />
      <section className="flex  relative">
        <LeftSideBar open={open} close={handleClose} />
        <section className="main-container  overflow-auto fake-h">
          <CardsContainer />
          <Analysis />
        </section>
        <RighSideBar isOpen={openProfile} close={handleCloseProfile} />
      </section>
    </main>
  );
}
