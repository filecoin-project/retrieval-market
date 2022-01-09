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
        "pl-light-blue": "#0ED1FF",
        "pl-blue": "#0090FF",
        "pl-green": "#4ef286",
        "pl-dark-blue": "#0365c0",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
