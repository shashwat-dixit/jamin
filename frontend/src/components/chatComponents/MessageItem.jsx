import { motion } from 'framer-motion';

const MessageItem = ({ messages, currentUser }) => {
  return (
    <>
      {messages.map((message, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className={`mb-4 ${message.sender === currentUser ? 'text-right' : 'text-left'}`}
        >
          <div className="inline-block max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
            <div className="mb-1">
              <span className="font-semibold text-sm">{message.sender}</span>
              <time className="ml-2 text-xs text-gray-400">{message.time}</time>
            </div>
            <div className={`p-3 rounded-lg ${message.sender === currentUser ? 'bg-blue-600' : 'bg-gray-700'}`}>
              <p className="text-sm">{message.content}</p>
            </div>
            <div className="text-xs text-gray-400 mt-1">{message.status}</div>
          </div>
        </motion.div>
      ))}
    </>
  );
};

export default MessageItem;