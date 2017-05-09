class Mensagem {
    constructor(change, texto = '') {
        this._change = change;
        this._texto = texto;
    }

    get texto() {
        return this._texto;
    }

    set texto(texto) {
        this._texto = texto;
        this._change(this);
    }
}