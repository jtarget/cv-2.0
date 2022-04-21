const colors = require("tailwindcss/colors");

module.exports = {
	content: ["./*.html", "./node_modules/tw-elements/dist/js/**/*.js"],
	theme: {
		extend: {
			keyframes: {
				wiggle: {
					"0%, 100%": { transform: "rotate(-3deg)" },
					"50%": { transform: "rotate(3deg)" },
				},
			},
			colors: {
				surfCrest: "#BEDBBB",
			},
			boxShadow: {
				classic: "inset 0 -0.6em 0 -0.35em rgba(0, 0, 0, 0.17)",
			},
			animation: {
				wiggle: "wiggle 1s ease-in-out infinite",
				spinslow: "spin 3s linear infinite",
			},
		},
		fontFamily: {
			Cutive: ["Cutive Mono", "monospace"],
			IBM: ["IBM Plex Mono", "monospace"],
		},
	},
	plugins: [require("tw-elements/dist/plugin")],
};
