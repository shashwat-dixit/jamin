import React from 'react';

export default function ChatHistory() {
  const chatData = [
    { user: "User", message: "Hello, how are you?" },
    { user: "ChatGPT", message: "I'm good, thank you! How can I help you today?" },
    { user: "User", message: "Can you tell me a joke?" },
    { user: "ChatGPT", message: "Sure! Why don't scientists trust atoms? Because they make up everything!" },
    { user: "User", message: "Hello, how are you?" },
    { user: "ChatGPT", message: "I'm good, thank you! How can I help you today?" },
    { user: "User", message: "Can you tell me a joke?" },
    { user: "ChatGPT", message: "Sure! Why don't scientists trust atoms? Because they make up everything!" },
    { user: "User", message: "Hello, how are you?" },
    { user: "ChatGPT", message: "I'm good, thank you! How can I help you today?" },
    { user: "User", message: "Can you tell me a joke?" },
    { user: "ChatGPT", message: "Sure! Why don't scientists trust atoms? Because they make up everything!" },
  ];

  return (
    <div className="fixed top-14 left-0 h-4/5 flex flex-col overflow-auto">
      <ul className="menu menu-md p-4 shadow-lg overflow-auto">
        {chatData.map((chat, index) => (
          <li key={index} className={`mb-2 ${chat.user === "ChatGPT" ? "text-left" : "text-right"}`}>
            <a className={`block p-3 rounded-lg overflow-hidden text-ellipsis whitespace-nowrap ${chat.user === "ChatGPT" ? "bg-gray-300" : "bg-blue-500 text-white"}`}>
              {chat.message}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
