
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

    //TEXT
    console.log('font ttf ', localStorage.getItem("fileRandomFontStorage"));
    font = loadFont(localStorage.getItem("fileRandomFontStorage"));

    // textLogo = "GOATS";
    // textW = textWidth(textLogo);

    // //TO DO: Alterar tamanho fonte!!
    // textSize = 12;
    // if (textW > widthCanvas) {
    //     textSize = 5;
    // }

    //Barra lateral
    sideDiv = createDiv();
    sideDiv.id("settings");
    sideDiv.style('width', '20vw');
    sideDiv.style('height', '100vh');
    sideDiv.style('background-color', '#ffe61d');
    sideDiv.style('position', 'absolute');
    //sideDiv.style('display', 'inline-block');
    sideDiv.style('top', '0');
    sideDiv.style('left', '0');

    textInput = createP("Nome da marca:");
    textInput.style('display', 'block');
    textInput.style('margin', '2% 0 2% 2%');

    input = createInput();
    input.id("BrandInput");
    input.style('border', 'none');
    input.style('border-bottom', '2px solid black');
    input.style('background-color', 'transparent');
    input.style('display', 'block');
    input.style('margin', '0 0 10% 2%');
    inputValue = input.value();

    //PickedColor = createColorPicker("#D40C3E");
    //PickedColor.style('margin', '0 0 10% 2%');

    //INPUT SLIDE SATURATION
    textInputSaturation = createP("Saturation:");
    textInputSaturation.style('display', 'block');
    textInputSaturation.style('margin', '2% 0 2% 2%');
    inputSaturation = createSlider(0, 255, 0);
    //createSlider(min, max, [value], [step])

    //INPUT SLIDE BRIGHTNESS
    textInputBrightness = createP("Brightness:");
    textInputBrightness.style('display', 'block');
    textInputBrightness.style('margin', '2% 0 2% 2%');
    inputBrightness = createSlider(0, 255, 0);

    //INPUT SLIDE HUE
    textInputHue = createP("Hue:");
    textInputHue.style('display', 'block');
    textInputHue.style('margin', '2% 0 2% 2%');
    inputHue = createSlider(0, 360, 0);

    imageCircle = createImg(
        'images/circle.png',
        'circle1'
    );

    imageCircle.style('margin', '0 0 10% 2%');

    button = createButton('Generate');
    button.id("submit");
    button.value("Submit");
    button.mousePressed(loadInfo);
    button.style('display','block');
    button.style('margin','2%');
    button.style('padding','10px');
    button.style('backgroundColor','#F4F4F4');
    button.style('shadow','0 2px 2px rgba(0, 0, 0, 0.25)');
    button.style('border','none');
    button.style('cursor','pointer');

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
    containerC.style('height', '100vh');
    containerC.style('position', 'relative');
    containerC.style('left', '50%');
    containerC.style('transform', 'translateX(-50%)');

    textInput.parent(sideDiv);
    input.parent(sideDiv);

    textInputSaturation.parent(sideDiv);
    inputSaturation.parent(sideDiv);
    textInputBrightness.parent(sideDiv);
    inputBrightness.parent(sideDiv);
    textInputHue.parent(sideDiv);
    inputHue.parent(sideDiv);
    imageCircle.parent(sideDiv);

    //PickedColor.parent(sideDiv);
    button.parent(sideDiv);
    containerC.parent(container);

    //let main = document.getElementsByTagName("main")[0];
    //sideDiv.parent(main);
    //container.parent(main);

    //selectIcon(); //ISTO NÃO PERTENCE A ESTA LINHA. MUDAR DE SÍTIO
}

function draw() {
    console.log(inputSaturation.value());
    saturateCircle = inputSaturation.value();
    console.log(inputBrightness.value());
    brightnessCircle = inputBrightness.value();
    console.log(inputHue.value());
    hueRotateCircle = inputHue.value();

    imageCircle.style('filter', 'invert(0.5) sepia(100%) saturate('+saturateCircle+'%) hue-rotate('+hueRotateCircle+'deg) brightness('+brightnessCircle+'%)');
}

  module.exports = inputValue;

