"use client";
import { IoAdd } from "react-icons/io5";

type CreateRoomButtonProps = {
  onClick: () => void;
};

const CreateRoomButton = ({ onClick }: CreateRoomButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="btn  py-2 flex items-center justify-center gap-1 px-5 rounded-md"
    >
      <IoAdd />
      <span>Create a new group</span>
    </button>
  );
};

export default CreateRoomButton;
