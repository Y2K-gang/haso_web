import React from 'react';

interface ChatButtonProps {
  receiverId: string;
}

const ChatButton: React.FC<ChatButtonProps> = ({ receiverId }) => {

  const handleChat = () => {
  };

  return (
    <button onClick={handleChat}>채팅하기</button>
  );
};

export default ChatButton;
