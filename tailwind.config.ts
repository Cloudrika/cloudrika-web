/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./apps/**/*.{js,ts,jsx,tsx,mdx}",      // scan all Next.js apps
        "./packages/**/*.{js,ts,jsx,tsx,mdx}",  // scan shared packages like ui
    ],
    theme: {
        extend: {
            colors: {},
            borderRadius: {},
        },
    },
    plugins: [require("tailwindcss-animate")],
};
