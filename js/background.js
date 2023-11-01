const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random()*images.length)];

//const bgImage = document.createElement("img");

// bgImage.src = `img/${chosenImage}`;

// document.body.appendChild(bgImage);
// document.body.prependChild(bgImage); 
// ==> 바디의 가장 위에 오게 하려면 prepend를.

document.body.style.backgroundImage = `url('img/${chosenImage}')`;
