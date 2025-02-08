import Image from "next/image";

export default function Home() {
  return (
    <section>
      <nav className="flex justify-between px-10 py-5">
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
      </nav>
    </section>
  );
}
