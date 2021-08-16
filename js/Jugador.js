class Jugador {
  static idJugador = 0;
  constructor(cartas = [], gano = false, pasar = false, perdio = false) {
    this._idJugador = Jugador.idJugador++;
    this._cartas = cartas;
    this._gano = gano;
    this._pasar = pasar;
    this._perdio = false;
    // this._jugando = jugando;
    // this._valor = valor;
  }
  get perdio(){
    return this._perdio;
  }
  set perdio( perdio ){
    this._perdio = perdio;
  }
  get idJugador() {
    return this._idJugador;
  }
  agregarCarta(carta) {
    this._cartas.push(carta);
  }
  get cartas() {
    return this._cartas;
  }
  set cartas(cartas) {
    this._cartas = cartas;
  }
  get gano() {
    return this._gano;
  }
  set gano(gano) {
    this._gano = gano;
  }
  get pasar(){
    return this._pasar;
  }
  set pasar(pasar) {
    this._pasar = pasar;
  }
  valorTotal() {
    let total = 0;
    for (const carta of this._cartas) {
      total += carta.valor;
    }
    return total;
  }
  // juega(juega) {
  //   juega = this.valorTotal() >= 21 ? false : true;
  //   return juega;
  // }
  // para(para) {
  //   //!inteligencia artifical xd tengo que colocar aqui!!!
  //   return para;
  // }
  toString() {
    return `Jugador id${this._idJugador}: Cartas: ${this.cartas}`;
  }
}
