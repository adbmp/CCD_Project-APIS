//TEXT
var font;
var textSize;
var textLogo;
var textW;
var xText;
var yText;

//input
let textInput;
let input;
//let PickedColor;
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

//logos 
let icon;
let button;
let buttonExport;
let sideDiv;
let container;
let containerC;
let inputValue = 'flower';

let valueExport = false;

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
    //sideDiv.style('border-right', '1px solid black');
    sideDiv.style('position', 'absolute');
    //sideDiv.style('display', 'inline-block');
    sideDiv.style('top', '0');
    sideDiv.style('left', '0');

    textInput = createP("Nome da marca:");
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

    let textCor = createP("Cor:");
    textCor.style('display', 'block');
    textCor.style('margin', '5% 0 2% 20px');

    //PickedColor = createColorPicker("#D40C3E");
    //PickedColor.style('margin', '0 0 10% 2%');
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
    inputSaturation.style('display', 'block');
    inputSaturation.style('margin', '2% 0 10% 0');
    //createSlider(min, max, [value], [step])

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

    button = createButton('Generate');
    button.id("submit");
    button.value("Submit");
    button.mousePressed(loadInfo);
    button.style('display', 'block');
    button.style('position', 'absolute');
    button.style('left', '20px');
    button.style('bottom', '20px');
    button.style('margin', '5%');
    button.style('padding', '10px');
    button.style('backgroundColor', '#FFF5D3');
    button.style('shadow', '0 2px 2px rgba(0, 0, 0, 0.25)');
    button.style('border', 'none');
    button.style('cursor', 'pointer');

    //Container do conjunto de logos criados
    container = createDiv();
    container.style('width', '80vw');
    container.style('height', '100vh');
    container.style('position', 'absolute');
    //container.style('display', 'inline-block');
    container.style('left', '20vw');
    container.style('top', '0');

    containerC = createDiv();
    containerC.style('width', '60vw');
    containerC.style('height', 'auto');
    containerC.style('position', 'relative');
    containerC.style('left', '50%');
    containerC.style('top', '50%');
    containerC.style('transform', 'translateX(-50%) translateY(-50%)');

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


    //PickedColor.parent(sideDiv);
    button.parent(sideDiv);
    containerC.parent(container);
}

function draw() {
    /*
        let linkHead = document.createElement('link');
        linkHead.type = 'text/css';
        linkHead.rel = 'stylesheet';
        document.getElementById('linkHead').appendChild(link);
        linkHead.href = 'http://fonts.googleapis.com/css?family=' + randomFontF;
    */

    //console.log(inputSaturation.value());
    saturateCircle = inputSaturation.value();
    //console.log(inputBrightness.value());
    brightnessCircle = inputBrightness.value();
    //console.log(inputHue.value());
    hueRotateCircle = inputHue.value();

    imageCircle.style('filter', 'invert(0.5) sepia(100%) saturate(' + saturateCircle + '%) hue-rotate(' + hueRotateCircle + 'deg) brightness(' + brightnessCircle + '%)');


}

module.exports = inputValue;

//Load info do APK
function loadInfo() {
    valueExport = true;
    fetch('/' + input.value()).then(function (res) {
        return res.json();
    }).then(function (data) {
        console.log(data);
        data.forEach(function (el) {
            drawIcon(el.preview_url);
        });
    }).catch(function (err) {
        console.error(err);
    })
}

//"canvas"/div onde irá ser desenhado o icon + texto
function drawIcon(url) {
    let boxArea = createDiv();
    let icon = createImg(url);
    let text = createP(input.value());

    boxArea.class('genBox');
    boxArea.style('width', '100px');
    boxArea.style('height', '100px');
    boxArea.style('position', 'relative');
    boxArea.style('display', 'inline-block');
    boxArea.style('margin', '4%');
    boxArea.style('background-color', 'white');
    boxArea.style('border', '1px solid black');

    colorMode(HSB, 255);
    //console.log(PickedColor.color());
    //let huePickedColor = hue(PickedColor.color());
    //let saturationPickedColor = saturation(PickedColor.color());
    //let brightnessPickedColor = brightness(PickedColor.color());
    //console.log(huePickedColor);
    //console.log(saturationPickedColor);
    //console.log(brightnessPickedColor);

    icon.style('filter', 'invert(0.5) sepia(100%) saturate(' + saturateCircle + '%) hue-rotate(' + hueRotateCircle + 'deg) brightness(' + brightnessCircle + '%)');
    //icon.style('filter', 'invert(0.5) sepia(100%) saturate('+saturationPickedColor/100+') hue-rotate('+map(huePickedColor,0,255,0,360)+'deg) brightness('+brightnessPickedColor/100+')');

    //icon.style('width', '100%');
    //icon.style('height', 'auto');
    let wIcon = random(50, 100);
    icon.style('width', wIcon + '%');
    icon.style('height', 'auto');
    let xIcon = random(0, boxArea.width - wIcon);
    let yIcon = random(10, boxArea.height - icon - height);
    icon.position(xIcon, yIcon);

    // blur()
    // brightness()
    // contrast()
    // drop-shadow()
    // grayscale()
    // hue-rotate()
    // invert()
    // opacity()
    // saturate()
    // sepia()
    // url() – for applying SVG filters
    // custom() – “coming soon”

    let textSize = 16;
    let textW = textWidth(text);
    let textH = textSize;
    xText = random(0, boxArea.width - textW);
    yText = random(10, boxArea.height - textH);
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
    //text.style('-webkit-text-stroke-width', '0.5px');
    //text.style('-webkit-text-stroke-color', 'black');
    text.style('text-shadow', '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000');

    if (brightnessCircle !== 0 /*|| ((xText+textW)<xIcon || (xText)>(xIcon+wIcon))*/) {
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
    buttonExport.style('backgroundColor', '#FFF5D3');
    buttonExport.style('shadow', '0 2px 2px rgba(0, 0, 0, 0.25)');
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
}

function exportIcon() {
    //EXPORTAR DIV CLICADA----------------------------------------------------
   /* console.log("olá");
    let divClicada = document.querySelectorAll('.divClicada');
    for (let j = 0; j < divClicada.length; j++) {
        html2canvas(divClicada[j]).then(function(canvas) {
            document.getElementById('result').appendChild(canvas);

            let cvs = document.querySelector("canvas");
            let dataURI = cvs.toDataURL("image/jpeg");
            let downloadLink = document.querySelector("#result>a");
            downloadLink.href = dataURI;
            downloadLink.download = "div2canvasimage.jpg";
            console.log(dataURI);
        });
        document.getElementById('result').style.display = "block";
    }*/
    //https://b.codewithsundeep.com/2022/05/convert-html-to-canvas-and-canvas-to.html
    //https://www.youtube.com/watch?v=4cFtRjF5WtM&ab_channel=CodeWithSundeep
}

//WEB API DO CONCEPT NET 
function cNet(url) {
    fetch(url).then(function (res) {
        return res.json();
    }).then(function (data) {
        for (let i = 0; i < 2; i++) {
            let word = split(data.related[i]['@id'], '/');
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