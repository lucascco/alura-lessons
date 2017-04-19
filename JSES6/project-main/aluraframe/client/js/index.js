var campos = [];
var form = document.querySelector('.form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    submitForm();
});


function submitForm() {
    console.log('oi');
    getValuesForms();
    insertTable();
    clearForms();
}

function getValuesForms() {
    campos = [
        document.querySelector('#data'),
        document.querySelector('#quantidade'),
        document.querySelector('#valor'),        
    ]
}

function insertTable() {
    var tr = document.createElement('tr');
    campos.forEach(function (campo) {
        var td = document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild(td);
    });
    var volume = document.createElement('td');
    volume.textContent = campos[1].value * campos[2].value;
    tr.appendChild(volume);
    var table = document.querySelector('table tbody');
    table.appendChild(tr);
}

function clearForms() {
    campos[0].value = '';
    campos[1].value = 1;
    campos[2].value = 0;
}
