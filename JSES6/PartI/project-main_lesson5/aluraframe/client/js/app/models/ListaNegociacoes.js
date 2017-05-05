class ListaNegociacoes {
    constructor() {
        this._lista = [];
        Object.freeze(this);
    }

    addItem(negociacao) {
        this._lista.push(negociacao);
    }

    get lista() {
        return [].concat(this._lista);
    }
}