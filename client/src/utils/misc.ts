const formatDate = (date: any) =>
	new Intl.DateTimeFormat('en-US', {
		month: 'short',
		year: '2-digit',
	}).format(date)

const userInitials = (name: string) => {
	let initials = name.length ? name : 'Morgan'

	return initials
		.split(' ')
		.map(n => n[0])
		.join(' ')
		.toUpperCase()
}

const emptyObject = (obj: {}) => {
	return Object.keys(obj).length === 0
}

const readStringValue = (string: string, value: string) => {
	return string.includes(value)
}

export { formatDate, userInitials, emptyObject, readStringValue }
