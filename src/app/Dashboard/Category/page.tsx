import Image from "next/image";
import CategoryImage from "./CategoryImage/page";

export default function Category() {
  return (
    <div className=" w-full bg-gray-200 text-black justify-center  grid grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 place-items-center gap-2 p-2 ">
      <CategoryImage />
      <CategoryImage />
      <CategoryImage />
      <CategoryImage />
    </div>
  );
}