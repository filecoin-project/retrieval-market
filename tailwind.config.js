module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "protocol-labs-logo": "url('/protocol-labs-logo.svg')",
      },
      colors: {
        "pl-blue": "#1a74fc",
        "pl-green": "#4ef286",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
