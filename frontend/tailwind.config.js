/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-gradient": {
          1: "#f43f5e",
          2: "#ec4899",
          3: "#6366f1",
        },
      },
      backgroundImage: {
        "gradient-to-r": "linear-gradient(to right, #f43f5e, #ec4899, #6366f1)",
      },
    },
  },
  plugins: [require("daisyui")],
};
