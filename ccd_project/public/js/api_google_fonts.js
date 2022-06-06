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
        //console.log(json);
        //console.log(json.items[0].family);

        getFamilyFont(json);
        getFilesFont(json);
        getFileRandomFont();
    });
}
var arrayFamilies = [];
function getFamilyFont(json1) {
    json1.items.forEach(function (font, i) {
        arrayFamilies [i] = font.family;
    });
    //console.log("Families");
    //console.log(arrayFamilies);
    getRandomFamilyFont();
}

var randomFont;
var randomIndex;
function getRandomFamilyFont() {
    randomIndex = Math.floor(Math.random() * arrayFamilies.length);
    randomFont = arrayFamilies[randomIndex];
    //console.log('choosed font index:',randomIndex);
    //console.log('choosed font:', randomFont);
    return randomFont;
}

var arrayFilesFonts;
function getFilesFont(json1) {
    arrayFilesFonts = [];
    json1.items.forEach(function (font, i) {
        arrayFilesFonts [i] = font.files;
    });
    //console.log("Files Fonts");
    //console.log(arrayFilesFonts);
}

var fileRandomFont;
function getFileRandomFont(){
    fileRandomFont = arrayFilesFonts[randomIndex].regular;
    //console.log(randomIndex);
    //console.log('choosed font file:', fileRandomFont);
    localStorage.setItem("fileRandomFontStorage", fileRandomFont);
    return fileRandomFont;
}

var arrayCategories = [];
function getCategoriesFont(json1) {
    json1.items.forEach(function (font, i) {
        arrayCategories [i] = font.category;
    });
    //console.log("Categories");
    //console.log(arrayCategories);
     return arrayCategories;
}

var categoryRandomFont;
function getCategoryRandomFont(){
    categoryRandomFont = arrayCategories[randomIndex];
    //console.log(categoryRandomFont);
    return categoryRandomFont;
}

function getFontSerif(json1) {
    let filtro = json1.items.filter(function (font) {
        return font.category == "serif";
    });
    //console.log(filtro);
}

function getFontSansSerif(json1) {
    let filtro = json1.items.filter(function (font) {
        return font.category == "sans-serif";
    });
    //console.log(filtro);
}

function getFontDisplay(json1) {
    let filtro = json1.items.filter(function (font) {
        return font.category == "display";
    });
    //console.log(filtro);
}

function getFontHandwriting(json1) {
    let filtro = json1.items.filter(function (font) {
        return font.category == "handwriting";
    });
    //console.log(filtro);
}

function getFontMonospace(json1) {
    let filtro = json1.items.filter(function (font) {
        return font.category == "monospace";
    });
    //console.log(filtro);
}

function getVariantFont(json1) {
    var arrayVariants = [];
    json1.items.forEach(function (font, i) {
        arrayVariants [i] = font.variants;
    });
    //console.log("Variants");
    //console.log(arrayVariants);
}




