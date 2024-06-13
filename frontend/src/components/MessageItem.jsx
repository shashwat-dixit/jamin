
const MessageItem = ({ message }) => {
  const { text, sender, timestamp } = message;
  const isUser = sender === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-2`}>
      <div className={`max-w-xs p-2 rounded-lg ${isUser ? 'bg-blue-200' : 'bg-gray-200'}`}>
        <span className="block">{text}</span>
        <span className="text-xs text-gray-500 mt-1 block">{new Date(timestamp).toLocaleTimeString()}</span>
      </div>
    </div>
  );
};

export default MessageItem;
