export const API_VERSION = 'v2';

export const SCALE_FORMAT = {
	"-1": {
		suffix: "不明",
		scale: "",
		color: ""
	},
	10: {
		suffix: "",
		scale: "1",
		color: "#588090"
	},
	20: {
		suffix: "",
		scale: "2",
		color: "#5c9e5b"
	},
	30: {
		suffix: "",
		scale: "3",
		color: "#a39400"
	},
	40: {
		suffix: "",
		scale: "4",
		color: "#a66c00"
	},
	45: {
		suffix: "弱",
		scale: "5",
		color: "#fd0100"
	},
	50: {
		suffix: "強",
		scale: "5",
		color: "#fd0100"
	},
	55: {
		suffix: "弱",
		scale: "6",
		color: "#fec1cb"
	},
	60: {
		suffix: "強",
		scale: "6",
		color: "#fec1cb"
	},
	70: {
		suffix: "",
		scale: "7",
		color: "#fd0100"
	}
}

export const ISSUE_TYPE = {
	ScalePrompt: "震度速報",
	Destination: "震源に関する情報",
	ScaleAndDestination: "震度・震源に関する情報",
	DetailScale: "各地の震度に関する情報",
	Foreign: "遠地地震に関する情報",
	Other: "その他の情報"
}