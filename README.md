hy i am priyanshi

# pexcels use for images
#  devui.io for alredy maked component 

inject tailwind


  npm create vite@latest my-project -- --template react
cd my-project
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

in index.css

  @tailwind base;
  @tailwind components;
  @tailwind utilities;