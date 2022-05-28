var link = "https://www.googleapis.com/webfonts/v1/webfonts?";
var api_key = "key=AIzaSyDr4xu2z2AEClpluNtKeTghNq8ojrG55r0";
var client_id = "944899457826-tdnmgs6118dgldl2d5j3mfj5ri8t0k80.apps.googleusercontent.com";
var secret_key = "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";

console.clear();

getGoogleFonts();

//Link do JSON: https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDr4xu2z2AEClpluNtKeTghNq8ojrG55r0

function getGoogleFonts() {
    var link = "https://www.googleapis.com/webfonts/v1/webfonts?";
    var api_key = "key=AIzaSyDr4xu2z2AEClpluNtKeTghNq8ojrG55r0";
    fetch(link + api_key)
        .then(function (response) {
            return response.json();
        }).then(function (json) {
        //COMENTEI console.log(json);
        // console.log(json.items[0].family);

        getFamilyFont(json);
        getCategoriesFont(json);
        getVariantFont(json);
        getSubsetFont(json);
        getFilesFont(json);
        getFileRandomFont();
        getCategoryRandomFont();
    });
}
var arrayFamilies = [];
/*Famílias das Fontes-------------------------*/
function getFamilyFont(json1) {
    /*Criei um array com todas as categorias*/
    json1.items.forEach(function (font, i) {
        //console.log(font.category);
        arrayFamilies [i] = font.family;
    });
    //COMENTEI console.log("Families");
    //COMENTEI console.log(arrayFamilies);
    getRandomFamilyFont();
}

var string;

var randomFont;
var randomIndex;

function getRandomFamilyFont() {
    randomIndex = Math.floor(Math.random() * arrayFamilies.length);
    randomFont = arrayFamilies[randomIndex];
    // console.log('choosed category:', randomFont);
    console.log('choosed font index:',randomIndex);
    console.log('choosed font:', randomFont);
    return randomFont;
}

var arrayFilesFonts;
/*Ficheiros-------------------------*/
function getFilesFont(json1) {
    /*Criei um array com todas as categorias*/
    arrayFilesFonts = [];
    json1.items.forEach(function (font, i) {
        //console.log(font.category);
        arrayFilesFonts [i] = font.files;
    });
    //COMENTEI console.log("Files Fonts");
    //COMENTEI console.log(arrayFilesFonts);
}

var fileRandomFont;
function getFileRandomFont(){
    fileRandomFont = arrayFilesFonts[randomIndex].regular;
    console.log(randomIndex);
    console.log('choosed font file:', fileRandomFont);
    localStorage.setItem("fileRandomFontStorage", fileRandomFont);
    return fileRandomFont;
}

var arrayCategories = [];
/*Categorias-------------------------*/
function getCategoriesFont(json1) {
    /*Criei um array com todas as categorias*/
    json1.items.forEach(function (font, i) {
        //console.log(font.category);
        arrayCategories [i] = font.category;
    });
    //COMENTEI console.log("Categories");
     console.log(arrayCategories);
     return arrayCategories;
    /*Informa-me quais as diferentes categorias, sem repetições*/
    /*var uniqueCategories = arrayCategories.filter(function (value, index, self) {
        return self.indexOf(value) === index;
    });*/
    //COMENTEI console.log("Unique Categories");
    //COMENTEI console.log(uniqueCategories);
}

var categoryRandomFont;
function getCategoryRandomFont(){
    categoryRandomFont = arrayCategories[randomIndex];
    console.log(categoryRandomFont);
    return categoryRandomFont;
}


/*filter: através de uma condição,devolve um array com as cenas filtradas*/
function getFontSerif(json1) {
    let filtro = json1.items.filter(function (font) {
        return font.category == "serif";
    });
    //COMENTEI console.log(filtro);
}

function getFontSansSerif(json1) {
    let filtro = json1.items.filter(function (font) {
        return font.category == "sans-serif";
    });
    //COMENTEI console.log(filtro);
}

function getFontDisplay(json1) {
    let filtro = json1.items.filter(function (font) {
        return font.category == "display";
    });
    //COMENTEI console.log(filtro);
}

function getFontHandwriting(json1) {
    let filtro = json1.items.filter(function (font) {
        return font.category == "handwriting";
    });
    //COMENTEI console.log(filtro);
}

function getFontMonospace(json1) {
    let filtro = json1.items.filter(function (font) {
        return font.category == "monospace";
    });
    //COMENTEI console.log(filtro);
}


/*https://www.w3schools.com/jsref/jsref_reduce.asp - Ver métodos para arrays*/

/*filter, reduce: ?; map*/

/*Pesos-------------------------*/
function getVariantFont(json1) {
    /*Criei um array com todas as categorias*/
    var arrayVariants = [];
    json1.items.forEach(function (font, i) {
        //console.log(font.category);
        arrayVariants [i] = font.variants;
    });
    //COMENTEI console.log("Variants");
    //COMENTEI console.log(arrayVariants);
} /*Aqui podemos organizar por regulares, 500, 600, e os diferentes pesos*/

function getSubsetFont(json1) { /* Acho que isto não nos interessa */
    /*Criei um array com todas as categorias*/
    var arraySubset = [];
    json1.items.forEach(function (font, i) {
        //console.log(font.category);
        arraySubset [i] = font.subsets;
    });
    //COMENTEI console.log("Subset");
    //COMENTEI console.log(arraySubset);
}





