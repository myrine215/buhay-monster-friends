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
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				bukal: {
					"primary": "#4CAF50",
					"secondary": "#A5D6A7",
					"accent": "#FFC107",
					"background": "#E8F5E9",
					"text": "#1B5E20",
					"chat-bubble": "#DCF8C6",
					"chat-text": "#263238",
					"game-highlight": "#FFD54F",
					"game-border": "#8BC34A",
					"pixel-green": "#00CC00",
					"pixel-yellow": "#FFCC00",
					"pixel-blue": "#00AAFF",
					"pixel-red": "#FF6666",
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
						transform: 'translateY(-10px)'
					}
				},
				'float-slow': {
					'0%': {
						transform: 'translateX(-100%)'
					},
					'100%': {
						transform: 'translateX(1000%)'
					}
				},
				'bounce-slight': {
					'0%, 100%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(-5px)'
					}
				},
				'pixel-pulse': {
					'0%, 100%': {
						transform: 'scale(1)'
					},
					'50%': {
						transform: 'scale(1.05)'
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
					'0%, 100%': {
						opacity: '1'
					},
					'50%': {
						opacity: '0.6'
					}
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
						transform: 'scale(1.3)'
					}
				},
				'crt-flicker': {
					'0%': {
						opacity: '0.9'
					},
					'2%': {
						opacity: '1'
					},
					'8%': {
						opacity: '0.9'
					},
					'9%': {
						opacity: '1'
					},
					'12%': {
						opacity: '0.9'
					},
					'20%': {
						opacity: '1'
					},
					'25%': {
						opacity: '0.9'
					},
					'60%': {
						opacity: '1'
					},
					'65%': {
						opacity: '0.9'
					},
					'80%': {
						opacity: '1'
					},
					'90%': {
						opacity: '0.9'
					},
					'100%': {
						opacity: '1'
					}
				},
				'pixel-slide-up': {
					'0%': {
						transform: 'translateY(100%)',
						opacity: '0'
					},
					'100%': {
						transform: 'translateY(0)',
						opacity: '1'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'float-slow': 'float-slow 30s linear infinite',
				'bounce-slight': 'bounce-slight 2s ease-in-out infinite',
				'pixel-pulse': 'pixel-pulse 2s ease-in-out infinite',
				'pixel-rotate': 'pixel-rotate 2s ease-in-out infinite',
				'pixel-blink': 'pixel-blink 1.5s ease-in-out infinite',
				'marquee': 'marquee 25s linear infinite',
				'twinkle': 'twinkle 3s ease-in-out infinite',
				'crt-flicker': 'crt-flicker 2s infinite',
				'pixel-slide-up': 'pixel-slide-up 0.5s ease-out'
			},
			fontFamily: {
				'rounded': ['Varela Round', 'system-ui', 'sans-serif'],
				'pixel': ['Nunito', 'system-ui', 'sans-serif'],
				'cartoon': ['Komika Axis', 'Comic Sans MS', 'cursive'],
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
