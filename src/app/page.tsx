import Image from "next/image";

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
            <button className="btn px-10 py-1 rounded-md">Sign in</button>
          </div>
        </div>
        <h1 className=" text-center px-20 text-3xl">Convosync Community</h1>
      </header>
      <main className="max-w-[1200px] mx-auto">
        <div
          className="flex gap-5 mt-5
        "
        >
          <button className="btn px-3 py-2 flex items-center gap-5 rounded-md">
            <svg
              viewBox="64 64 896 896"
              focusable="false"
              data-icon="plus"
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"></path>
              <path d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"></path>
            </svg>
            <span>Create a new group</span>
          </button>
          <input
            className="bg-[#1E272D] rounded-md px-5 flex-1 "
            placeholder="search room, people or tags eg, public, private friends, room name, username,"
            type="text"
          />
        </div>
      </main>
    </section>
  );
}
