"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { TbShoppingCart } from "react-icons/tb";
import { IoNotificationsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import Logo from "../Logo/page";
import SearchInput from "../SearchInput/page";

export default function Header() {
  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    router.push("CartList");
  };

  return (
    <div className=" w-full flex justify-between items-center p-5 bg-red-300">
      <Logo />
      <SearchInput />

      <div className="flex justify-center ">
        <a
          href="#"
          className="border-2 border-white rounded-full lg:px-5 xl:px-5 p-4 mx-2 bg-white static"
          onClick={handleSubmit}
        >
          <TbShoppingCart  />
        </a>
        <span className=" flex rounded-full bg-green-400 align-top ms-12 px-2 absolute">
          10
        </span>
      </div>
    </div>
  );
}
