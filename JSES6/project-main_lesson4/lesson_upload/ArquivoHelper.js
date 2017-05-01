class ArquivoHelper {
    static criaArquivo(valor) {
        return new Arquivo(...valor.toUpperCase().split('/'))
    }
}