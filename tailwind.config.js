module.exports = {
    mode: "jit",
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                secondary: "#8B5CF6",
                primary: "#570df8",
            },
            fontFamily: {
                sans: ["Roboto Mono"],
            },
            spacing: {
                96: "24rem",
                120: "30rem",
                148: "40rem",
                200: "60rem",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require("@tailwindcss/typography"), require("daisyui")],
    daisyui: {
        styled: true,
        themes: ["light"],
        base: true,
        utils: true,
        logs: true,
        rtl: false,
    },
};
