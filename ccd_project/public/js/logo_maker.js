
//Interface 


//Logo

let boxArea;
let iconSelect;
let buttonExport;

//TEXT
let text;
let textText;
let sText;
let xText;
let yText;
let fText;
let cText;
let fontFamilyA = ["Nuosu SIL", "Cormorant Garamond", "Antic Slab", "Joan", "Roboto", "Open Sans", "Montserrat", "Oxygen", "Oleo Script", "Lobster", "Special Elite", "Rubik Microbe", "Amatic SC", "Pacifico", "Kaushan Script", "Berkshire Swash", "Inconsolata", "Cutive Mono", "Roboto Mono", "Space Mono"];

//ICON
let icon;
let wIcon;
let xIcon;
let yIcon;

//INPUT
let textInput;
let input;

//COLOR
let textInputSaturation;
let inputSaturation;
let textInputBrightness;
let inputBrightness;
let textInputHue;
let inputHue;

let imageCircle;
let saturateCircle = 0;
let brightnessCircle = 0;
let hueRotateCircle = 0;

//LOGOS
let button;
let sideDiv;
let txtInputDiv;
let txtInputDiv2;
let container;
let containerC;
let inputValue;
let description;
let descValue;

function setup() {
    stroke(255);
    frameRate(30);

    //Barra lateral
    sideDiv = createDiv();
    sideDiv.id("settings");
    sideDiv.style('display', 'none');
    sideDiv.style('width', '20vw');
    sideDiv.style('height', '100vh');
    sideDiv.style('background-color', '#FFD84F');
    sideDiv.style('position', 'fixed');
    sideDiv.style('top', '0');
    sideDiv.style('left', '0');

    input = createInput();
    input.class("Snd");
    input.style('border', 'none');
    input.style('border-bottom', '2px solid black');
    input.style('background-color', 'transparent');
    input.style('width', '32%');
    input.style('display', 'block');
    input.style('top', '25%');
    input.style('color', '#000000a1');


    description = createInput();
    description.class("Snd");
    description.style('border', 'none');
    description.style('border-bottom', '2px solid black');
    description.style('background-color', 'transparent');
    description.style('width', '32%');
    description.style('display', 'block');
    description.style('top', '25%');
    description.style('color', '#000000a1');

    descValue = description.value();
    inputValue = input.value();

    let textCor = createP("Color:");
    textCor.style('display', 'block');
    textCor.style('margin', '5% 0 2% 20px');

    let colorDivDiv = createDiv();
    colorDivDiv.id("colorDivDiv");
    colorDivDiv.style('display', 'flex');
    colorDivDiv.style('flex-direction', 'row');

    let colorDiv = createDiv();
    colorDiv.id("colorDiv");
    colorDiv.style('display', 'inline-block');
    colorDiv.style('margin-left', '20px');

    //INPUT SLIDE SATURATION
    textInputSaturation = createP("Saturation:");
    textInputSaturation.style('font-size', '15px');
    textInputSaturation.style('display', 'block');
    textInputSaturation.style('margin', '2% 0 2% 0');
    inputSaturation = createSlider(0, 255, 0);
    inputSaturation.id("inputSaturation");
    inputSaturation.style('display', 'block');
    inputSaturation.style('margin', '2% 0 10% 0');

    //INPUT SLIDE BRIGHTNESS
    textInputBrightness = createP("Brightness:");
    textInputBrightness.style('font-size', '15px');
    textInputBrightness.style('display', 'block');
    textInputBrightness.style('margin', '2% 0 2% 0');
    inputBrightness = createSlider(0, 255, 0);
    inputBrightness.style('display', 'block');
    inputBrightness.style('margin', '2% 0 10% 0');

    //INPUT SLIDE HUE
    textInputHue = createP("Hue:");
    textInputHue.style('font-size', '15px');
    textInputHue.style('display', 'block');
    textInputHue.style('margin', '2% 0 2% 0');
    inputHue = createSlider(0, 360, 0);
    inputHue.style('display', 'block');
    inputHue.style('margin', '2% 0 10% 0');

    imageCircle = createImg(
        'images/circle.png',
        'circle1'
    );

    imageCircle.style('display', 'inline-block');
    imageCircle.style('width', '50px');
    imageCircle.style('height', 'auto');
    imageCircle.style('margin', 'auto');

    let textIcon = createP("Icon:");
    textIcon.style('display', 'block');
    textIcon.style('margin', '5% 0 2% 20px');

    button = createButton('Generate');
    button.id("submit");
    button.value("Submit");
    button.style('display', 'block');
    button.style('position', 'absolute');
    button.style('left', '20px');
    button.style('bottom', '20px');
    button.style('padding', '10px');
    button.style('backgroundColor', '#FFF5D3');
    button.style('box-shadow', '0 2px 2px rgba(0, 0, 0, 0.25)');
    button.style('border', 'none');
    button.style('cursor', 'pointer');
    // drawButtonExport();

    //Container do conjunto de logos criados
    container = createDiv();
    container.style('width', '80vw');
    container.style('height', '100vh');
    container.style('position', 'absolute');
    container.style('left', '20vw');
    container.style('top', '0');

    containerC = createDiv();
    containerC.style('width', '60vw');
    containerC.style('height', 'auto');
    containerC.style('position', 'relative');
    containerC.style('top', '20px');
    containerC.style('left', '50%');
    containerC.style('transform', 'translateX(-50%)');

    txtInputDiv = selectAll('.anim')[1].elt;
    input.parent(txtInputDiv);

    txtInputDiv2 = selectAll('.anim')[2].elt;
    description.parent(txtInputDiv2);

    textCor.parent(sideDiv);
    textInputSaturation.parent(colorDiv);
    inputSaturation.parent(colorDiv);
    textInputBrightness.parent(colorDiv);
    inputBrightness.parent(colorDiv);
    textInputHue.parent(colorDiv);
    inputHue.parent(colorDiv);
    colorDiv.parent(colorDivDiv);
    imageCircle.parent(colorDivDiv);
    colorDivDiv.parent(sideDiv);

    textIcon.parent(sideDiv);
    button.parent(sideDiv);
    containerC.parent(container);
}

