class NegociacaoView extends View {

    template(model) {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>
                
                <tbody>
                </tbody>
                    ${model.lista.map(neg => `
                        <tr>
                            <td>${DateHelper.dataParaTexto(neg.data)}</td>
                            <td>${neg.quantidade}</td>
                            <td>${neg.valor}</td>
                            <td>${neg.volume}</td>
                        </tr>
                    `).join('')}
                <tfoot>
                    <tr>
                        <td colspan="3"></td>
                        <td>${model.getVolumeTotal()}</td>
                    <tr>
                </tfoot>
            </table>
        `;
    }

}