//Variaveis algoritmo
let eliteSize = 1;
let tournamentSize = 3;
let crossRate = 0.7;
let mutRate = 0.3;
let pop;

let canvas;
let description;

let selectedLogos = null;
let pg = [];
let pgAtual = 0;

function setup() {
    canvas = createCanvas(500, 500);
    background(153);

    pop = new Population();
    imageMode(CENTER);

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
}

function draw() {
}

//Chamamento da evolução de logos 
function evolveLogos() {
    selectedLogos = null;
    let selectIcon = document.querySelectorAll('.genBox');
    let nClick = 0;
    for (let i = 0; i < selectIcon.length; i++) {
        selectIcon.addEventListener('click', function () {
            selectIcon[i].classList.add("Selected");
            nClick++;
            selectedLogos = pop.getIndividual(i);
            if (nClick > 1) {
                selectIcon[i].classList.remove("Selected");
                nClick = 0;
            }
        })
    }
}

//Passagem entre as divs
function next(selected, show) {
    document.getElementsByClassName('anim')[selected].style.animation = "leave";
    document.getElementsByClassName('anim')[selected].style.display = "none";
    document.getElementsByClassName('anim')[show].style.display = "block";

    if (selected == 2) {
        document.getElementsByClassName('anim')[selected].style.display = "none";
        searchConcept();
    }
}

//Recebe valores do input e pesquisa 
function searchConcept() {
    let values = [];
    let splited = split(description.value(), ',');
    for (let i = 0; i < splited.length; i++) {
        values.push(splited[i].toLowerCase());
        cNet('https://api.conceptnet.io/related/c/en/' + 'sad' + '?filter=/c/en&limit=2');
    }
}

//Load info do API The noun project
let rand;

function loadInfo(result) {
    fetch('/' + result).then(function (res) {
        return res.json();
    }).then(function (data) {
        console.log(data);
        for (let i = 0; i < 20; i++) {
            rand = int(random(0, data.length));
            pop.initialize(data[rand].preview_url);
            for (let j = 0; j < pop.pop.length; j++) {
                pop.getIndividual(j).mutation();
                pop.getIndividual(j).getPhenotype();
            }
        }
    }).catch(function (err) {
        console.error(err);
    })
}

// for(let j = 0; j < pop.pop.length; j++){
//     pop.getIndividual(j).mutation();
// }

//Web API do concept Net
function cNet(url) {
    fetch(url).then(function (res) {
        return res.json();
    }).then(function (data) {
        for (let i = 0; i < 2; i++) {
            let word = split(data.related[i]['@id'], '/');
            loadInfo(word[3]);
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