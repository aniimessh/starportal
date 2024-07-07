"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/intract_text.svg";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import FeedIcon from "../../public/broadcast_or-04af786c.svg";

const Navbar = () => {
  const [active, setActive] = useState("Academy");

  return (
    <div className="w-full border-b-[#ffffff34] border-b fixed bg-black py-3 z-10">
      <div className="flex w-5/6 mx-auto items-center justify-between">
        <div className="flex items-center gap-x-6">
          <Image src={Logo} height={100} width={100} alt="logo" />
          <nav className="flex gap-x-6 flex-1 text-white">
            <Link href={""} className="opacity-80 hover:opacity-100">
              Compass
            </Link>
            <Link href={""} className="opacity-80 hover:opacity-100">
              Explore
            </Link>
            <Link
              href={""}
              className={`${active ? "text-white opacity-100 relative" : ""}`}
            >
              Academy{" "}
              <span className="bg-violet-800 rounded-lg text-xs px-1.5 py-1">
                New
              </span>
              <div className="h-1 w-full bg-white absolute -bottom-5 rounded-md"></div>
            </Link>
            <Link href={""} className="opacity-80 hover:opacity-100">
              NFTs
            </Link>
            <Link href={""} className="opacity-80 hover:opacity-100">
              For Projects
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-x-3 justify-end">
          <div className="relative">
            <IoSearchOutline
              className="absolute top-1/2 -translate-y-1/2 left-2 opacity-40 text-gray-600"
              fontSize="24"
            />
            <input
              type="text"
              placeholder="Search for ecosystem, trending quests etc.."
              className="w-full py-2 pl-10 pr-3 bg-[rgba(255,255,255,0.07)] rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:opacity-40"
            />
          </div>
          <div className="bg-[rgba(255,255,255,0.07)] p-2 rounded-full border border-[#9D591B]">
            <Image src={FeedIcon} height={20} width={20} alt="icon"></Image>
          </div>
          <button className="bg-white text-black rounded-sm px-4 py-1">
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
