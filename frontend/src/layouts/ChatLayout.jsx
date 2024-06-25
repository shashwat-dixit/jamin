import { Outlet } from 'react-router-dom'

export default function ChatLayout() {
  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
