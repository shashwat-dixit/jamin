import React from 'react';
import MessageList from "../components/chatComponents/MessageList";
import ChatHistory from "../components/chatComponents/ChatHistory";
import InputBox from "../components/chatComponents/InputBox";

export default function ChatWindow() {
  return (
    <div className="flex h-screen overflow-hidden min-w-full bg-gradient-to-br from-gray-900 to-indigo-900 text-white">
      <ChatHistory />
      <div className="flex flex-col flex-grow">
        <div className="flex-grow overflow-y-auto p-4">
          <MessageList />
        </div>
      </div>
      <InputBox />
    </div>
  );
}