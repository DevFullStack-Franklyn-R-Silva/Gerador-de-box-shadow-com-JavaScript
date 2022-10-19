class BoxShadowGenerator {
    constructor(
        horizontal,
        horizontalRef,
        vertical,
        verticalRef,
        blur,
        blurRef,
        spread,
        spreadRef,
        previewBox,
        rule,
        webkitRule,
        mozRule
    ) {
        this.horizontal = horizontal;
        this.horizontalRef = horizontalRef;
        this.vertical = vertical;
        this.verticalRef = verticalRef;
        this.blur = blur;
        this.blurRef = blurRef;
        this.spread = spread;
        this.spreadRef = spreadRef;
        this.previewBox = previewBox;
        this.rule = rule;
        this.webkitRule = webkitRule;
        this.mozRule = mozRule;
    }
}

// Selecao de elementos
const horizontal = document.querySelector("#horizontal");
const horizontalRef = document.querySelector("#horizontal-value");
const vertical = document.querySelector("#vertical");
const verticalRef = document.querySelector("#vertical-value");
const blur = document.querySelector("#blur");
const blurRef = document.querySelector("#blur-value");
const spread = document.querySelector("#spread");
const spreadRef = document.querySelector("#spread-value");

const previewBox = document.querySelector("#box");

const rule = document.querySelector("#rule span");
const webkitRule = document.querySelector("#webkit-rule span");
const mozRule = document.querySelector("#moz-rule span");

const boxShadow = new BoxShadowGenerator(
    horizontal,
    horizontalRef,
    vertical,
    verticalRef,
    blur,
    blurRef,
    spread,
    spreadRef,
    previewBox,
    rule,
    webkitRule,
    mozRule
);
console.log(boxShadow);
// Eventos
