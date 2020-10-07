// procurar botão
document.querySelector('#add-time')
// ao clicar no botão
.addEventListener('click', cloneField)
// Executar ações:
function cloneField() {
    // duplicar os campos: Que campos??
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) //boolean
    // limpar os campos: Que campos?
    const fields = newFieldContainer.querySelectorAll('input') // pegar os campos
    // para cada campo, limpar
    fields.forEach(function(field) {
        // pegar o field da iteração e limpar
        field.value = ""
    })
    // mostrar na página: Onde??
    document.querySelector('#schedule-items').appendChild(newFieldContainer)

}