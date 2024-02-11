// Siempre ha de indicarse el idioma

let Page = {'lang':'es'}

function localize(localized, lang = null) {
    // console.log('localize',Page.lang)

//    locale=va

    if (!localized) return '';
    if (typeof localized == 'string' || typeof localized == 'number') return localized
    if (typeof localized != 'object') return 'ERR translation:'+typeof localized; //???
    if (Object.entries(localized).length === 0) return  '';  //???

    if (lang===null && Page && Page.lang) lang=Page.lang
    // else if (lang===null && localStorage.lang) lang =  localStorage.lang;

    if (lang === 'va' && !localized[lang]) lang = 'ca'; // va === ca
    else if (lang === 'ca' && !localized[lang]) lang = 'va'; // va === ca

    var resp = localized[lang] || localized['und'] || Object.values(localized)[0] || '';

    //console.log(resp, lang,localized)

    // hay veces que devuelve un objeto ?????
    if (typeof resp === 'string') return resp;
    return 'ERR translation';
}


export { localize } 