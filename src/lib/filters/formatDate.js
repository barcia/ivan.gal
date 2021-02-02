// Date filter to nunjucks.
// Defaults to format of LLLL d, y unless an
// alternate is passed as a parameter.
// {{ myDate | date('OPTIONAL FORMAT STRING') }}
// List of supported tokens: https://moment.github.io/luxon/docs/manual/formatting.html#table-of-tokens
// https://moment.github.io/luxon/docs/manual/formatting.html

var dayjs = require('dayjs')
require('dayjs/locale/gl')

dayjs.locale('gl')


var now = dayjs()


module.exports = (date) => {

	const myDate = dayjs(date);

	return myDate.format('DD MMM YYYY HH:mm')
}


// const { DateTime } = require("luxon");

// const gl = {
// 	month: {
// 		1: "Xaneiro",
// 		2: "Febreiro",
// 		3: "Marzo",
// 		4: "Abril",
// 		5: "Maio",
// 		6: "Xuño",
// 		7: "Xullo",
// 		8: "Agosto",
// 		9: "Setembro",
// 		10: "Outubro",
// 		11: "Novembro",
// 		12: "Decembro"
// 	},
// 	day: {
// 		1: "Segunda feira",
// 		2: "Terza feira",
// 		3: "Cuarta feira",
// 		4: "Quinta feira",
// 		5: "Sexta feira",
// 		6: "Sábado",
// 		7: "Domingo",
// 	},
// 	day_cast: {
// 		1: "Luns",
// 		2: "Martes",
// 		3: "Mércores",
// 		4: "Xoves",
// 		5: "Venres",
// 		6: "Sábado",
// 		7: "Domingo",
// 	}
// }


// module.exports = (dateObj, format) => {

// 	const dt = DateTime.fromJSDate(dateObj, {zone: 'Europe/Madrid'});
// 	const month = gl.month[dt.toFormat("L")];
// 	const day = gl.day[dt.toFormat("c")];

// 	switch (format) {
// 		case 'datetime':
// 			return dt.toFormat(`dd '${month}' yyyy - T`);
// 		case 'time':
// 			return dt.toFormat(`T`);
// 		case 'iso':
// 			return dt.toISO();
// 		case 'isoDate':
// 			return dt.toISODate();
// 		default:
// 			return dt.toFormat(`dd '${month}' yyyy`);
// 	}
// };
