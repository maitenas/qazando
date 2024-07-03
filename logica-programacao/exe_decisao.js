// Exercício e - Estrutura de Descisão

// Percorrer uma lista de cidades
// Contendo: São Paulo, Rio de Janeiro, Florianópolis e Recife
// Para cada item verificar se a cidade Florianópolis está presente na lista
// Printar o nome da cidade
// Caso esteja avisar
// Caso não seja o elemento procurado avisar
// Número da execução


const cidades = ['São Paulo', 'Rio de janeiro', 'Florianópolis', 'Recife']

cidades.forEach((cidade, indice) => {
    console.log('Execução:', indice + 1)
    console.log('Cidade:', cidade)
    if (cidade == 'Florianópolis') {

        console.log('Essa é a cidade esperada!')
        console.log('----------------')
    } else {
        console.log('Não é a cidade esperada!')
        console.log('----------------')
    }

    })