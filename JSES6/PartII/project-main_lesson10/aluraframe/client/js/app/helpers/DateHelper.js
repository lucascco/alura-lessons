class DateHelper {

    constructor() {
        throw new Error('Este classe não pode ser instanciada.');
    }

    static dataParaTexto(data) {
        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
    }

    static textoParaData(data) {
        console.log(data);
        if (!/^\d{4}-\d{2}-\d{2}$/.test(data)) {
            throw new Error('Data no formato incorreto');
        }
        return new Date(...data.split('-').map((d, index) => Number.parseInt(d) - (index % 2)));
    }
}