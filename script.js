document.querySelector(".title").innerHTML = "Banda Favorita";

let image = document.querySelector(".photo");
let img1 = document.createElement("img");
img1.src="images/perfil.jpeg";
image.appendChild(img1);

document.querySelector(".me").innerHTML = "Quem sou eu?";
document.querySelector(".name").innerHTML = "Nome: Pedro Lucas De Castro Silva";
document.querySelector(".age").innerHTML = "Idade: 18 anos";
document.querySelector(".state").innerHTML = "Estado: Minas Gerais";



document.querySelector(".hobby").innerHTML = "Imagine Dragons";
document.querySelector(".desc").innerHTML = "Imagine Dragons (formed 2008) emerged from the Las Vegas, Nevada rock scene to become one of the world's top rock bands beginning in 2012. Pegged initially as an alternative rock band, they combined elements of pop, rock, and electronic music to storm the mainstream music charts.";
document.querySelector(".link").innerHTML = "Spotify";
document.querySelector(".link").href="https://open.spotify.com/artist/53XhwfbYqKCa1cC15pYq2q?si=l8Dq6LpKTlu7hxMz36i6PA";
let animes = document.querySelector(".animes");

let img2 = document.createElement("img");
img2.src="images/demons.png";
animes.appendChild(img2);

let img3 = document.createElement("img");
img3.src="images/enemy.png";
animes.appendChild(img3);

let img4 = document.createElement("img");
img4.src="images/birds.png";
animes.appendChild(img4);