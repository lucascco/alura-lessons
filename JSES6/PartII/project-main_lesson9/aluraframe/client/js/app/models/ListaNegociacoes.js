class ListaNegociacoes {
    constructor() {
        this._lista = [];
        Object.freeze(this);
    }

    addItem(negociacao) {
        this._lista.push(negociacao);
    }

    esvaziar() {
        const length = this._lista.length;
        for (let i = 0; i < length; i++) {
            this._lista.pop();
        }
    }

    get lista() {
        return [].concat(this._lista);
    }
}