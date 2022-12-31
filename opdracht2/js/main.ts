// import * as _ from 'lodash';
console.log("hoi");

// api url
const api_url = "https://www.rijksmuseum.nl/api/nl/collection?key=qL9Y9yvJ";

// https://www.rijksmuseum.nl/api/nl/collection?key=qL9Y9yvJ&involvedMaker=Rembrandt+van+Rijn

// getting api data
async function getApi(url: RequestInfo | URL) {
    const response = await fetch(url);

    var data = await response.json();
    console.log(data);
    showCards(data);
}

getApi(api_url);

function showCards(data: {[x: string]: any; list: any; }) {
    var card: any = document.getElementById("cards") as HTMLElement;
    var context = '';
    var artObjects = data.artObjects; 

    console.log(card);
    console.log(artObjects[0]);

    // console.log(data.artObjects[0]);
    for (let i = 0; i < artObjects.length; i++) {
        var id = artObjects[i].id;
        var title = artObjects[i].title;
        var img = artObjects[i].webImage.url;        
        context += 
            `<section class="cards__card">
                <picture><img src="${img}"></picture>
                <section class="cards__card__context">
                    <h1>${title}</h1>
                    <button class="fs-400">Bekijk</button>
                </section>
            </section>`
            ;
    }

    card.innerHTML = context;
}