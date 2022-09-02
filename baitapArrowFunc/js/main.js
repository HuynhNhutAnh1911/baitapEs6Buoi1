document.addEventListener(
  "contextmenu",
  function (color) {
    color.preventDefault();
  },
  !1
),
  (document.onkeydown = function (color) {
    return (
      123 != (color = color || window.event).keyCode &&
      (!color.ctrlKey || !color.shiftKey || 73 != color.keyCode) &&
      void 0
    );
  });
const colorList = [
  "pallet",
  "viridian",
  "pewter",
  "cerulean",
  "vermillion",
  "lavender",
  "celadon",
  "saffron",
  "fuschia",
  "cinnabar",
];
let container = document.getElementById("colorContainer");
(loadColorPick = () => {
  for (let color = 0; color < colorList.length; color++)
    container.innerHTML +=
      0 == color
        ? "<button class='color-button " + colorList[color] + " active'></button>"
        : "<button class='color-button " + colorList[color] + "'></button>";
}),
  loadColorPick();
let colorPicker = document.getElementsByClassName("color-button"),
  house = document.getElementById("house");
for (let color = 0; color < colorPicker.length; color++)
  colorPicker[color].addEventListener("click", function () {
    changeColor(colorList[color], color);
  });
changeColor = (color, e) => {
  for (let color = 0; color < colorPicker.length; color++)
    colorPicker[color].classList.remove("active");
  colorPicker[e].classList.add("active"), (house.className = "house " + color);
};
