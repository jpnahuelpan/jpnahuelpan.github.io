function withOpacity(variableName) {
	return ({ opacityValue }) => {
	  if (opacityValue !== undefined) {
		return `rgba(var(${variableName}), ${opacityValue})`;
	  }
	  return `rgb(var(${variableName}))`;
	};
  }

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,ts,tsx}',
	],
	theme: {
		fontFamily: {
			sans: ['IBM Plex Mono', 'monospace'],
		},
		extend: {
			colors: {
				'bgc': '#FEFEFE',
				'txt': '#554C4F',
				'bn-light': '#9A2F39',
			},
		},
	},
	plugins: [],
}
