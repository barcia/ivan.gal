// Date formatter filter.
// {{ myDate | date('OPTIONAL FORMAT STRING') }}

var dayjs = require('dayjs')
require('dayjs/locale/gl')

dayjs.locale('gl')

module.exports = (date, format) => {
	const myDate = dayjs(date);

	switch (format) {
		case 'time':
			return myDate.format('HH:mm')
		case 'date':
			return myDate.format('DD MMM YYYY')
		case 'datelong':
			return myDate.format('DD MMMM YYYY')
		case 'full':
			return myDate.format('DD MMMM YYYY - HH:mm')
		default:
			return myDate.format()
	}
}
