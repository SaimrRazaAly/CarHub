import React from "react";
import Image from "next/image";
import Link from "next/link";
import CustomBtn from "./CustomBtn";
const Navbar = () => {
  return (
    <header className="w-full  absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>

        <CustomBtn
          title="sigin"
          containerStyles="bg-white border border-black rounded-full px-[3rem] py-2 outline-none "
        />
      </nav>
    </header>
  );
};

export default Navbar;
