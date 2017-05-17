class NegociacaoServer {
    constructor() {
        this.httpServer = new HttpServer();
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