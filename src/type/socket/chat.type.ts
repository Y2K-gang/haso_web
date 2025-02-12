type ClientSocket = ReturnType<typeof io>;

export interface CustomEventsProps {
  message: (content: { text: string; sender: string }) => void;
}

export interface SocketStoreProps {
  socket: ReturnType<typeof io> | null;
  connect: (url: string) => void;
  disconnect: () => void;
}
