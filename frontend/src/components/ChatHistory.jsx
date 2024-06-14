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
    <div className="fixed top-5 left-0 h-full flex flex-col">
      <ul className="menu menu-md bg-base-200 w-96 p-4 shadow-lg">
        {chatData.map((chat, index) => (
          <li key={index} className={`mb-2 ${chat.user === "ChatGPT" ? "text-left" : "text-right"}`}>
            <a className={`block p-3 rounded-lg ${chat.user === "ChatGPT" ? "bg-gray-300" : "bg-blue-500 text-white"}`}>
              {chat.message}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
