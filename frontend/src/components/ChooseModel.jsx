
export default function ChooseModel() {
  return (
    <div>
      <div className="dropdown dropdown-right">
        <div tabIndex={0} role="button" className="btn m-1">Choose LLM</div>
        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
          <li><a>GPT 3.5</a></li>
          <li><a>Llama 3</a></li>
          <li><a>Cohere</a></li>
          <li><a>Gemini</a></li>
          <li><a>Claude 3</a></li>
        </ul>
      </div>
    </div>
  )
}
