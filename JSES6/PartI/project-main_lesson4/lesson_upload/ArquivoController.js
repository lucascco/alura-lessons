class ArquivoController {
    constructor() {
        this.inputDados = document.querySelector('.dados-arquivo');
    }

    envia() {
        let valor = this.inputDados.value;
        if (/[\w]+\/[\w]+\/[\w]+/.test(valor)) {
            let arquivo = ArquivoHelper.criaArquivo(valor);
            let output = `Nome ${arquivo.Nome}, Tamanho ${arquivo.Tamanho}, Tipo ${arquivo.Tipo}`;            
            console.log(arquivo, output);
            this._limpaFormulario();
        } else {
            alert('Formato Incorreto. (Nome/Tamanho/Tipo)');
        }
    }

    _limpaFormulario() {
        this.inputDados.value = '';
        this.inputDados.focus();
    }
}