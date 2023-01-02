var artObject = localStorage.getItem("stashId");

var art_url = `https://www.rijksmuseum.nl/api/nl/collection/${artObject}?key=qL9Y9yvJ`;

// getting api data
async function getArtApi(url: RequestInfo | URL) {
    const response = await fetch(url);

    var data = await response.json();
    showDetail(data);
}

getArtApi(art_url);

function showDetail(data: {[x: string]: any; list: any; }) {
    var detailPagina: any = document.getElementById("detail");    
    var context = '';
    var artObject = data.artObject;
    console.log(artObject);
    // titel
    var title = artObject.title;
    // img
    var img = artObject.webImage.url;
    // beschrijving
    var description = artObject.description;
    // datum
    var date = artObject.dating.presentingDate;
    //maker
    var artist = artObject.principalMaker;
    // waar
    var place = artObject.productionPlaces[0];

    context += 
        `<section class="detail__titel">
            <h1>${title}</h1>
        </section>
        <section class="detail__img">
            <picture><img src="${img}"></img></picture>
            <p class="fs-500">Dit kunstwerk is gemaakt door: <spn class="red">${artist}</spn></p>        
        </section>
        <section>
            <p class="fs-500">${description}</p>
            <p class="fs-500">Het is gemaakt rond <spn class="red">${date}</spn> in <spn class="red">${place}</spn></p>
        </section>
        <section class="detail__terug">
            <a href="index.html"><button class="fs-400">Terug</button></a>
        </section>
        `
    ;

    detailPagina.innerHTML = context;
}



