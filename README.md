# EndeavourFrontEndChallenge
## Anagram
Het zoeken van woorden met dezelfde letters. Het idee van de code was om alle letters van elk woord te splitsen en vervolgens op afabetische volgorde te zetten. Hierna wordt er gekeken hoevaak dit voorkomt en bij welke woorden.
Dit wordt uiteindelijk geprint naar de console. Dat is wat de laatste for loop voor is. 

## Rijksmuseum
Hier wilde ik geen js framework gebruiken, omdat ik voor dit soort opdrachten altijd een framework heb gebruikt. React & Laravel. Met deze twee kan het gemakkelijk, maar ik wilde het proberen zonder. Wel wilden ik voor het eerst typescript proberen. 

Vrij snel leek het mij handig om ook de library lodash te gebruiken om de data van de API te verwerken. Echter kreeg ik meerdere errors bij het gebruik hiervan. Ik moest meerdere keuzes maken van hoe ik de locale server wilden draaien en of ik lodash moest gebruiken. Uiteidelijk heb ik ervoor gekozen om geen gebruik te maken van lodash.

De app heeft meerdere functies. Het begint bij het inladen van 100 kunstwerken. De kaart bestaat uit een afbeelding, titel en een knop waarmee je naar de detailpagina gaat. Je kan ook zoeken in de kunstwerken zelf. Echter kan er alleen worden gezocht op titels en niet op data attributen. Om hierop een eningzins gemak bij de gebruiker toe te voegen is er een knop met Rembrandt van Rijn erop. Hiermee worden meteen alle kunstwerken getoont van de kunstenaar. Het idee is dat er meerdere van dat soort knoppen komen te staan. 

De detai pagina laat meer detail zien van het kunstwerk dat je hebt aangeklikt.