function draw() {
    button.mousePressed(searchConcept);
    saturateCircle = inputSaturation.value();
    brightnessCircle = inputBrightness.value();
    hueRotateCircle = inputHue.value();
    imageCircle.style('filter', 'invert(0.5) sepia(100%) saturate(' + random(0,255) + '%) hue-rotate(' + random(0,255) + 'deg) brightness(' + random(0,255) + '%)');
}

function next(selected, show) {
    document.getElementsByClassName('anim')[selected].style.animation = "leave";
    document.getElementsByClassName('anim')[selected].style.display = "none";
    document.getElementsByClassName('anim')[show].style.display = "block";

    if (selected == 2) {
        document.getElementsByClassName('anim')[selected].style.display = "none";
        searchConcept();
    }
}

function searchConcept() {
    let values = [];
    let splited = split(description.value(), ',');
    for (let i = 0 ; i<splited.length; i++) { 
    values.push(splited[i].toLowerCase());
    cNet('https://api.conceptnet.io/related/c/en/' + splited[i] + '?filter=/c/en&limit=2');
}
}

//Load info do API
let rand;

function loadInfo(result) {
    fetch('/' + result).then(function (res) {
        return res.json();
    }).then(function (data) {
        console.log(data);
        for (let i = 0; i < 20; i++) {
            rand = int(random(0, data.length));
            drawIcon(data[rand].preview_url);
        }
    }).catch(function (err) {
        console.error(err);
    })
}

//Web API do concept Net
function cNet(url) {
    fetch(url).then(function (res) {
        return res.json();
    }).then(function (data) {
        for (let i = 0; i < 2; i++) {
            let word = split(data.related[i]['@id'], '/');
            button.mousePressed(loadInfo(word[3]));
            const result = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(word)
            }
            fetch('/receive', result);
        }
    }).catch(function (err) {
        console.error(err);
    })
}


