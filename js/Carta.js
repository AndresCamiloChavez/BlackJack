class Carta{
    static idCarta = 0;
    constructor(nombre, valor, img){
        this._nombre = nombre;
        this._valor = valor;
        this._idCarta = ++Carta.idCarta;
        this._img = img;
    }
    get idCarta(){
        return this._idCarta
    }
    get nombre(){
        return this._nombre;
    }
    set nombre( nombre ){
        this._nombre = nombre;
    }
    get valor (){
        return this._valor;
    }
    set valor( valor ){
        this._valor = valor;
    }
    get img (){
        return this._img;
    }
    set img( img ){
        this._img = img;
    }
    toString(){
        return `Carta id${this._idCarta}: Nombre: ${this._nombre} Valor: ${this._valor}`;
    }
}