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
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white p-4">
      <motion.div 
        className="w-full max-w-2xl bg-gray-800 rounded-lg shadow-lg p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Message List</h2>
        <MessageItem messages={messages} currentUser={currentUser} />
      </motion.div>
    </div>
  );
};

export default MessageList;