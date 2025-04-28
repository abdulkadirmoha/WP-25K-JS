/*
Luo HTML-tiedosto, jossa on <input>-kenttä ja <div>, jonka ID on displayText.
Kirjoita JavaScript-koodi, joka:
- Päivittää jatkuvasti <div>-elementin sisällön input-kentän arvolla sitä mukaa, kun käyttäjä kirjoittaa.
- Käyttää input-tapahtumaa, jotta päivitys tapahtuu reaaliajassa.
*/

document.getElementById("textInput").addEventListener("input", function(event){
    document.getElementById("textDisplay").textContent = event.target.value
})
document.querySelector("#textInput").addEventListener('input', function(event){
        document.querySelector('#textDisplay').textContent = event.target.value;
});