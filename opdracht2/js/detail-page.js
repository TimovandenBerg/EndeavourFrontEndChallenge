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
var artObject = localStorage.getItem("stashId");
var art_url = `https://www.rijksmuseum.nl/api/nl/collection/${artObject}?key=qL9Y9yvJ`;
// getting api data
function getArtApi(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url);
        var data = yield response.json();
        showDetail(data);
    });
}
getArtApi(art_url);
function showDetail(data) {
    console.log("Ik ben er");
    var context = '';
    var artObject = data.artObject;
    console.log(artObject);
}
