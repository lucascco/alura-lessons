class NegociacaoController {
    
    constructor() {
        this._init();
    }

    adiciona(event) {
        event.preventDefault();
        this.listaNegociaoes.addItem(this.criaNegociacao());
        console.log(this.listaNegociaoes.lista);
        this.limparFormulario();
        this.focusData();
        this.negociacaoView.update(this.listaNegociaoes.lista);
    }

    criaNegociacao() {
        let dataObj = DateHelper.textoParaData(this._inputData.value);
        let negociacao = new Negociacao(
            dataObj,
            this._inputQuantidade.value,
            this._inputValor.value 
        );
        return negociacao;
    }

    focusData() {
        this._inputData.focus();
    }

    limparFormulario() {
        this._elementForm.reset();
    }

    _init() {
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputValor = $('#valor');
        this._inputQuantidade = $('#quantidade');
        this._elementForm = $('.form');

        this.listaNegociaoes = new ListaNegociacoes();
        this.negociacaoView = new NegociacaoView($('.tabela'));
        this.negociacaoView.update(this.listaNegociaoes.lista);

        //this.temp = new DateHelper(); to show error
    }

}