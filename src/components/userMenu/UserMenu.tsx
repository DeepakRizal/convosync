"use client";

import Image from "next/image";
import { signOut } from "next-auth/react";

type userMenuProps = {
  username: string;
  email: string;
  image: string;
};

const UserMenu = ({ username, email, image }: userMenuProps) => {
  return (
    <div className="bg-gray-600 p-5 rounded-md absolute top-16 right-44 flex flex-col justify-center text-[10px] gap-3 shadow-lg">
      <Image
        src={image}
        width={40}
        height={40}
        alt="user image"
        className="rounded-full inline-block "
      />
      <p>Name: {username}</p>
      <p>Email: {email}</p>
      <button
        onClick={() => signOut()}
        className="bg-slate-800 flex-none px-2 py-2 rounded-md"
      >
        logout
      </button>
    </div>
  );
};

export default UserMenu;
