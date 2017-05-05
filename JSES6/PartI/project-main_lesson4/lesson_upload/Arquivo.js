class Arquivo {
    constructor (nome, tamanho, tipo) {
        this._nome = nome;
        this._tamanho = tamanho;
        this._tipo = tipo;
        Object.freeze(this);
    }
    
    get Nome() {
        return this._nome;
    }

    get Tipo() {
        return this._tipo;
    }

    get Tamanho() {
        return this._tamanho;
    }
}