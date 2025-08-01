import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 text-center">
        <h1 className="text-6xl font-extrabold tracking-tight sm:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-pink-400 to-red-400">
          Jamin
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300 max-w-xl">
          Launching <span className="text-white font-bold">Sept 1</span>.
        </p>
      </div>
    </main>
  );
}
