const menuIcon = document.querySelector(".menu-icon") as HTMLDivElement;
const menuList = document.querySelector("nav") as HTMLElement;
const hamburger = document.querySelector(".fa-solid") as HTMLDivElement;

/****FCE na hamburgera ***/
const menuCHanger = (): void => {

    if (hamburger.classList[1] === "fa-bars") {
        hamburger.classList.add("fa-xmark")
        hamburger.classList.remove("fa-bars")
        menuList.style.display = "block"
    } else {
        hamburger.classList.add("fa-bars")
        hamburger.classList.remove("fa-xmark")
        menuList.style.display = "none"
    }

}
/********** */
if (menuIcon) {
    menuIcon.addEventListener('click', menuCHanger);
}

/************************* Citáty ******** */
const citationBox = document.getElementById('Quote-box') as HTMLDivElement;
const citationText = document.querySelector<HTMLParagraphElement>('.citation-quote');
const autor = document.querySelector<HTMLParagraphElement>('.citation-name');
const googleBTN = document.querySelector<HTMLButtonElement>('.google-btn');
const nextCitation = document.querySelector('.next-quote') as HTMLButtonElement;
const loader = document.getElementById('Loader') as HTMLDivElement;

// Pole citátů a autorů
const quotes = [
    {
        text: 'Dopouštím se omylů jako kdokoli jiný. Naopak, protože jsem - promiň mi to tvrzení - o něco chytřejší než většina lidí, bývají o to větší i moje omyly.',
        author: 'Albus Percival Wulfric Brian Brumbál'
    },
    {
        text: 'Pokud chceš vědět, jaký někdo doopravdy je, všimni si, jak se chová ke svým podřízeným, ne k sobě rovným.',
        author: 'Sirius Black'
    },
    {
        text: 'Vyrůstat vedle Freda a George má tu výhodu, že začneš pokládat za možné úplně všechno, pokud na to máš dost silné nervy.',
        author: 'Ginny Weasleyová'
    },
    {
        text: 'Myšlenky dokázaly zanechat na těle hlubší jizvy než téměř cokoli jiného.',
        author: 'Madam Pomfreyová'
    },
    {
        text: 'Někdy musíš myslet na víc, než jen na vlastní bezpečí! Někdy musíš myslet na větší dobro.',
        author: 'Harry Potter'
    },
    {
        text: 'Tolik peněz a život tak dlouhý, jak jen si budeš přát! To jsou dvě věci, kterým by většina lidí dala přednost přede vším ostatním – potíž je v tom, že lidé mají sklon volit právě to, co je pro ně nejhorší.',
        author: 'Albus Brumbál'
    },
    {
        text: 'Je to úžasné, co všecko si mudlové vymysleli, aby se obešli bez čar a kouzel.',
        author: 'pan Weasley'
    }        
]

/*** FCE na získání API ***/
// API
const getQuote = (): void => {    
    setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * quotes.length);
        if (citationText) {
            citationText.textContent = quotes[randomNumber].text;
        }
        if (autor) {
            autor.textContent = quotes[randomNumber].author;
        }
        
    },100); 
}


/**Před akcí **/

getQuote()
/**** Akce ****/
if (nextCitation) {    
    nextCitation.addEventListener('click', getQuote);
}