function drawIcon(url) {
    for (let i = 0; i < 1; i++) {
        wIcon = random(20, width);
        xIcon = random(0, 100 - wIcon);
        yIcon = random(10, 100 - wIcon);
        sText = 16;
        let textW = textWidth(text);
        xText = random(0, 100 - textW);
        yText = random(10, 100 - 25);

        let randomFontIndex = Math.floor(Math.random() * fontFamilyA.length);
        for (let j = 0; j < fontFamilyA.length; j++) {
            fText = fontFamilyA[randomFontIndex];
        }

        cText = "black";

        new drawIconClass(url, xIcon, yIcon, wIcon, textText, sText, xText, yText, fText, cText);
    }
}

class drawIconClass {
    constructor(urlIconC, xIconC, yIconC, wIconC, textTextC, sTextC, xTextC, yTextC, fTextC, cTextC) {
        boxArea = createDiv();
        boxArea.class('genBox');
        boxArea.style('width', '100px');
        boxArea.style('height', '100px');
        boxArea.style('position', 'relative');
        boxArea.style('display', 'inline-block');
        boxArea.style('margin', '4%');
        boxArea.style('background-color', 'white');
        boxArea.style('border', '1px solid black');

        colorMode(HSB, 255);

        icon = createImg(urlIconC);
        icon.addClass("icon");
        icon.style('width', wIconC + '%');
        icon.style('height', 'auto');
        icon.position(xIconC, yIconC);
        let bright = int(random(0,255));
        icon.style('filter', 'invert(0.5) sepia(100%) saturate(' + random(0,255) + '%) hue-rotate(' + random(0,255) + 'deg) brightness('+ bright + '%)');

        text = createP(input.value());
        text.style('font-family', fTextC);
        text.style('font-weight', '400');
        text.style('font-style', 'normal');
        text.style('font-size', sTextC + 'px');
        text.style('margin', 0);
        text.position(xTextC, yTextC);
        text.style('color', cTextC);
        text.style('color', 'white');
        text.style('text-shadow', '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000');

        if (bright !== 0) {
            text.style('color', 'black');
            text.style('text-shadow', 'none');
        }

        icon.parent(boxArea);
        text.parent(boxArea);
        boxArea.parent(containerC);
    }
}

function drawIcon(url) {
    for (let i = 0; i < 1; i++) {
        wIcon = random(20, width);
        xIcon = random(0, 100 - wIcon);
        yIcon = random(10, 100 - wIcon);
        sText = 16;
        let textW = textWidth(text);
        xText = random(0, 100 - textW);
        yText = random(10, 100 - 25);

        let randomFontIndex = Math.floor(Math.random() * fontFamilyA.length);
        for (let j = 0; j < fontFamilyA.length; j++) {
            fText = fontFamilyA[randomFontIndex];
        }

        cText = "black";

        new drawIconClass(url, xIcon, yIcon, wIcon, textText, sText, xText, yText, fText, cText);
    }
    selecionarIcons();
}


function drawButtonExport() {
    buttonExport = createButton('Export');
    buttonExport.id("export");
    buttonExport.value("Submit");
    buttonExport.mousePressed(saveInfo);
    buttonExport.style('position', 'fixed');
    buttonExport.style('right', '20px');
    buttonExport.style('bottom', '20px');
    buttonExport.style('padding', '10px');
    buttonExport.style('backgroundColor', '#FFF5D3');
    buttonExport.style('border', 'none');
    buttonExport.style('cursor', 'pointer');

    buttonExport.parent(containerC);
}

function selecionarIcons() {
    iconSelect = document.querySelectorAll('.genBox');
    let nClick = 0;
    for (let i = 0; i < iconSelect.length; i++) {
        iconSelect[i].addEventListener('click', function () {
            iconSelect[i].classList.add("divClicada");
            nClick++
            if (nClick === 2) {
                iconSelect[i].classList.remove("divClicada");
                nClick = 0;
            }
        })
    }
}