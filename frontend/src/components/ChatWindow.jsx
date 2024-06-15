import MessageList from "./MessageList"
import ChatHistory from "./ChatHistory" 
import ChooseModel from "./ChooseModel"
import DataInput from "./DataInput" 
import InputBox from "./InputBox"


export default function ChatWindow() {
  return (
    <div>
      <ChatHistory />
      <MessageList />
      <InputBox />
      <ChooseModel />
      <DataInput />
    </div>
  )
}
