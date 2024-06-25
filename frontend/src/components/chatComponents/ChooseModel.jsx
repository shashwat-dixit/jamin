import { useState, useRef, useEffect } from 'react';
import { Bot } from 'lucide-react';

export default function ChooseModel() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown dropdown-top" ref={dropdownRef}>
      <div 
        tabIndex={0} 
        role="button" 
        className="btn btn-ghost btn-circle"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Bot size={20} />
      </div>
      {isOpen && (
        <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
          <li><a>GPT 3.5</a></li>
          <li><a>Cohere</a></li>
          <li><a>Claude 3</a></li>
        </ul>
      )}
    </div>
  )
}