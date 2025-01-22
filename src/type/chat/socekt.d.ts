export interface Message {
  id: string;
  content: string;
  sender: string;
  timestamp: string;
}

export interface SocketProps {
  socket: WebSocket | null;
  messages: Message[];
  connect: (url: string) => void;
  disconnect: () => void;
  sendMessage: (message: string, sender: string) => void;
  receiveMessage: (callback: (message: Message) => void) => void;
}
