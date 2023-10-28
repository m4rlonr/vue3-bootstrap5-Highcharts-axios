const _ = require('axios');

_get('/user?ID=12345')
    .then(function (response) {
        // manipula o sucesso da requisição
        console.log(response);
    })
    .catch(function (error) {
        // manipula erros da requisição
        console.error(error);
    })
    .finally(function () {
        // sempre será executado
    });

// Opcionalmente a requisição acima poderia ser feita assim da seguinte forma
_get('/user', {
    params: {
        ID: 12345
    }
})
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.error(error);
    })
    .finally(function () {
        // sempre será executado
    });

// Quer usar async/await? Adicione o prefixo `async` na sua função/método
async function getUser() {
    try {
        const response = await _get('/user?ID=12345');
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}