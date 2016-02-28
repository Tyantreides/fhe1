var fhe1 = new Object();

fhe1.staticElements = new Array();
fhe1.nonStaticElements = new Array();
fhe1.gameElements = new Array();
(function() {

    
}());

(function() {

    fhe1.getPlayer = function (layer) {
        fhe1.getNewGameElement('player', 'Bitmap', layer);

    }

}());

(function() {

    fhe1.getNewGameElement = function (elementId, type, layer) {
        this.elementType = type;
        this.elementId = elementId;
        this.elementLayer = layer;
        if (this.elementType == 'Bitmap') {
            return new fhe1.bitmapElement(this.elementId, this.elementLayer);
        }
        else if (this.elementType == 'Shape') {
            return new fhe1.shapeElement(this.elementId, this.elementLayer);
        }
    }

}());

(function() {

    bitmapElement = function (elementId, layer) {
        this.Bitmap_constructor();
        this.elementId = elementId;
        this.elementLayer = layer;
    }
    var p = createjs.extend(bitmapElement, createjs.Bitmap);

    p.draw = function() {
        this.Bitmap_draw();
        // add custom logic here.
    }

    fhe1.bitmapElement = createjs.promote(bitmapElement, "Bitmap");
}());

(function() {

    shapeElement = function (elementId, layer) {
        this.Shape_constructor();
        this.elementId = elementId;
        this.elementLayer = layer;
    }
    var p = createjs.extend(shapeElement, createjs.Shape);



    fhe1.shapeElement = createjs.promote(shapeElement, "Shape");
}());



