class NegociacaoController {
    
    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputValor = $('#valor');
        this._inputQuantidade = $('#quantidade');
        this._elementForm = $('.form');
    }

    adiciona(event) {
        event.preventDefault();
        let dataObj = this.convertData2(this._inputData.value);
        let negociacao = new Negociacao(
            dataObj,
            this._inputQuantidade.value,
            this._inputValor.value 
        );
        console.log(negociacao);
        this.limparFormulario();
        this.focusData();
    }

    focusData() {
        this._inputData.focus();
    }

    limparFormulario() {
        this._elementForm.reset();
    }

    convertData(dataString) {
        console.log('convertData');
        let dataSplit = dataString.split('-');
        let ano = dataSplit[0];
        let mes = dataSplit[1];
        let dia = dataSplit[2];
        return new Date(ano, --mes, dia);
    }

    convertData2(dataString = '') { // use spread operator
        console.log('convertData2');        
        return new Date (...dataString.split('-').map((item, index) => item - index % 2));
    }
    

}