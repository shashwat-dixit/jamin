import React from 'react';
import MessageList from "./MessageList";
import ChatHistory from "./ChatHistory";
import ChooseModel from "./ChooseModel";
import DataInput from "./DataInput";
import InputBox from "./InputBox";

export default function ChatWindow() {
  return (
    <div className="flex h-screen min-w-full bg-gray-900 text-white">
      {/* Sidebar */}
      <div className="w-64 border-r border-gray-700">
        <ChatHistory />
      </div>

      {/* Main chat area */}
      <div className="flex flex-col flex-grow">
        {/* Message list */}
        <div className="flex-grow overflow-y-auto p-4">
          <MessageList />
        </div>

        {/* Input area */}
        <div className="p-4 border-t border-gray-700">
          <InputBox />
          <div className="flex justify-between mt-2">
            <ChooseModel />
            <DataInput />
          </div>
        </div>
      </div>
    </div>
  );
}