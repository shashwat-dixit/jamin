import { useState } from 'react';
import { Plus, FileInput, ArrowUp } from 'lucide-react';
import avatar from '../../assets/avatar.jpg'
import ChooseModel from './ChooseModel';
import DataInput from './DataInput';

export default function InputBox() {
  const [inputValue, setInputValue] = useState('');
  const [rows, setRows] = useState(1);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    const newRows = Math.min(1 + Math.floor(value.length / 50), 5);
    setRows(newRows);
  };

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-800 border-t border-gray-700 p-2">
      <div className="max-w-5xl mx-auto flex items-center space-x-2">
        <div className="w-8 h-8 flex-shrink-0">
          <img
            src={avatar}
            className="rounded-full w-full h-full object-cover"
            alt="Avatar"
          />
        </div>
        <div className="flex-grow relative">
          <textarea
            placeholder="Type here"
            className="textarea textarea-bordered w-full resize-none bg-gray-700 text-white pr-32"
            rows={rows}
            value={inputValue}
            onChange={handleInputChange}
          ></textarea>
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
            <DataInput />
            <ChooseModel />
            <button className="btn btn-circle btn-ghost">
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
        <div className="text-xs font-semibold text-gray-400">
          GPT 3.5
        </div>
      </div>
    </div>
  );
}