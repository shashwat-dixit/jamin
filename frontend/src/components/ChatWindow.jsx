import MessageList from "./MessageList"


export default function ChatWindow() {
  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-4">Chat Interface</h1>
      <MessageList />
    </div>
  )
}
