import { useState } from 'react';
import SubmitButton from './SubmitButton';

export default function InputBox() {
  const [inputValue, setInputValue] = useState('');
  const [rows, setRows] = useState(1);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    // Increase rows if input length exceeds a certain threshold
    const newRows = Math.min(1 + Math.floor(value.length / 50), 5); // max 5 rows
    setRows(newRows);
  };

  return (
    <div className="fixed bottom-0 left-0 w-full flex justify-center p-4">
      <div className="fixed bottom-6 p-4 flex space-x-4 max-w-lg w-full">
        <div className="w-24 h-24 flex-shrink-0">
          <img
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            className="rounded w-full h-full object-cover"
          />
        </div>
        <label className="flex flex-col w-full">
          <div className="label flex justify-between">
            <span className="label-text">Ask me anything!</span>
            <span className="label-text-alt">GPT 3.5</span>
          </div>
          <textarea
            placeholder="Type here"
            className="textarea textarea-bordered w-full resize-none"
            rows={rows}
            value={inputValue}
            onChange={handleInputChange}
          ></textarea>
        </label>
        <SubmitButton />
      </div>
    </div>
  );
}
