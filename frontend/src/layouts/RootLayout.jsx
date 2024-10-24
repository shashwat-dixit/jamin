import { Analytics } from "@vercel/analytics/react"
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function RootLayout() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
        <Analytics />
      </main>
    </div>
  )
}
