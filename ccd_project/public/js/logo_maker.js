//TEXT
/*var font;
var textSize;
var textLogo;
var textW;
var xText;
var yText;*/

//---------------
//NOVO
let boxArea;
let iconSelect;
let buttonExport;
//NOVO
let text;
let textText;
let sText;
let xText;
let yText;
let fText;
let cText;
let fontFamilyA = ["Nuosu SIL", "Cormorant Garamond", "Antic Slab", "Joan", "Roboto", "Open Sans", "Montserrat", "Oxygen", "Oleo Script", "Lobster", "Special Elite", "Rubik Microbe", "Amatic SC", "Pacifico", "Kaushan Script", "Berkshire Swash", "Inconsolata", "Cutive Mono", "Roboto Mono", "Space Mono"];
//NOVO
let icon;
let urlIcon;
let wIcon;
let xIcon;
let yIcon;
//---------------

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
//let icon;
let button;
let sideDiv;
let container;
let containerC;
let inputValue;

function preload() {

    // httpGet('https://api.conceptnet.io/related/c/en/'+inputValue+'?filter=/c/en', 'json', false, function(data){
    // for(let i =0; i <5; i++){     
    // console.log(data.related[i]);
    // }
    //  });
}

function setup() {
    stroke(255);
    frameRate(30);

    //Barra lateral
    sideDiv = createDiv();
    sideDiv.id("settings");
    sideDiv.style('width', '20vw');
    sideDiv.style('height', '100vh');
    sideDiv.style('background-color', '#FFD84F');
    sideDiv.style('position', 'fixed');
    sideDiv.style('top', '0');
    sideDiv.style('left', '0');

    textInput = createP("Brands Name:");
    textInput.style('display', 'block');
    textInput.style('margin', '5% 0 2% 20px');

    input = createInput();
    input.id("BrandInput");
    input.style('border', 'none');
    input.style('border-bottom', '2px solid black');
    input.style('background-color', 'transparent');
    input.style('display', 'block');
    input.style('margin', '0 0 10% 20px');
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

    //imageCircle.style('margin', '10% 0 10% 5%');
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
    drawButtonExport();

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

    textInput.parent(sideDiv);
    input.parent(sideDiv);

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

    //console.log(inputSaturation.value());
    saturateCircle = inputSaturation.value();
    //console.log(inputBrightness.value());
    brightnessCircle = inputBrightness.value();
    //console.log(inputHue.value());
    hueRotateCircle = inputHue.value();

    imageCircle.style('filter', 'invert(0.5) sepia(100%) saturate(' + saturateCircle + '%) hue-rotate(' + hueRotateCircle + 'deg) brightness(' + brightnessCircle + '%)');
}

function searchConcept() {
    for (let i = 0; i < 10; i++) {
        let checkbox = select('#c' + i).elt;

        let values = [];
        if (checkbox.checked == true) {
            values.push(checkbox.value);
            for (let j = 0; j < values.length; j++) {
                cNet('https://api.conceptnet.io/related/c/en/' + values[j] + '?filter=/c/en');
            }
        }
        ;
    }
}

