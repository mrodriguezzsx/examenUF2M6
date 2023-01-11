const scoreBoard = {
    'Dave Thomas': 44,
    'Freyja Ćirić': 539,
    'José Valim': 265,
};

//Ex 1
function calculaPuntuacio(obj) {
    let r = 0;
    let length = Object.keys(obj).length
    for (clau in obj) {
        console.log(obj[clau]);
        r += obj[clau];
    }
    return r / length;
}

console.log(calculaPuntuacio(scoreBoard));

//Ex 2
function sense(obj, clau) {
    let r = obj
    delete obj[clau]
    return r;
}

console.log(sense(scoreBoard, 'Dave Thomas'));

//Ex 3
function Matriu(height, width) {
    this.height = height;
    this.width = width;
    const llista = [];

    this.fromArray = function (height, width, llista) {
        const matriu1 = new Matriu(height, width, llista);
    }

    this.print = function () {
        return console.log("Hola")
    }
    this.getHeight = function () {
        return this.height;
    }
    this.getWidth = function () {
        return this.width;
    }
}
Matriu.prototype.fromArray(3,3,[1,2,3,4,5,6,7,8,9]).print()



//Ex 4