//Load info do APK
function loadInfo () {
    valueExport = true;
    fetch('/'+input.value()).then(function(res) {
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
function drawIcon(url){
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
    //boxArea.mousePressed(selectIcon);

    colorMode(HSB, 255);
    //console.log(PickedColor.color());
    //let huePickedColor = hue(PickedColor.color());
    //let saturationPickedColor = saturation(PickedColor.color());
    //let brightnessPickedColor = brightness(PickedColor.color());
    //console.log(huePickedColor);
    //console.log(saturationPickedColor);
    //console.log(brightnessPickedColor);

    icon.style('filter', 'invert(0.5) sepia(100%) saturate('+saturateCircle+'%) hue-rotate('+hueRotateCircle+'deg) brightness('+brightnessCircle+'%)');
    //icon.style('filter', 'invert(0.5) sepia(100%) saturate('+saturationPickedColor/100+') hue-rotate('+map(huePickedColor,0,255,0,360)+'deg) brightness('+brightnessPickedColor/100+')');

    //icon.style('width', '100%');
    //icon.style('height', 'auto');
    let wIcon = random(50, 100);
    icon.style('width', wIcon + '%');
    icon.style('height', 'auto');
    let xIcon = random(0, boxArea.width-wIcon);
    let yIcon = random(10, boxArea.height-icon-height);
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

    let textW = textWidth(text);
    let textH = 0 /*textAscent(text)*/;
    xText = random(0, boxArea.width-textW);
    yText = random(10, boxArea.height-textH);

    text.position(xText, yText);
    // text.style('font-family', loadFont(localStorage.getItem("fileRandomFontStorage")));
    // head.appendChild(document.createElement('link').setAttribute('href', fileRandomFont));

    let randomFontF = getRandomFamilyFont();
    console.log("randomFontF " + randomFontF);
    let randomFontCategory = getCategoryRandomFont();
    console.log("randomFontCategory " + randomFontCategory);
    text.style('font-family', "'" + randomFontF + "'" + ', ' + randomFontCategory);
    console.log('font-family', "'" + randomFontF + "'" + ', ' + randomFontCategory);
    text.style('font-weight', '400');
    text.style('font-style', 'normal'); //italic
    text.style('font-size', '16px');

    buttonExport = createButton('Export');
    buttonExport.id("export");
    buttonExport.value("Submit");
    buttonExport.mousePressed(exportResult);
    buttonExport.style('position', 'absolute');
    buttonExport.style('right', '20px');
    buttonExport.style('bottom', '20px');
    buttonExport.style('padding','10px');
    buttonExport.style('backgroundColor','#F4F4F4');
    buttonExport.style('shadow','0 2px 2px rgba(0, 0, 0, 0.25)');
    buttonExport.style('border','none');
    buttonExport.style('cursor','pointer');

    text.parent(boxArea);
    icon.parent(boxArea);
    buttonExport.parent(container);
    boxArea.parent(containerC);
}

function selectIcon(){
   // let iconSelected = document.querySelector('.genBox');

    //iconSelected.addEventListener('mouseover', function (){
       // iconSelected.style('border', '1px solid green');
    //})
}

function colorImageBlue(){
    icon.style('filter', 'invert(0.5) sepia(100%) saturate(3) hue-rotate(180deg) url()');
}
function colorImageOrange(){
    icon.style('filter', 'invert(0.5) sepia(100%) saturate(3) url()');
}
function colorImageGreen() {
    icon.style('filter', 'invert(0.5) sepia(100%) saturate(3) hue-rotate(50deg) url()');
}
function colorImagePurple() {
    icon.style('filter', 'invert(0.5) sepia(100%) saturate(3) hue-rotate(210deg) url()');
}
function colorImagePink() {
    icon.style('filter', 'invert(0.5) sepia(100%) saturate(3) hue-rotate(260deg) url()');
}

function exportResult(){

}

// function TextLogo() {
//     //TO DO: Preto (ver se há sobreposição com forma preta)
//     fill(0);
//     textAlign(CENTER);
//     textFont(font);
//     text(textLogo, xText, yText);
// }
// //callback function for entry1
// function entryCallback() {
//     for (let i = 0; i < 25; i++) {
//       text(entry1.value(), random(width),
//             random(height));
//     }
  
//   }
