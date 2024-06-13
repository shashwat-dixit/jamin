import Login from "../components/Login";
import Typewriter from "../components/Typewriter";
import ChooseModel from "../components/ChooseModel";  
import DataInput from "../components/DataInput";

export default function Home() {
  return (
    <div>
      <Typewriter />
      <Login />
      <ChooseModel />
      <DataInput />
    </div>
  )
}
