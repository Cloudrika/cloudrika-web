import { Config } from 'tailwindcss'
export default {
    content: [
        "../../ui/src/components/**/*.{js,ts,jsx,tsx}",
        "../../ui/src/components/**/*.story.{js,ts,jsx,tsx}",
        "./.storybook/**/*.{ts,tsx,js,jsx}"
    ],
    plugins: [require('tailwind-animate')]
} satisfies Config;