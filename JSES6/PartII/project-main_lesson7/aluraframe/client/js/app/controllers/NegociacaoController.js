class NegociacaoController {
    
    constructor() {
        this._init();
    }

    adiciona(event) {
        event.preventDefault();
        this.listaNegociacoes.addItem(this.criaNegociacao());
        console.log(this.listaNegociacoes.lista);
        this.limparFormulario();
        this.focusData();
        this.mensagem.texto = 'Negociação incluida com sucesso.';
    }

    apagar() {
        this.listaNegociacoes.esvaziar();
        this.mensagem.texto = 'Negociações apagadas com sucesso.';        
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

        this.listaNegociacoes = new ListaNegociacoes((model) => 
            this.negociacaoView.update(model.lista));
        this.mensagem = new Mensagem((model) =>
            this.mensagemView.update(model));

        this.negociacaoView = new NegociacaoView($('.tabela'));
        this.mensagemView = new MensagemView($('#mensagem'));
        this.negociacaoView.update(this.listaNegociacoes.lista);

        //this.temp = new DateHelper(); to show error
    }

}