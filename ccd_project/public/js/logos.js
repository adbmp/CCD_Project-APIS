
class drawIconClass {
    constructor(urlIconC, xIconC, yIconC, wIconC, textTextC, sTextC, xTextC, yTextC, fTextC, cTextC) {
        boxArea = createDiv();
        boxArea.class('genBox');
        boxArea.style('width', '100px');
        boxArea.style('height', '100px');
        boxArea.style('position', 'relative');
        boxArea.style('display', 'inline-block');
        boxArea.style('margin', '3%');
        boxArea.style('background-color', 'white');

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