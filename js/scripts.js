// Selections
const horizontalText = document.querySelector("#horizontal-text");
const verticalText = document.querySelector("#vertical-text");
const blurText = document.querySelector("#blur-text");
const spreadText = document.querySelector("#spread-text");
const colorText = document.querySelector("#color-text");
const opacityText = document.querySelector("#opacity-text");

const horizontal = document.querySelector("#horizontal");
const vertical = document.querySelector("#vertical");
const blur = document.querySelector("#blur");
const spread = document.querySelector("#spread");
const color = document.querySelector("#color");
const opacity = document.querySelector("#opacity");

const shadow = document.querySelector("#shadow");

const box = document.querySelector("#box");

// Functions

// Events
[horizontal, vertical, blur, spread, color, opacity].forEach((element) => {
  element.addEventListener("input", (e) => {
    document.querySelector(`#${e.target.id}-text`).value = e.target.value;
    box.style.boxShadow = `1px 1px 1px #000`;
  });
});
