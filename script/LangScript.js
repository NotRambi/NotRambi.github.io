// funzioni per la gestione della lingua

function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function changeLang() {
    if (lang == 'en') {
        lang = 'it';
    } else {
        lang = 'en';
    }
    setCookie('lang', lang, 30);
    setLang();
}
function setLang() {
    it_el = document.getElementsByClassName('it');
    en_el = document.getElementsByClassName('en');
    var langBtn = document.getElementById('langBtn');
    if (lang == 'it') {
        langBtn.innerHTML = 'IT';
        for (var i = 0; i < it_el.length; i++) {
            it_el[i].style.display = 'block';
        }
        for (var i = 0; i < en_el.length; i++) {
            en_el[i].style.display = 'none';
        }
    } else {
        langBtn.innerHTML = 'EN';
        for (var i = 0; i < it_el.length; i++) {
            it_el[i].style.display = 'none';
        }
        for (var i = 0; i < en_el.length; i++) {
            en_el[i].style.display = 'block';
        }
    }
}

// main 
let lang = getCookie('lang');
if (lang === null) {
    lang = 'en';
    setCookie('lang', lang, 30);
}
setLang();