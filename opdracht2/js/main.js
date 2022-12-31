"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// import * as _ from 'lodash';
console.log("hoi");
// api url
const api_url = "https://www.rijksmuseum.nl/api/nl/collection?key=qL9Y9yvJ";
// https://www.rijksmuseum.nl/api/nl/collection?key=qL9Y9yvJ&involvedMaker=Rembrandt+van+Rijn
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
            </section>`;
    }
    card.innerHTML = context;
}
