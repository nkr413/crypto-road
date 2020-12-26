async function getRequestAll() {
	let sbl = await requestBTC();
	await request_ETH_LTC(sbl);
}
getRequestAll();

async function requestBTC() {
	let url = "https://blockchain.info/ticker";
	let response = await fetch(url);
	let data = await response.json();

	document.getElementById('btc-coin-usd').innerHTML = data.USD.buy + ` ${data.USD.symbol}`;
	document.getElementById('btc-coin-euro').innerHTML = data.EUR.buy + ` ${data.EUR.symbol}`;
	document.getElementById('btc-coin-rub').innerHTML = data.RUB.buy + ` &#8381;`;
	document.getElementById('btc-coin-cny').innerHTML = data.CNY.buy + ` ${data.CNY.symbol}`;
	document.getElementById('btc-coin-gbp').innerHTML = data.GBP.buy + ` ${data.GBP.symbol}`;
	document.getElementById('btc-coin-pln').innerHTML = data.PLN.buy + ` ${data.PLN.symbol}`;
	return data;
}

async function request_ETH_LTC(sbl) {
	let url = "https://api.blockchain.com/v3/exchange/tickers";
	let response = await fetch(url);
	let data = await response.json();

	document.getElementById('eth-coin-usd').innerHTML = data[11].last_trade_price + ` ${sbl.USD.symbol}`;
	document.getElementById('eth-coin-euro').innerHTML = data[29].last_trade_price + ` ${sbl.EUR.symbol}`;
	document.getElementById('eth-coin-gbp').innerHTML = data[30].last_trade_price + ` ${sbl.GBP.symbol}`;
	document.getElementById('eth-coin-btc').innerHTML = data[47].last_trade_price + ` ₿`;
	document.getElementById('eth-coin-usdt').innerHTML = data[54].last_trade_price + ` ${sbl.USD.symbol}`;

	document.getElementById('ltc-coin-usd').innerHTML = data[55].last_trade_price + ` ${sbl.USD.symbol}`;
	document.getElementById('ltc-coin-euro').innerHTML = data[13].last_trade_price + ` ${sbl.EUR.symbol}`;
}

document.getElementById("update-btn").addEventListener('click', (e) => getRequestAll());


