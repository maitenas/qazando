// Exercício 1 - Estrutura de Repetição

// Percorre uma lista de nomes contendo os nomes:
// Eduardo, Maria, Fernando, João e Francisco
// Número da execução, começando em 1
// Nome que está sendo executado
// Separadores.


const nomes = ['Eduardo', 'Maria', 'Fernando', 'João', 'Francisco']

for (let lista = 0; lista < nomes.length; lista++) {
    console.log('Execução de número = ', lista + 1)
    console.log(nomes[lista])
    console.log('---------------')
}

nomes.forEach((nome, indice) => {
    console.log('Execução:', indice + 1)
    console.log('Nome:', nome)
    console.log('----------------')
})