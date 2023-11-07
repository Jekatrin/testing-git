/*
1. E-mail, pozdravy
Vytvořte funkci, která vloží do e-mailu rozloučení.
Vytvořte si repozitář ze šablony cviceni-email se stránkou obsahující šablonu jednoduchého e-mailu.

Každý e-mail je třeba zakončit zdvořilým pozdravem.

V souboru index.js vytvořte funkci bez parametrů s názvem goodbye. Tato funkce vloží do odstavce s třídou email__closing rozloučení „Na shledanou“.
Zavolejte funkci goodbye() na konci souboru index.js. Ověřte, že se na zobrazené stránce správně změnil pozdrav na konci e-mailu.
Končit e-mail jen slovy „Na shledanou“ je nezdvořilé. Přidejte proto do funkce goodbye parametr představující jméno pisatele e-mailu. Funkce do posledního odstavce vloží koncový pozdrav i se jménem. Příklad použití:
goodbye('Pavel Ovesný');
Ve stránce bude
S pozdravem Pavel Ovesný
*/
let goodbye = name => {
	let goodbyeElm = document.querySelector('.email__closing');
	goodbyeElm.innerHTML = `Na shledanou <br> ${name}`;
};
let fillSubject = subject => {
	let subjectElm = document.querySelector('.email__subject');
	subjectElm.innerHTML = subject;
};
let fillBody = (body, name) => {
	let content = document.querySelector('.email__body');
	content.innerHTML = `<p>${body}</p>`;
	goodbye('Pavel Ovesný');
};

fillSubject('New year');
fillBody('Happy New Year! Let your dreams come true!');

/*2. E-mail, tělo
Vytvořte funkci, která vloží do e-mailu tělo.
Pokračujte na stránce z přechozího příkladu.

Do souboru index.js přidejte funkci fillSubject s jedním parametrem subject. Tato funkce ze stránky vybere DOM element představující předmět e-mailu a nastaví jeho obsah na řetězec, který přišel v parametru.
Zavolejte funkci na konci souboru index.js a vykoušejte si nastavit předmět e-mailu na nějaký smysluplný text.
Napište funkci fillBody s jedním parametrem body, která ze stránky vybere DOM element představující tělo e-mailu a nastaví jeho obsah dle hodnoty parametru.
Zavolejte funkci na konci souboru index.js a ověřte, že v zobrazené stránce správně změní tělo e-mailu.
Z předchozího cvičení nám zůstala funkce goodbye. Do funkce fillBody přidejte další parametr s názvem name. Tento parametr bude představovat jméno odesílatele. Funkce vyplní tělo e-mailu a do elementu email__closing vloží pozdrav, který vyrobí pomocí volání funkce goodbye.
*/
