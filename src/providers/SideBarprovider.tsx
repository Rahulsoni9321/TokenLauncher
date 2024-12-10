"use client";

import { ReactNode, createContext, useContext, useState } from "react";

interface typeSidebarfunctionality {
  openleaderboard: () => void;
  openhomepage: () => void;
  opencreatetoken: () => void;
  leaderboard: boolean;
  homepage: boolean;
  createtoken: boolean;
  setalloff:()=>void;
  toggle:()=>void;
  expand:boolean
}
const Sidebarfunctionality = createContext<typeSidebarfunctionality>(
  {} as typeSidebarfunctionality
);

export const useSidebarContext = () => {
  return useContext(Sidebarfunctionality);
};

export const SidebarfunctionalityProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [leaderboard, setleaderboard] = useState(false);
  const [homepage, sethomepage] = useState(false);
  const [createtoken, setcreatetoken] = useState(false);
  const [expand,setexpand] = useState(false);
  

  const toggle = () =>{
    setexpand(!expand);
  }
  const openleaderboard = () => {
    setleaderboard(true);
    sethomepage(false);
    setcreatetoken(false);
  };
  const openhomepage = () => {
    setleaderboard(false);
    sethomepage(true);
    setcreatetoken(false);
  };
  const opencreatetoken = () => {
    setleaderboard(false);
    sethomepage(false);
    setcreatetoken(true);
  };

  const setalloff = () =>{
    setleaderboard(false),
    sethomepage(false),
    setcreatetoken(false)
  }
  return (
    <Sidebarfunctionality.Provider
      value={{
        opencreatetoken,
        openleaderboard,
        openhomepage,
        leaderboard,
        homepage,
        createtoken,
        setalloff,
        toggle,
        expand
      }}
    >
      {children}
    </Sidebarfunctionality.Provider>
  );
};
