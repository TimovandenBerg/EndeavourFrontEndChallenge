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
    console.log("Ik ben er");
    var context = '';
    var artObject = data.artObject;
    console.log(artObject);
     
}



