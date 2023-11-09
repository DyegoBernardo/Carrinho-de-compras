const produtoInfo = {
  codigo: '0914',
  nome: 'produto1',
  valor: 11.66,
};
const addButton = document.getElementById('btn-adicionar-produto-01')
const subButton = document.getElementById('btn-subtrair-produto-01')
const input = document.getElementById('quantidade-produto-01')
const valorSubTotal = document.getElementById('valor-subtotal')
const quantidade = document.getElementById('quantidade-subtotal')

function subtotalUpdate () {
  const total = produtoInfo.valor * input.value
  const itensText = input.value > 1 ? ' itens' : ' item'
  valorSubTotal.innerText = total.toFixed(2)
  quantidade.innerText = input.value + itensText
}
addButton.addEventListener('click', () => {
    input.value = Number(input.value) + 1;
    valorSubTotal.innerText = (produtoInfo.valor * input.value).toFixed(2)
    subtotalUpdate ()
})
subButton.addEventListener('click', () => {
  if(input.value > 0) {
    input.value = Number(input.value) - 1;
    const total = produtoInfo.valor * input.value
    valorSubTotal.innerText = total.toFixed(2)
    subtotalUpdate ()
  }
})

