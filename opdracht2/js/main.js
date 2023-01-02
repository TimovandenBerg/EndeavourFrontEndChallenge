"use strict";
// import * as _ from 'lodash';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// api url
const collectie = "https://www.rijksmuseum.nl/api/nl/collection?key=qL9Y9yvJ&ps=100";
const rembrandt = "https://www.rijksmuseum.nl/api/nl/collection?key=qL9Y9yvJ&involvedMaker=Rembrandt+van+Rijn";
var api_url = collectie;
// getting api data
function getApi(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url);
        var data = yield response.json();
        console.log(data);
        showCards(data);
    });
}
getApi(api_url);
function showCards(data) {
    var card = document.getElementById("cards");
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
            </section>`;
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
function changeSearchLink(changeUrl) {
    const btn = document.getElementById("js--filterBtn");
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
function stashId(objectNumber) {
    console.log(objectNumber);
    localStorage.setItem("stashId", objectNumber);
}
