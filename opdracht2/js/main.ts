// import * as _ from 'lodash';

// api url
const collectie = "https://www.rijksmuseum.nl/api/nl/collection?key=qL9Y9yvJ&ps=10";
const rembrandt = "https://www.rijksmuseum.nl/api/nl/collection?key=qL9Y9yvJ&involvedMaker=Rembrandt+van+Rijn";

var api_url = collectie;

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

    // console.log(data.artObjects[0]);
    for (let i = 0; i < artObjects.length; i++) {
        var id = artObjects[i].id;
        var objectNumber = artObjects[i].objectNumber;
        console.log(objectNumber);
        var title = artObjects[i].title;
        var img = artObjects[i].webImage.url;        
        context += 
            `<section class="cards__card">
                <picture><img src="${img}"></picture>
                <section class="cards__card__context">
                    <h1>${title}</h1>
                    <button class="fs-400" onClick="stashId('${objectNumber}')"><a href="detail-page.html">Bekijk</a></button>
                </section>
            </section>`
            ;
    }
    card.innerHTML = context;
}

function searchArtObject() {
    var input = document.getElementById("js--searchbar").value;
    input = input.toLowerCase();
    var x = document.getElementsByClassName("cards__card");    
    
    for (let i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        }
        else {
            x[i].style.display = "block";
        }
    }
}

function changeSearchLink(changeUrl: string) {
    const btn: any = document.getElementById("js--filterBtn");
    
    if (api_url === collectie) {
        api_url = changeUrl;
        btn.style.backgroundColor = "var(--clr-blue)";
    }
    else {
        api_url = collectie;
        btn.style.backgroundColor = "var(--clr-red)";
    }
    getApi(api_url);
}

function stashId(objectNumber: string) {
    console.log(objectNumber);
     
    localStorage.setItem("stashId", objectNumber);
}