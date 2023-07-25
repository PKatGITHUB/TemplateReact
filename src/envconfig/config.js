const config = {
	host: window.ENDPOINT ? window.ENDPOINT : process.env.ENDPOINT,
	ins_key: window.REACT_APP_INS_KEY
		? window.REACT_APP_INS_KEY
		: process.env.REACT_APP_INS_KEY,
	telegram_bot_url: window.REACT_APP_TELEGRAM_BOT_URL
		? window.REACT_APP_TELEGRAM_BOT_URL
		: process.env.REACT_APP_TELEGRAM_BOT_URL,
	instance_name: window.REACT_APP_INSTANCE_NAME
		? window.REACT_APP_INSTANCE_NAME
		: process.env.REACT_APP_INSTANCE_NAME,
	azureClientId: process.env.AZURE_CLIENT_ID,
	diagnosticsSocketUrl: "https://ig-dev-az.intelligeni.com",
	// diagnosticsSocketUrl: "http://localhost:3005",
};

window.config = config;
module.exports = config;
