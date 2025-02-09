import SignIn from "@/components/signIn/SignIn";
import Image from "next/image";
import { IoIosSearch } from "react-icons/io";
import { IoAdd } from "react-icons/io5";

export default function Home() {
  return (
    <section className=" w-full">
      <header className=" max-w-[1200px]  mx-auto">
        <div className="flex justify-between py-5 items-center ">
          <div className="logo flex items-center gap-1 justify-center">
            <Image
              src="/convosync-logo.webp"
              alt="ConvoSync Logo"
              width={40}
              height={10}
              className="rounded-full"
            />
            <h2 className=" font-semibold ">convosync</h2>
          </div>

          <div className="">
            <SignIn />
          </div>
        </div>
        <h1 className=" text-center px-20 text-3xl">Convosync Community</h1>
      </header>
      <main className="max-w-[1200px] mx-auto">
        <div
          className="flex gap-5 mt-16
        "
        >
          <button className="btn px-3 py-2 flex items-center gap-5 rounded-md">
            <IoAdd />
            <span>Create a new group</span>
          </button>
          <div className="flex-1 flex">
            <input
              className="bg-[#1E272D] rounded-l-md px-5 flex-1 outline-none border border-blue-500 "
              placeholder="search room, people or tags eg, public, private friends, room name, username"
              type="text"
            />
            <button className=" rounded-r-md btn-search px-2 border border-blue-500 flex items-center gap-2">
              <IoIosSearch />
              <span>Search</span>
            </button>
          </div>
        </div>
      </main>
    </section>
  );
}
