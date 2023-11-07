/*
3. Převod měny
Napište funkci, která převede částku na české koruny.
Napište funkci convertToCZK, která převede částku zadanou v cízí měně na české koruny. Funkce bude podporovat následující měny a kurzy.

Měna	Kód	Kurz
Euro	EUR	24.47
Britská libra	GBP	28.09
Americký dolar	USD	24.81
Bitcoin	BTC	478637
Výslednou částku zakrouhlete na celé koruny. Příklad použití:

document.body.innerHTML += convertToCZK(25, 'EUR');
Pokud funkce jako parametr dostane neznámý kód měny, vrátí jako výsledek null. Otestujte funkci výpisem výsledku do stránky.

*/
let curAr = [
	{
		curName: 'Euro',
		curCode: 'EUR',
		exchRate: 24.47
	},
	{
		curName: 'Britská libra',
		curCode: 'GBP',
		exchRate: 28.09
	},
	{
		curName: 'Americký dolar',
		curCode: 'USD',
		exchRate: 24.81
	},
	{
		curName: 'Bitcoin',
		curCode: 'BTC',
		exchRate: 478637
	}
];
let convertToCZK = (amount, cur) => {
	let currencies = [];
	let result;
	let text;

	curAr.forEach(c => {
		currencies.push(c.curCode);
		if (typeof amount === 'number' && currencies.indexOf(cur) !== -1) {
			let index = currencies.indexOf(cur);
			console.log(currencies.indexOf(cur) !== -1);
			let rate = curAr[index].exchRate;
			console.log(rate);

			text = `Měna: ${curAr[index].curName} <br>	Kód: ${curAr[index].curCode}	<br> Kurz: ${curAr[index].exchRate} <br> Částka: ${amount}`;
			result = { r: Math.round(amount * rate), t: text };
			console.log(result);
		} else {
			result = null;
		}
	});
	return result;
};
let main = document.querySelector('.main');
let inner = convertToCZK(25, 'EUR');
// convertToCZK(25, 'EUR');
main.innerHTML += `<h1>${inner.t}</h1><h1>${inner.r}</h1>`;
