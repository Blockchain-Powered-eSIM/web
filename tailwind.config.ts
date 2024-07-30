const { fontFamily, fontSize } = require("tailwindcss/defaultTheme");
import type { Config } from "tailwindcss";

const config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
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
			backgroundImage: {
				"beach-mobile": "url('/beach-scene-mobile.svg')",
				"beach-tablet": "url('/beach-scene-tablet.svg')",
				"beach-desktop": "url('/beach-scene-desktop.svg')",
				"pyramid-mobile": "url('/pyramid-scene-mobile.svg')",
				"pyramid-tablet": "url('/pyramid-scene-tablet.svg')",
				"pyramid-desktop": "url('/pyramid-scene-desktop.svg')",
			},
			fontFamily: {
				heading: ["var(--font-anybody)", ...fontFamily.sans],
				sans: ["var(--font-lexend)", ...fontFamily.sans],
			},
			fontSize: {
				"6xl": ["4.5rem", { lineHeight: "1" }],
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
				"pearl-lusta": {
					50: "hsl(var(--pearl-lusta-50))",
					100: "hsl(var(--pearl-lusta-100))",
					200: "hsl(var(--pearl-lusta-200))",
					300: "hsl(var(--pearl-lusta-300))",
					400: "hsl(var(--pearl-lusta-400))",
					500: "hsl(var(--pearl-lusta-500))",
					600: "hsl(var(--pearl-lusta-600))",
					700: "hsl(var(--pearl-lusta-700))",
					800: "hsl(var(--pearl-lusta-800))",
					900: "hsl(var(--pearl-lusta-900))",
					950: "hsl(var(--pearl-lusta-950))",
				},
				"pearl-blush": {
					50: "hsl(var(--pearl-blush-50))",
					100: "hsl(var(--pearl-blush-100))",
					200: "hsl(var(--pearl-blush-200))",
					300: "hsl(var(--pearl-blush-300))",
					400: "hsl(var(--pearl-blush-400))",
					500: "hsl(var(--pearl-blush-500))",
					600: "hsl(var(--pearl-blush-600))",
					700: "hsl(var(--pearl-blush-700))",
					800: "hsl(var(--pearl-blush-800))",
					900: "hsl(var(--pearl-blush-900))",
					950: "hsl(var(--pearl-blush-950))",
				},
				tangerine: {
					50: "hsl(var(--tangerine-50))",
					100: "hsl(var(--tangerine-100))",
					200: "hsl(var(--tangerine-200))",
					300: "hsl(var(--tangerine-300))",
					400: "hsl(var(--tangerine-400))",
					500: "hsl(var(--tangerine-500))",
					600: "hsl(var(--tangerine-600))",
					700: "hsl(var(--tangerine-700))",
					800: "hsl(var(--tangerine-800))",
					900: "hsl(var(--tangerine-900))",
					950: "hsl(var(--tangerine-950))",
				},
				amaranth: {
					50: "hsl(var(--amaranth-50))",
					100: "hsl(var(--amaranth-100))",
					200: "hsl(var(--amaranth-200))",
					300: "hsl(var(--amaranth-300))",
					400: "hsl(var(--amaranth-400))",
					500: "hsl(var(--amaranth-500))",
					600: "hsl(var(--amaranth-600))",
					700: "hsl(var(--amaranth-700))",
					800: "hsl(var(--amaranth-800))",
					900: "hsl(var(--amaranth-900))",
					950: "hsl(var(--amaranth-950))",
				},
				"ship-cove": {
					50: "hsl(var(--ship-cove-50))",
					100: "hsl(var(--ship-cove-100))",
					200: "hsl(var(--ship-cove-200))",
					300: "hsl(var(--ship-cove-300))",
					400: "hsl(var(--ship-cove-400))",
					500: "hsl(var(--ship-cove-500))",
					600: "hsl(var(--ship-cove-600))",
					700: "hsl(var(--ship-cove-700))",
					800: "hsl(var(--ship-cove-800))",
					900: "hsl(var(--ship-cove-900))",
					950: "hsl(var(--ship-cove-950))",
				},
				"powder-blue": {
					50: "hsl(var(--powder-blue-50))",
					100: "hsl(var(--powder-blue-100))",
					200: "hsl(var(--powder-blue-200))",
					300: "hsl(var(--powder-blue-300))",
					400: "hsl(var(--powder-blue-400))",
					500: "hsl(var(--powder-blue-500))",
					600: "hsl(var(--powder-blue-600))",
					700: "hsl(var(--powder-blue-700))",
					800: "hsl(var(--powder-blue-800))",
					900: "hsl(var(--powder-blue-900))",
					950: "hsl(var(--powder-blue-950))",
				},
				"outer-space": {
					50: "hsl(var(--outer-space-50))",
					100: "hsl(var(--outer-space-100))",
					200: "hsl(var(--outer-space-200))",
					300: "hsl(var(--outer-space-300))",
					400: "hsl(var(--outer-space-400))",
					500: "hsl(var(--outer-space-500))",
					600: "hsl(var(--outer-space-600))",
					700: "hsl(var(--outer-space-700))",
					800: "hsl(var(--outer-space-800))",
					900: "hsl(var(--outer-space-900))",
					950: "hsl(var(--outer-space-950))",
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
				"4xl": "2.5rem",
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
		variants: {
			backgroundImage: ["responsive"],
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
