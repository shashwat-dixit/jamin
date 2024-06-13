import { Link } from "react-router-dom"
export default function NotFound() {
    return (
        <div>
        <h1 className="p-2 text-2xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
            404
        </h1>
        <p className="p-2 text-2xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
            Page Not Found
        </p>
        <Link to="/">Go Home</Link>
        </div>
    )
}
