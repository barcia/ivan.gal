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
		case 'iso':
			return myDate.format()
		default:
			return myDate.format('DD MMM YYYY HH:mm')
	}
}
