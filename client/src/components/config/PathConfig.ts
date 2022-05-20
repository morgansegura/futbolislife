export const paths = {
	base: {
		landing: {
			path: '/',
			label: 'Home',
			title: 'Home',
			level: 'guest',
		},
		about: {
			path: '/about',
			label: 'About',
			title: 'About',
			level: 'guest',
		},
		contact: {
			path: '/contact',
			label: 'Contact',
			title: 'Contact',
			level: 'guest',
		},
	},

	account: {
		dashboard: {
			path: '/admin/dashboard',
			label: 'Dashboard',
			title: 'Dashboard',
			level: 'admin',
		},
		profile: {
			path: '/account/profile',
			label: 'Profile',
			title: 'Profile',
			level: 'admin',
		},
		account: {
			path: '/account',
			label: 'Account',
			title: 'Account',
			level: 'admin',
		},
	},

	admin: {
		documentation: {
			path: '/admin/docs',
			label: 'Documentation',
			title: 'Documentation',
			level: 'guest',
		},
		styleGuide: {
			path: '/admin/docs/style-guide',
			label: 'Style Guide',
			title: 'Style Guide',
			level: 'guest',
		},
		siteMap: {
			path: '/admin/docs/sitemap',
			label: 'Site Map',
			title: 'Site Map',
			level: 'guest',
		},
	},

	auth: {
		signin: {
			path: '/auth/signin',
			label: 'Login',
			title: 'Login',
			level: 'guest',
		},
		signout: {
			path: '/auth/signout',
			label: 'Signout',
			title: 'Signout',
			level: 'admin',
		},
		register: {
			path: '/auth/register',
			label: 'Register',
			title: 'Register',
			level: 'guest',
		},
	},
}
