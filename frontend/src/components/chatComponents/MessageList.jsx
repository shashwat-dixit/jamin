import { motion } from 'framer-motion';
import MessageItem from './MessageItem';

const MessageList = () => {
  const messages = [
    {
      sender: 'Llama 3',
      time: '2 hours ago',
      content: 'You were the Chosen One! It was said that you would destroy the Sith, not join them. Bring balance to the Force, not leave it in darkness.',
      status: 'Seen'
    },
    {
      sender: 'ChatGPT',
      time: '2 hours ago',
      content: 'I loved you, Anakin. You were my brother. I trusted you with my life. You were meant to bring peace and prosperity to the galaxy.',
      status: 'Delivered'
    },
    {
      sender: 'Anakin Skywalker',
      time: '1 hour ago',
      content: 'I hate you! You were supposed to help me save Padmé. Now, because of you, she is gone, and I am left with nothing but pain and suffering.',
      status: 'Seen'
    },
  ];
  const currentUser = 'Anakin Skywalker';

  return (
    <div className="mt-20 w-full flex justify-center items-center text-gray-200 p-4">
      <motion.div
        className="w-full max-w-4xl h-[calc(100vh-2rem)] bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-lg shadow-lg p-6 border border-gray-700 overflow-y-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <MessageItem messages={messages} currentUser={currentUser} />
      </motion.div>
    </div>
  );
};

export default MessageList;