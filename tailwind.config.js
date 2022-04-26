module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "purple-200": "#DAC7FC",
        "purple-300": "#CAACFF",
        "purple-500": "#6B49CD",
        "pink-500": "#AD26FF",
      },
      fontSize: {
        13: "13px",
        14: "14px",
        15: "15px",
        16: "16px",
        17: "17px",
        18: "18px",
        19: "19px",
        20: "20px",
        21: "21px",
        22: "22px",
      },
      animation: {
				fadeIn: 'fadeIn 0.3s ease',
				fadeIn1s: 'fadeIn 1s ease',
				fadeOut: 'fadeOut 0.3s ease',
			},
			backgroundColor: (theme) => ({
				...theme('colors'),
				bg: 'var(--color-bg)',
				'bg-menu': 'var(--color-bg-menu)',
				'transparent-w-10': 'var(--color-transparent-w-10)',
				'transparent-w-20': 'var(--color-transparent-w-20)',
				'transparent-w-30': 'var(--color-transparent-w-30)',
				'transparent-b-50': 'var(--color-transparent-b-50)',
				'transparent-b-60': 'var(--color-transparent-b-60)',
				'transparent-b-70': 'var(--color-transparent-b-70)',
				'transparent-b-80': 'var(--color-transparent-b-80)',
				'bg-200': 'var(--color-bg-200)',
				'bg-300': 'var(--color-bg-300)',
				'bg-400': 'var(--color-bg-400)',
			}),
    },
  },
  plugins: [],
}
