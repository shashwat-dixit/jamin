import { useState, useRef, useEffect } from 'react';
import { Plus } from 'lucide-react';

export default function DataInput() {
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
        <Plus size={20} />
      </div>
      {isOpen && (
        <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
          <li><a>Input Video URL</a></li>
          <li><a>Upload PDF</a></li>
          <li><a>Upload Research Paper</a></li>
        </ul>
      )}
    </div>
  )
}