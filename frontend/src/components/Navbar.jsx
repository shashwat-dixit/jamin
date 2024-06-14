import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full navbar bg-base-300 z-50">
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">Jamin</Link>
      </div>
      <div className="flex-none gap-2">
        <div className="relative form-control">
          <input type="text" placeholder="Search  " className="input input-bordered w-24 md:w-auto" />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
            <kbd className="kbd">ctrl</kbd> + <kbd className="kbd">k</kbd>
          </div>
        </div>
      </div>
      <div className="ml-2 flex-none">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost rounded-btn"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg></div>
          <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4">
            <li><a>Profile</a></li>
            <li><a>Settings</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
