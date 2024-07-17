const { fontFamily } = require("tailwindcss/defaultTheme");
import type { Config } from "tailwindcss";

const config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			fontFamily: {
				sans: ["var(--font-lexend)", ...fontFamily.sans],
			},
			colors: {
				"beach-sky": "hsl(var(--beach-sky-200))",
				"night-purple": {
					600: "hsl(var(--night-purple-600))",
					800: "hsl(var(--night-purple-800))",
				},
				ocean: "hsl(var(--ocean))",
				cashmere: {
					50: "hsl(var(--cashmere-50))",
					100: "hsl(var(--cashmere-100))",
					200: "hsl(var(--cashmere-200))",
					300: "hsl(var(--cashmere-300))",
					400: "hsl(var(--cashmere-400))",
					500: "hsl(var(--cashmere-500))",
					600: "hsl(var(--cashmere-600))",
					700: "hsl(var(--cashmere-700))",
					800: "hsl(var(--cashmere-800))",
					900: "hsl(var(--cashmere-900))",
					950: "hsl(var(--cashmere-950))",
				},
				"esim-black": {
					50: "hsl(var(--esim-black-50))",
					100: "hsl(var(--esim-black-100))",
					200: "hsl(var(--esim-black-200))",
					300: "hsl(var(--esim-black-300))",
					400: "hsl(var(--esim-black-400))",
					500: "hsl(var(--esim-black-500))",
					600: "hsl(var(--esim-black-600))",
					700: "hsl(var(--esim-black-700))",
					800: "hsl(var(--esim-black-800))",
					900: "hsl(var(--esim-black-900))",
					950: "hsl(var(--esim-black-950))",
				},
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
