import Image from "next/image";
import React from "react";
import UpdatesLogo from "@/assets/updates-logo.png";
import { Button } from "./ui/button";
import SiginInButton from "../app/(auth)/signin/_components/SiginInButton";
const TopNavBar = () => {
  return (
    <div className="w-full px-10 py-6 fixed top-0 left-0 z-40">
      <div className="flex items-center justify-between mx-auto max-w-7xl">
        <Image
          src={UpdatesLogo}
          alt="Updates Logo"
          className="aspect-square w-32"
        />
        <SiginInButton
          className={"w-fit"}
          text="Login"
          buttonVariant={"outline"}
        />
      </div>
    </div>
  );
};

export default TopNavBar;
