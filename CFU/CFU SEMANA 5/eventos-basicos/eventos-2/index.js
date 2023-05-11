const colorChange = document.querySelector('#color-change');

colorChange.addEventListener("mouseover", () => {
    colorChange.style.background = "brown";
});

// BONUS - Cambiar el color cada vez que el cursor pasa por encima.

colorChange.addEventListener("mouseover", () => {
    const color = randomColor();
    colorChange.style.background = color;
  });
   
  const randomColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };