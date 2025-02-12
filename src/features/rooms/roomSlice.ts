import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type User = {
  id: string;
  name: string;
  avatar: string;
};

type Room = {
  id: string;
  topic: string;
  language: string;
  maxPeople: number;
  participants: User[];
};

type RoomState = {
  rooms: Room[];
};

const initialState: RoomState = {
  rooms: [],
};

const roomSlice = createSlice({
  name: "rooms",
  initialState,
  reducers: {
    createRoom: (
      state,
      action: PayloadAction<{
        topic: string;
        maxPeople: number;
        language: string;
      }>
    ) => {
      const newRoom: Room = {
        id: Date.now().toString(),
        topic: action.payload.topic,
        maxPeople: action.payload.maxPeople,
        language: action.payload.language,
        participants: [],
      };
      state.rooms.push(newRoom);
    },

    joinRoom: (
      state,
      action: PayloadAction<{ roomId: string; user: User }>
    ) => {
      const room = state.rooms.find((r) => r.id === action.payload.roomId);
      if (room && room.participants.length < room.maxPeople) {
        room.participants.push(action.payload.user);
      }
    },
  },
});

export const { createRoom } = roomSlice.actions;
export default roomSlice.reducer;
