class NegociacaoServer {
    static importarNegociacao(cb, url) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onreadystatechange = () => {
            if(xhr.readyState == 4) {
                if(xhr.status == 200) {
                    cb(null, JSON.parse(xhr.responseText));
                }else {
                    console.error('Houve um erro', xhr.response);
                    cb('Houve um erro ao tentar importar as negociações.', null);
                }
            }
        };
        xhr.send();
    }
}