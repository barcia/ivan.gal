// Date filter to nunjucks.
// Defaults to format of LLLL d, y unless an
// alternate is passed as a parameter.
// {{ myDate | date('OPTIONAL FORMAT STRING') }}
// List of supported tokens: https://moment.github.io/luxon/docs/manual/formatting.html#table-of-tokens

const months = {
	00: "Xaneiro",
	01: "Febreiro",
	02: "Marzo",
	03: "Abril",
	04: "Maio",
	05: "Xuño",
	06: "Xullo",
	07: "Agosto",
	08: "Setembro",
	09: "Outubro",
	10: "Novembro",
	11: "Decembro"
}

const days = {
	0: "Domingo",
	1: "Luns",
	2: "Martes",
	3: "Mércores",
	4: "Xoves",
	5: "Venres",
	6: "Sábado",
}

module.exports = (dateObj, format) => {

	const year = dateObj.getFullYear();
	const month = dateObj.getMonth();
	const day = dateObj.getDate();
	const hour = dateObj.getHours();
	const minute = dateObj.getMinutes();
	const weekday = dateObj.getDay();

	switch (format) {
		case 'long':
			return `${days[weekday]}, ${day} de ${months[month]} do ${year} ás ${hour}:${minute}`;
		default:
			return `${day} de ${months[month]} do ${year}`;
	}
};
