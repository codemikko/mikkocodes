export const config = {
	// title: 'Mikkos Dev Blogfolio',
	author: 'Michael Moore',
	headerTitle: '',
	footerTitle: ' mikko.codes',
	footerCredit: 'Mikkos Blogfolio',
	description: 'Mikkos Dev Blogfolio, created with Sveltekit DaisyUI and Tailwind.css 🙋🏾',
	language: 'en-us',
	theme: 'dark', // system, dark or light
	domain: 'http://mikko.codes/',
	siteUrl: 'https://meek-sfogliatella-07c756.netlify.app',
	siteRepo: 'https://github.com/codemikko/mikkocodes',
	siteLogo: '/src/logo-m.png',
	tailwindcss: '<script src="https://cdn.tailwindcss.com"></script>',
	daisyui:'https://cdn.jsdelivr.net/npm/daisyui@2.51.3/dist/full.css',
	email: 'ymikko@pm.me',
	github: 'https://github.com/codemikko',
	twitter: 'https://twitter.com/codemikko',
	facebook: 'https://facebook.com/mikkocodes',
	lastfm: 'https://last.fm/user/hellomikko',
	linkedin: 'https://linkedin.com/in/hellomikko',
	locale: 'en-US',
	primaryColor: '#ca836c',

	// supports buttondown, convertkit, emailoctopus, klaviyo, mailchimp, revue
	// use false or null to disable newsletter
	// check .env.example for settings needed values for each service
	newsletter: 'mailchimp',

	multiuser: true
};

export const user = {
	name: 'admin',
	// avatar value can be removed for image
	avatar: 'src/av1.png',
	// twitter value can be removed for no link to twitter
	twitter: 'https://twitter.com/codemikko',
	siteAvatar: 'https://res.cloudinary.com/mikkossite/image/upload/v1678067012/av1_xqrxea.png',
};

export const navLinks = [
	{ href: '/about', title: 'About' },
	{ href: '/projects', title: 'Projects' },
	{ href: '/blog', title: 'Blog' },
	{ href: '/contact', title: 'Contact' }
];

export const openGraph = {
	enabled: true,
	width: 1200,
	height: 630
};

// supported systems: googleAnalytics, plausible, and simpleAnalytics
export const analytics = {
	googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
	plausibleDomain: '', // e.g. pied-piper-blog.netlify.app
	simpleAnalytics: false // true or false
};

// supported providers: giscus, utterances
export const comment = {
	provider: 'giscus',
	giscus: {
		// Visit the link below, and follow the steps in the 'configuration' section
		// https://giscus.app/
		repo: 'codemikko/mikkocodes',
		reposId: 'R_kgDOJFLSKA',
		category: 'General',
		categoryId: 'DIC_kwDOJFLSKM4CUp-H',
		mapping: 'url', // supported options: pathname, url, title
		reactionsEnabled: '1', // Emoji reactions: 1 = enable / 0 = disable
		// Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
		metadata: '0',
		// theme example: light, dark, dark_dimmed, dark_high_contrast
		// Place the comment box above the comments. options: bottom, top
		inputPosition: 'bottom',
		// Choose the language giscus will be displayed in. options: en, es, zh-CN, zh-TW, ko, ja etc
		lang: 'en',
		dataStrict: '0',
		loading: 'lazy',
		crossorigin:'anonymous',
		// theme example: light, dark, preferred_color_scheme, light_high_contrast, dark_high_contrast
		// light_protanopia, dark_protanopiam, light_tritanopia, dark_tritanopia, dark_dimmed, transparent_dark
		theme: 'dark',
		// theme when dark mode
		darkTheme: 'dark',
		themeURL: ''
	},
	utterances: {
		// Visit the link below, and follow the steps in the 'configuration' section
		// https://utteranc.es/
		repo: 'codemikko/mikkocodes',
		issueTerm: 'title', // supported options: pathname, url, title
		label: 'Comment 💬', // label (optional): Comment 💬
		// theme example: github-light, github-dark, preferred-color-scheme
		// github-dark-orange, icy-dark, dark-blue, photon-dark, boxy-light, gruvbox-dark"
		theme: 'photon-dark',
		// theme when dark mode
		darkTheme: 'photon-dark'
	}
};
