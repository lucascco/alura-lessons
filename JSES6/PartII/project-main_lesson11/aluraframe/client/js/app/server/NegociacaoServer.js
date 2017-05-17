class NegociacaoServer {
    constructor() {
        this.httpServer = new HttpServer();
    }

    importarNegociacoes() {
        return Promise.all([
            this.importarNegociacaoSemana(),
            this.importarNegociacaoAnterior(),
            this.importarNegociacaoAtrasada()
        ]).then((negociacoes) => {
            return negociacoes.reduce((arrayFlat, array) => arrayFlat.concat(array),[]);
        }).catch((erro) => {
            throw new Error(erro);
        });
    }

    importarNegociacaoSemana() {
        return this.httpServer.get('negociacoes/semana');
    }

    importarNegociacaoAnterior() {
        return this.httpServer.get('negociacoes/anterior');
    }

    importarNegociacaoAtrasada() {
        return this.httpServer.get('negociacoes/retrasada');        
    }
}