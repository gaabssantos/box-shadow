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
const ruleValues = document.querySelectorAll(".rule-values");
const rule = document.querySelector("#rule");

// Functions

// Events
[horizontal, vertical, blur, spread, color, opacity].forEach((element) => {
  element.addEventListener("input", (e) => {
    document.querySelector(`#${e.target.id}-text`).value = e.target.value;
    const horizontalValue = horizontal.value;
    const verticalValue = vertical.value;
    const blurValue = blur.value;
    const spreadValue = spread.value;
    const colorValue = color.value;
    const opacityValue = opacity.value;

    const hex = colorValue.replace("#", "");

    const r = parseInt(hex.substring(0, 2));
    const g = parseInt(hex.substring(2, 4));
    const b = parseInt(hex.substring(4, 6));

    const rgba = "rgba(" + r + "," + g + "," + b + "," + opacityValue + ")";

    const ruleValue = `
    ${
      shadow.checked ? "inset" : ""
    } ${horizontalValue}px ${verticalValue}px ${blurValue}px ${spreadValue}px ${rgba}`;

    box.style.boxShadow = ruleValue;

    ruleValues.forEach((rule) => {
      rule.innerHTML = ruleValue;
    });
  });
});

shadow.addEventListener("input", () => {
  const horizontalValue = horizontal.value;
  const verticalValue = vertical.value;
  const blurValue = blur.value;
  const spreadValue = spread.value;
  const colorValue = color.value;

  const hex = colorValue.replace("#", "");

  const r = parseInt(hex.substring(0, 2));
  const g = parseInt(hex.substring(2, 4));
  const b = parseInt(hex.substring(4, 6));

  const rgba = "rgba(" + r + "," + g + "," + b + "," + opacityValue + ")";

  const ruleValue = `
  ${
    shadow.checked ? "inset" : ""
  } ${horizontalValue}px ${verticalValue}px ${blurValue}px ${spreadValue}px ${rgba}`;

  box.style.boxShadow = ruleValue;

  ruleValues.forEach((rule) => {
    rule.innerHTML = ruleValue;
  });
});

rule.addEventListener("click", () => {
  const textCopy = rule.textContent;

  navigator.clipboard.writeText(textCopy);

  alert("Copiado com sucesso.");
});
