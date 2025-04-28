/*
Luo HTML tiedosto, jossa on <p> elementti ja nappi. 
Kirjoita JavaScript-koodi, joka vaihtaa tekstiosion näkyvyyttä - päälle ja pois - nappia painamalla.
 */
const button = document.getElementById("button");


button.addEventListener("click", function () {
  const text = document.getElementById("text");
  if (text.style.display === "none") {
    text.style.color = "red";
  } else {
      text.style.color = "blue";
      text.textContent = "off";
  }
});