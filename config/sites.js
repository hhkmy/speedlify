/**
 * Speedlify Configuration for HHK Blog
 */

export default {
	// Lighthouse runs per URL per measurement (set to 1 for fast local runs)
	runs: 1,

	// "none" or "filmstrip"
	screenshots: "none",

	// "mobile" or "desktop"
	formFactor: "mobile",

	freshnessHours: 24,
	staleAfterHours: 48,
	batchSize: 20,
	historyLimit: 120,
	retryErrorsAfterHours: 6,
	failureBackoff: true,
	redirectConfirmations: 3,

	groups: {
		pages: {
			name: "Pages",
			enabled: true,
			description: "Performance and accessibility metrics for Hein Htet Kyaw's primary pages.",
			sites: [
				{ name: "Home", url: "https://hhk.my.id/" },
				{ name: "About", url: "https://hhk.my.id/about/" },
				{ name: "Projects", url: "https://hhk.my.id/projects/" },
				{ name: "Books", url: "https://hhk.my.id/books/" },
				{ name: "Shop", url: "https://hhk.my.id/shop/" },
				{ name: "Archive", url: "https://hhk.my.id/archive/" },
			],
		},
		services: {
			name: "Services",
			enabled: true,
			description: "Performance metrics for subdomains and related platforms.",
			sites: [
				{ name: "Home", url: "https://hhk.my.id/" },
				{ name: "Netlify Mirror", url: "https://netlify.hhk.my.id/" },
				{ name: "Speedlify", url: "https://speedlify.hhk.my.id/" },
				{ name: "Stats", url: "https://stats.hhk.my.id/" },
				{ name: "Channel Enth", url: "https://channelenth.my.id/" },
			],
		},
	},
};
