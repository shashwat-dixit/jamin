

const MessageItem = ({ messages, currentUser }) => {
  return (
    <>
      {messages.map((message, index) => (
        <div key={index} className={`chat ${message.sender === currentUser ? 'chat-end' : 'chat-start'}`}>
          <div className="chat-header">
            {message.sender}
            <time className="ml-2 text-xs opacity-50">{message.time}</time>
          </div>
          <div className="chat-bubble max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl text-left">
            {message.content}
          </div>
          <div className="chat-footer opacity-50">
            {message.status}
          </div>
        </div>
      ))}
    </>
  );
};

export default MessageItem;
