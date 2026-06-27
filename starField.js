const starField = document.querySelector('.star-field');

const stars = [
  "https://raw.githubusercontent.com/Guiomino/assets/7b26d5c73fc024be2e10175762739d9d71199d78/Assets/Stars/StarWhite.svg",
  "https://raw.githubusercontent.com/Guiomino/assets/7b26d5c73fc024be2e10175762739d9d71199d78/Assets/Stars/StarHot.svg",
  "https://raw.githubusercontent.com/Guiomino/assets/7b26d5c73fc024be2e10175762739d9d71199d78/Assets/Stars/StarCold.svg"
];

// distribution centrée (cloche légère)
function centerBias() {
  return (Math.random() + Math.random() + Math.random()) / 3;
}

function createStar() {
  const wrapper = document.createElement("div");
  wrapper.classList.add("star-wrapper");

  const img = document.createElement("img");
  img.classList.add("star");

  // type d’étoile
  const type = Math.random();
  if (type < 0.6) img.src = stars[0];
  else if (type < 0.8) img.src = stars[1];
  else img.src = stars[2];

  // taille
  const sizeRand = Math.random();
  if (sizeRand < 0.6) img.classList.add("small");
  else if (sizeRand < 0.9) img.classList.add("medium");
  else img.classList.add("large");

  wrapper.appendChild(img);

  // marges
  const isMobile = window.innerWidth < 768;

  const marginX = isMobile ? 0 : 8;
  const marginY = isMobile ? 0 : 1;

  const top = marginY + centerBias() * (100 - marginY * 2);
  const left = marginX + centerBias() * (100 - marginX * 2);

  wrapper.style.top = top + "vh";
  wrapper.style.left = left + "vw";

  // clusters légers
  const cluster = Math.random() < 0.25;
  if (cluster) {
    const x = (Math.random() - 0.5) * 40;
    const y = (Math.random() - 0.5) * 40;
    wrapper.style.transform = `translate(${x}px, ${y}px)`;
    wrapper.style.opacity = "0.95";
  }

  starField.appendChild(wrapper);
}

// génération
for (let i = 0; i < 150; i++) {
  createStar();
}