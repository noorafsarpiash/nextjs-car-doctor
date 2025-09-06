// tailwind.config.js
import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    daisyui, // DaisyUI প্লাগইনটি প্রথমে যোগ করুন
    // এরপর একটি অবজেক্টের মাধ্যমে থিমগুলো কনফিগার করুন
    {
      daisyui: {
        themes: [
          "light",
          "dark",
          "cupcake",
          // অন্যান্য থিম যোগ করতে পারেন
        ],
      },
    },
  ],
};
