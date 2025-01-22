import create from 'zustand';
import { SocketProps, Message } from '@/type/chat/socekt';

export const useSocketStore = create<SocketProps>((set) => ({
  socket: null,
  messages: [],
  connect: (url) => {
    const socket = new WebSocket(url);

    socket.onopen = () => console.log("Connected to WebSocket");

    socket.onmessage = (event) => {
      const message: Message = JSON.parse(event.data);
      set((state) => ({
        messages: [...state.messages, message],
      }));
    };

    socket.onclose = () => console.log("Disconnected from WebSocket");

    set({ socket });
  },
  disconnect: () => set({ socket: null, messages: [] }),
  sendMessage: (message, sender) => {
    set((state) => {
      if (state.socket && state.socket.readyState === WebSocket.OPEN) {
        const newMessage: Message = {
          id: `${Date.now()}`,
          content: message,
          sender,
          timestamp: new Date().toISOString(),
        };
        state.socket.send(JSON.stringify(newMessage));
        return { messages: [...state.messages, newMessage] };
      }
      return state;
    });
  },
  receiveMessage: (callback) => {
    set((state) => {
      if (state.socket && state.socket.readyState === WebSocket.OPEN) {
        state.socket.onmessage = (event) => {
          const message: Message = JSON.parse(event.data);
          callback(message);
        };
      }
      return state;
    });
  },
}));
