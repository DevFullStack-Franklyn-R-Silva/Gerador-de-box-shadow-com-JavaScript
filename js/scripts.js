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
        mozRule,
        cores,
        coresRef,
        opacidade,
        opacidadeRef,
        insetBox,
        botaoCopiar,
        texto
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
        this.cores = cores;
        this.coresRef = coresRef;
        this.opacidade = opacidade;
        this.opacidadeRef = opacidadeRef;
        this.insetBox = insetBox;
        this.botaoCopiar = botaoCopiar;
    }

    initialize() {
        this.horizontalRef.value = this.horizontal.value;
        this.verticalRef.value = this.vertical.value;
        this.spreadRef.value = this.spread.value;
        this.blurRef.value = this.blur.value;
        this.coresRef.value = this.cores.value;
        this.opacidadeRef.value = 1;
        this.insetBox.value;
        this.botaoCopiar.value;

        this.applyRule();
        this.showRule();
    }

    applyRule() {
        let boxAtivo = "";
        if (this.insetBox.checked) {
            boxAtivo = "inset";
        }
        this.previewBox.style.boxShadow = `${this.horizontalRef.value}px ${
            this.verticalRef.value
        }px ${this.blurRef.value}px ${this.spreadRef.value}px ${this.hex2rgba(
            this.coresRef.value,
            this.opacidadeRef.value
        )} ${boxAtivo}`;
        this.currentRule = this.previewBox.style.boxShadow;
    }

    showRule() {
        this.rule.innerText = this.currentRule;
        this.webkitRule.innerText = this.currentRule;
        this.mozRule.innerText = this.currentRule;

        let textoString = JSON.stringify(
            `box-shadow: ${this.rule.innerText}; -webkit-box-shadow: ${this.webkitRule.innerText}; -moz-box-shadow: ${this.mozRule.innerText};`
        );

        botaoCopiar.addEventListener("click", function (e) {
            const tirarAspas = textoString.replace(/"/g, "");
            navigator.clipboard.writeText(tirarAspas);
            document.execCommand("copy");
        });
    }

    updateValue(type, value) {
        switch (type) {
            case "horizontal":
                this.horizontalRef.value = value;
                break;
            case "vertical":
                this.verticalRef.value = value;
                break;
            case "blur":
                this.blurRef.value = value;
                break;
            case "spread":
                this.spreadRef.value = value;
                break;
            case "cores":
                this.coresRef.value = value;
                break;
            case "opacidade":
                this.opacidadeRef.value = value / 100;
                break;
            case "insetBox":
                this.insetBox.value = value;
                break;
            case "botaoCopiar":
                this.botaoCopiar.value = value;
                break;
        }

        this.applyRule();
        this.showRule();
    }
    //converte rgb ou hex para rgba
    hex2rgba = (hex, alpha = 1) => {
        const [r, g, b] = hex.match(/\w\w/g).map((x) => parseInt(x, 16));
        return `rgba(${r},${g},${b},${alpha})`;
    };
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

const cores = document.querySelector("#cores");
const coresRef = document.querySelector("#color-value");

const opacidade = document.querySelector("#opacidade");
const opacidadeRef = document.querySelector("#opacidade-value");

const insetBox = document.querySelector("#insetBox");

const botaoCopiar = document.querySelector("#copiarTexto");
const textoTela = document.querySelector("#texto");

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
    mozRule,
    cores,
    coresRef,
    opacidade,
    opacidadeRef,
    insetBox,
    botaoCopiar
);
boxShadow.initialize();

// Eventos
horizontal.addEventListener("input", (e) => {
    const value = e.target.value;

    boxShadow.updateValue("horizontal", value);
});

vertical.addEventListener("input", (e) => {
    const value = e.target.value;

    boxShadow.updateValue("vertical", value);
});

blur.addEventListener("input", (e) => {
    const value = e.target.value;

    boxShadow.updateValue("blur", value);
});

spread.addEventListener("input", (e) => {
    const value = e.target.value;

    boxShadow.updateValue("spread", value);
});

cores.addEventListener("input", (e) => {
    const value = e.target.value;

    boxShadow.updateValue("cores", value);
});

opacidade.addEventListener("input", (e) => {
    const value = e.target.value;

    boxShadow.updateValue("opacidade", value);
});

insetBox.addEventListener("input", (e) => {
    const value = e.target.value;

    boxShadow.updateValue("insetBox", value);
});

const listaDeTexto = ["Copiado com sucesso!"];
let index = 0;

botaoCopiar.addEventListener("click", function () {
    setTimeout(function () {
        document.querySelector("#texto").innerHTML =
            "Clique no quadro acima para copiar as regras";
    }, 3000);
    if (index + 1 == listaDeTexto.length) {
        index = 0;
    } else {
        index = index + 1;
    }

    textoTela.textContent = listaDeTexto[index];
});
