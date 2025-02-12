import React from "react";

type createRoomModalProps = {
  onClose: () => void;
};

const CreateRoomModal = ({ onClose }: createRoomModalProps) => {
  return (
    // Overlay with black background and reduced opacity
    <div
      onClick={onClose}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    >
      {/* Modal container */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#1E272D] rounded-lg shadow-lg w-full max-w-md p-6"
      >
        <form>
          {/* First Section: Topic and Max People */}
          <div className="flex items-center justify-between mb-8">
            <div className="mb-4">
              <label
                htmlFor="topic"
                className="block text-sm font-medium text-gray-200 mb-1"
              >
                Topic
              </label>
              <input
                id="topic"
                type="text"
                placeholder="Enter topic"
                className="w-full  bg-[#4B5563] rounded px-3 py-1  focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="max-people"
                className="block text-sm font-medium text-gray-200 mb-1"
              >
                Max People
              </label>
              <select
                id="max-people"
                className="w-full  bg-[#4B5563]
               rounded py-[0.4rem] px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="unlimited">Unlimited</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
          </div>
          {/* Second Section: Language and Level */}
          <div className="grid gap-5 grid-cols-2 mb-5">
            <div className="mb-4">
              <label
                htmlFor="language"
                className="block text-sm font-medium text-gray-200 mb-1"
              >
                Language
              </label>
              <select
                id="language"
                className="w-full bg-[#4B5563]  rounded py-[0.4rem] px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
                <option value="zh">Chinese</option>
                <option value="jp">Japanese</option>
                {/* Add more languages as needed */}
              </select>
            </div>

            <div className="mb-4">
              <label
                htmlFor="level"
                className="block text-sm font-medium text-gray-200 mb-1"
              >
                Level
              </label>
              <select
                id="level"
                className="w-full bg-[#4B5563]  rounded py-[0.4rem] px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="upperintermediate">Upper Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-2">
            <button
              onClick={onClose}
              type="button"
              className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-medium px-4 py-2 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className=" btn hover:bg-blue-700 text-white font-medium px-4 py-2 rounded"
            >
              Create Group
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateRoomModal;
