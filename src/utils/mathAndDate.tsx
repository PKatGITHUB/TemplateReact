export const randomIntFromInterval = (min: any, max: any) => {
	// min and max included
	return Math.floor(Math.random() * (max - min + 1) + min);
};

export const months = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec",
];

export const getDate: any = (timestamp: string) => {
	const date = new Date(timestamp);
	return date.toDateString();
};

export const getDateTime = (timestamp: string, format?: string) => {
	if (!timestamp || timestamp === "") return "";
	if (format === "12hr") {
		const dateObject = new Date(timestamp);
		return (
			dateObject.toDateString() + ", " + dateObject.toLocaleTimeString()
		);
	} else {
		const date: Date = new Date(timestamp);
		const hours = date.getHours();
		const minutes = date.getMinutes();
		const hoursString =
			hours < 10 ? "0" + hours.toString() : hours.toString();
		const minutesString =
			minutes < 10 ? "0" + minutes.toString() : minutes.toString();
		return `${
			months[date.getMonth()]
		} ${date.getDate()}, ${hoursString}:${minutesString}`;
	}
};

export const getFontSize = (
	count: number,
	baseSize: number,
	difference: number
) => {
	let digits = 0;
	const fontSize = baseSize;
	while (count > 0) {
		digits++;
		count = parseInt((count / 10).toString());
	}
	return fontSize - difference * digits;
};

export const camelToSnakeCase = (str: string) =>
	str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);

export const camelToSpaceSeparatedCase = (str: string) => {
	const spaceSeparatedString = str.replace(/[A-Z]/g, letter => ` ${letter}`);
	return (
		spaceSeparatedString.charAt(0).toUpperCase() +
		spaceSeparatedString.slice(1)
	);
};

export const capitalizeFirstLetter = (string: string) => {
	return string.charAt(0) && string.charAt(0).toUpperCase() + string.slice(1);
};

export const getDaysGivenEpochTimerange = (range: [number, number]) => {
	if (range[0] && range[1])
		return (range[1] - range[0]) / (1000 * 60 * 60 * 24);
	return 0;
};
export const getMinutesGivenEpochTimerange = (range: [number, number]) => {
	if (range[0] && range[1]) return (range[1] - range[0]) / (1000 * 60);

	return 0;
};
export const stringToNumberHash = (s: string) =>
	s.split("").reduce((a, b) => {
		a = (a << 5) - a + b.charCodeAt(0);
		return a & a;
	}, 0);

export const getMean = (array: Array<number>) => {
	if (array.length > 0) {
		return array.reduce((a, b) => a + b) / array.length;
	} else {
		return undefined;
	}
};

export const isValidTimestamp = (text: any) => {
	return (
		text &&
		typeof text === "string" &&
		!/^(?=.)([+-]?([0-9]*)(\.([0-9]+))?)$/.test(text) &&
		new Date(text).getTime() > 0
	);
};

// 2023-02-06T07:07:13.791Z
