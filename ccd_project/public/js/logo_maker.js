
//TEXT
var font;
var textSize;
var textLogo;
var textW;
var xText;
var yText;

//input 
let input;
let PickedColor;

//logos 
let icon; 
let button;
let sideDiv;
let container;
let inputValue = 'car';

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

    //Container do conjunto de logos criados
    container = createDiv();
    container.style('width', '60%');
    container.style('height', '100%');
    container.style('position', 'absolute');
    container.style('left', '35%');
    container.style('top', '7.5%');
    
    //Barra lateral 
    sideDiv = createDiv();
    sideDiv.id("settings");
    sideDiv.style('width', '20%');
    sideDiv.style('height', '100%');
    sideDiv.style('background-color', '#ffe61d');
    sideDiv.style('position', 'absolute');
    sideDiv.style('top', '0');
    sideDiv.style('left', '0');

    input = createInput();
    input.id("BrandInput");
    input.style('border', 'none');
    input.style('border-bottom', '2px solid black');
    input.style('background-color', 'transparent');
    inputValue = input.value();
    
    button = createButton('Generate');
    button.id("submit");
    button.value("Submit");
    button.mousePressed(loadInfo);

    PickedColor = createColorPicker("black");

    input.parent(sideDiv);
    button.parent(sideDiv); 
    PickedColor.parent(sideDiv);
}

function draw() {
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
    let text = createSpan(input.value());

    boxArea.class('genBox');
    boxArea.style('width', '100px');
    boxArea.style('height', '100px');
    boxArea.style('position', 'relative');
    boxArea.style('display', 'inline-block');
    boxArea.style('margin', '3% 3% 3% 3%');

    icon.style('filter', 'saturate(300%)');
    icon.style('width', '100%');
    icon.style('height', 'auto');

    xText = random(0, boxArea.width);
    yText = random(10, boxArea.height);

    
    text.position(xText, yText);
    // text.style('font-family', loadFont(localStorage.getItem("fileRandomFontStorage")));
    // head.appendChild(document.createElement('link').setAttribute('href', fileRandomFont));

    //Falta a categoria da fonte
    text.style('font-family', randomFont + ', ' + randomFont.category);

    text.parent(boxArea);
    icon.parent(boxArea);
    boxArea.parent(container);

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
