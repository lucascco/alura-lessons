class ListaNegociacoes {
    constructor(change) {
        this._change = change;
        this._lista = [];
        Object.freeze(this);
    }

    addItem(negociacao) {
        this._lista.push(negociacao);
        this._change(this);        
    }

    esvaziar() {
        const length = this._lista.length;
        for (let i = 0; i < length; i++) {
            this._lista.pop();
        }
        this._change(this);
    }

    get lista() {
        return [].concat(this._lista);
    }
}