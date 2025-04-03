import type { Config } from "tailwindcss";

export default {
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
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				bukal: {
					primary: "#4CAF50",
					secondary: "#2E7D32",
					accent: "#FFC107",
					background: "#F5F5F5",
					text: "#333333",
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(-20px)'
					}
				},
				'float-slow': {
					'0%': {
						transform: 'translateX(0)'
					},
					'100%': {
						transform: 'translateX(100px)'
					}
				},
				'bounce-slight': {
					'0%, 100%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'pixel-pulse': {
					'0%': {
						opacity: '0.7'
					},
					'50%': {
						opacity: '1'
					},
					'100%': {
						opacity: '0.7'
					}
				},
				'pixel-rotate': {
					'0%': {
						transform: 'rotate(0deg)'
					},
					'25%': {
						transform: 'rotate(5deg)'
					},
					'75%': {
						transform: 'rotate(-5deg)'
					},
					'100%': {
						transform: 'rotate(0deg)'
					}
				},
				'pixel-blink': {
					'0%, 49%, 100%': { opacity: '1' },
					'50%, 80%': { opacity: '0' },
				},
				'marquee': {
					'0%': { transform: 'translateX(0%)' },
					'100%': { transform: 'translateX(-100%)' }
				},
				'twinkle': {
					'0%, 100%': { 
						opacity: '0.7',
						transform: 'scale(1)'
					},
					'50%': { 
						opacity: '1',
						transform: 'scale(1.2)'
					}
				},
				'loading-progress': {
					'0%': { width: '0%' },
					'50%': { width: '70%' },
					'80%': { width: '85%' },
					'100%': { width: '100%' },
				},
				'health-bar': {
					'0%': { width: '60%' },
					'50%': { width: '75%' },
					'100%': { width: '60%' },
				},
				'loading-flash': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.3' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'float-slow': 'float-slow 30s ease-in-out infinite',
				'bounce-slight': 'bounce-slight 3s ease-in-out infinite',
				'pixel-pulse': 'pixel-pulse 1.5s ease-in-out infinite',
				'pixel-rotate': 'pixel-rotate 2s ease-in-out infinite',
				'pixel-blink': 'pixel-blink 2s steps(2) infinite',
				'marquee': 'marquee 25s linear infinite',
				'twinkle': 'twinkle 4s ease-in-out infinite',
				'loading-progress': 'loading-progress 3s ease-in-out forwards',
				'health-bar': 'health-bar 5s ease-in-out infinite',
				'loading-flash': 'loading-flash 2s ease-in-out infinite',
			},
			fontFamily: {
				'rounded': ['Varela Round', 'system-ui', 'sans-serif'],
				'pixel': ['Press Start 2P', 'monospace', 'system-ui'],
				'cartoon': [
					'"Comic Sans MS"',
					'"Comic Sans"',
					'"Chalkboard SE"',
					'"Comic Neue"',
					'cursive',
				],
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