//Load info do APK
function loadInfo(result) {
    fetch('/' + result).then(function (res) {
        return res.json();
    }).then(function (data) {
        console.log(data);
        data.forEach(function (el) {
            drawIcon(el.preview_url);
            selecionarIcons();
            //buttonExport.mousePressed(exportIcon());
        });
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
            loadInfo(word[3]);
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
        icon.style('filter', 'invert(0.5) sepia(100%) saturate(' + saturateCircle + '%) hue-rotate(' + hueRotateCircle + 'deg) brightness(' + brightnessCircle + '%)');

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

        if (brightnessCircle !== 0) {
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
        wIcon = random(20, 80);
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

function drawButtonExport() {
    buttonExport = createButton('Export');
    buttonExport.id("export");
    buttonExport.value("Submit");
    buttonExport.mousePressed(saveInfo);
    //buttonExport.style('display', 'block');
    buttonExport.style('position', 'fixed');
    buttonExport.style('right', '20px');
    buttonExport.style('bottom', '20px');
    buttonExport.style('padding', '10px');
    buttonExport.style('backgroundColor', '#FFF5D3');
    buttonExport.style('border', 'none');
    buttonExport.style('cursor', 'pointer');

    buttonExport.parent(containerC);
}

/*
function drawIcon(url) {
    let boxArea = createDiv();
    let icon = createImg(url);
    let text = createP(input.value());
    text.style('margin', 0);

    boxArea.class('genBox');
    boxArea.style('width', '100px');
    boxArea.style('height', '100px');
    boxArea.style('position', 'relative');
    boxArea.style('display', 'inline-block');
    boxArea.style('margin', '4%');
    boxArea.style('background-color', 'white');
    boxArea.style('border', '1px solid black');

    colorMode(HSB, 255);

    icon.style('filter', 'invert(0.5) sepia(100%) saturate(' + saturateCircle + '%) hue-rotate(' + hueRotateCircle + 'deg) brightness(' + brightnessCircle + '%)');

    let wIcon = random(50, 100);
    icon.style('width', wIcon + '%');
    icon.style('height', 'auto');
    let xIcon = random(0, boxArea.width - wIcon);
    let yIcon = random(10, boxArea.height - icon - height);
    icon.position(xIcon, yIcon);

    let textSize = 16;
    let textW = textWidth(text);
    xText = random(0, boxArea.width - textW);
    yText = random(10, boxArea.height - textSize);
    text.position(xText, yText);

    let randomFontF = getRandomFamilyFont();
    console.log("randomFontF " + randomFontF);
    let randomFontCategory = getCategoryRandomFont();
    console.log("randomFontCategory " + randomFontCategory);
    text.style('font-family', "'" + randomFontF + "'" + ', ' + randomFontCategory);
    console.log('font-family', "'" + randomFontF + "'" + ', ' + randomFontCategory);
    text.style('src', 'url(' + getFileRandomFont() + ') format(ttf)');
    console.log('src', 'url(' + getFileRandomFont() + ') format(ttf)');
    text.style('font-weight', '400');
    text.style('font-style', 'normal'); //italic
    text.style('font-size', textSize + 'px');

    text.style('color', 'white');
    text.style('text-shadow', '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000');

    if (brightnessCircle !== 0) {
        text.style('color', 'black');
        text.style('text-shadow', 'none');
    }

    buttonExport = createButton('Export');
    buttonExport.id("export");
    buttonExport.value("Submit");
    buttonExport.mousePressed(exportIcon);
    buttonExport.style('position', 'absolute');
    buttonExport.style('right', '20px');
    buttonExport.style('bottom', '20px');
    buttonExport.style('padding', '10px');
    buttonExport.style('background-color', '#FFF5D3');
    buttonExport.style('border', 'none');
    buttonExport.style('cursor', 'pointer');

    icon.parent(boxArea);
    text.parent(boxArea);
    buttonExport.parent(container);
    boxArea.parent(containerC);

    //SELECIONAR DIV CLICADA----------------------------------------------------
    let iconSelect = document.querySelectorAll('.genBox');
    let nClick = 0;
    for (let i = 0; i < iconSelect.length; i++) {
        iconSelect[i].addEventListener('click', function () {
            //iconSelect[i].style.border = '2px solid green';
            iconSelect[i].classList.add("divClicada");
            nClick++
            if (nClick === 2) {
                //iconSelect[i].style.border = 'none';
                iconSelect[i].classList.remove("divClicada");
                nClick = 0;
            }
        })
    }
}*/

function selecionarIcons() {
    iconSelect = document.querySelectorAll('.genBox');
    let nClick = 0;
    for (let i = 0; i < iconSelect.length; i++) {
        iconSelect[i].addEventListener('click', function () {
            iconSelect[i].classList.add("divClicada");
            nClick++
            if (nClick === 2) {
                //iconSelect[i].style.border = 'none';
                iconSelect[i].classList.remove("divClicada");
                nClick = 0;
            }
        })
    }
}

let iconSave;
let textSave;
let divSave;

let xTextSave;
let tTextSave;
let fTextSave;
let xIconSave;
let tIconSave;
let wIconSave;
let hIconSave;
let urlIconSave;

function saveInfo() {
    divSave = document.querySelectorAll('.divClicada');
    for (let i = 0; i < divSave.length; i++) {
        console.log(divSave[i]);

        iconSave = document.querySelector('.divClicada>img');
        textSave = document.querySelector('.divClicada>p');
        console.log(iconSave);
        console.log(textSave);

        //https://zellwk.com/blog/css-values-in-js/ HOW TO GET VALUES FROM STYLE CSS DE ELEMENTO
        let xTS = textSave.style.left;
        xTextSave = xTS.substr(0, xTS.indexOf('p'));
        //console.log('left text: ' + xTextSave);
        let tTS = textSave.style.top;
        tTextSave = tTS.substr(0, tTS.indexOf('p'));
        console.log('top text: ' + tTextSave);
        fTextSave = textSave.style.fontFamily;
        //console.log('family text: ' + fTextSave);

        let xIS = iconSave.style.left;
        xIconSave = xIS.substr(0, xIS.indexOf('p'));
        //console.log('left icon: ' + xIconSave);
        let tIS = iconSave.style.top;
        tIconSave = tIS.substr(0, tIS.indexOf('p'));
        //console.log('top icon: ' + tIconSave);
        let wIS = iconSave.style.width;
        wIconSave = wIS.substr(0, wIS.indexOf('%'));
        //console.log('width icon: ' + wIconSave);
        hIconSave = iconSave.style.height;
        //console.log('height icon: ' + hIconSave);
        urlIconSave = iconSave.src;

    }
    canvasExport();
}

/*function canvasExport() {
    console.clear();
    console.log('left text: ' + xTextSave);
    console.log('top text: ' + tTextSave);
    console.log('family text: ' + fTextSave);
    console.log('left icon: ' + xIconSave);
    console.log('top icon: ' + tIconSave);
    console.log('width icon: ' + wIconSave);
    console.log('height icon: ' + hIconSave);
    console.log('url icon: ' + urlIconSave);
    console.log(input.value());

    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    console.log(ctx.font = "16px "+fTextSave);
    ctx.font = "16px "+fTextSave
    ctx.fillText(input.value(), xTextSave, 50);

    //https://www.html5canvastutorials.com/tutorials/html5-canvas-image-size/
    let imageObj = new Image();
    imageObj.onload = function() {
        console.log("imageObj.width " + imageObj.width);
        console.log("wIconSave " + wIconSave);
        ctx.drawImage(imageObj, xIconSave, tIconSave, imageObj.width/2, imageObj.height/2);
    };
    imageObj.src = urlIconSave;

    //let img = document.getElementsByClassName("icon")[0];
    //ctx.drawImage(img,xIconSave, tIconSave);
}*/

/*function exportIcon() {
    //EXPORTAR DIV CLICADA----------------------------------------------------
        let divClicada = document.querySelectorAll('.divClicada');
        for (let j = 0; j < divClicada.length; j++) {
            html2canvas(divClicada[j]).then(function (canvas) {
                document.getElementById('result').appendChild(canvas);

                let cvs = document.querySelector("canvas");
                let dataURI = cvs.toDataURL("image/jpeg");
                let downloadLink = document.querySelector("#result>a");
                downloadLink.href = dataURI;
                downloadLink.download = "div2canvasimage.jpg";
                console.log(dataURI);
            });
            document.getElementById('result').style.display = "block";
        }
    //https://b.codewithsundeep.com/2022/05/convert-html-to-canvas-and-canvas-to.html
    //https://www.youtube.com/watch?v=4cFtRjF5WtM&ab_channel=CodeWithSundeep
}*/


