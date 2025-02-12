import { create } from "zustand";
import io from "socket.io-client";
import { SOCKET_EVENTS } from "@/constants/socket/socket";
import { CustomEventsProps, SocketStoreProps } from "@/type/socket/chat.type";

const useSocketStore = create<SocketStoreProps>((set) => ({
  socket: null,

  connect: (url: string) => {
    const socket = io(url);
    set({ socket });

    socket.on(SOCKET_EVENTS.CONNECT, () => {
      console.log("Socket connected:", socket.id);
    });

    socket.on(SOCKET_EVENTS.DISCONNECT, () => {
      console.log("Socket disconnected");
    });

    socket.on(SOCKET_EVENTS.MESSAGE, (content: Parameters<CustomEventsProps["message"]>[0]) => {
      console.log("Received message:", content.text, "from", content.sender);
    });
  },

  disconnect: () => {
    set((state) => {
      state.socket?.disconnect();
      return { socket: null };
    });
  },
}));

export default useSocketStore;
