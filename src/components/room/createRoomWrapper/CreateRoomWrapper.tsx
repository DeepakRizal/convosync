"use client";

import { useState } from "react";
import CreateRoomButton from "../createRoomButton/CreateRoomButton";
import CreateRoomModal from "../createRoomModal/CreateRoomModal";

const CreateRoomWrapper = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <>
      <CreateRoomButton onClick={() => setIsModalVisible(true)} />
      {isModalVisible && (
        <CreateRoomModal onClose={() => setIsModalVisible(false)} />
      )}
    </>
  );
};

export default CreateRoomWrapper;
