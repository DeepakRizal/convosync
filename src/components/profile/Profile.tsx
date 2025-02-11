"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import SignIn from "../signIn/SignIn";
import { useState } from "react";
import UserMenu from "../userMenu/UserMenu";

const Profile = () => {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  function handleClick() {
    setUserMenuOpen(!userMenuOpen);
  }

  return (
    <div>
      {/* Check if session and session.user are available */}
      {session?.user?.image ? (
        <div
          onClick={handleClick}
          className="flex items-center gap-2 pr-2 border border-blue-500 rounded-3xl cursor-pointer "
        >
          <Image
            src={session.user.image}
            width={40}
            height={40}
            alt="User profile pic"
            className=" rounded-full"
          />
          <p>{session.user.name}</p>
          {userMenuOpen && session.user.name && session.user.email && (
            <UserMenu
              username={session.user.name}
              email={session.user.email}
              image={session.user.image}
            />
          )}
        </div>
      ) : (
        <SignIn /> // Or show a default image
      )}
    </div>
  );
};

export default Profile;
