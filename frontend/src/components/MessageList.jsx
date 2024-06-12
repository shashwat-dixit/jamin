// src/components/MessageList.js

import MessageItem from './MessageItem';

const placeholderMessages = [
  { text: 'Hello! How can I assist you today?', sender: 'bot', timestamp: Date.now() - 10000 },
  { text: 'I need some information about your services.', sender: 'user', timestamp: Date.now() - 5000 },
  { text: 'Sure, I can help with that! What specific information are you looking for?', sender: 'bot', timestamp: Date.now() }
];

const MessageList = () => {
  return (
    <div className="flex flex-col p-4 overflow-y-auto max-h-96 border border-gray-300 rounded-lg bg-gray-50">
      {placeholderMessages.map((message, index) => (
        <MessageItem key={index} message={message} />
      ))}
    </div>
  );
};

export default MessageList;
