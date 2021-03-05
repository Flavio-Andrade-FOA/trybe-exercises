let = arara

// Adição
let a = 5;
let b = 2;

a + b;

function sum(a, b) {
  return a + b;
}

Agora vamos fazer um exercício que vai deixar claro como funções com responsabilidades bem definidas deixam o código mais bem escrito.
Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
Exemplo de palíndromo: arara .
verificaPalindrome("arara") ;
Retorno esperado: true
verificaPalindrome("desenvolvimento") ;
Retorno esperado: false
Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
Array de teste: [2, 3, 6, 7, 10, 1]; .
Valor esperado no retorno da função: 4 .
Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
Valor esperado no retorno da função: 6 .
Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
Valor esperado no retorno da função: Fernanda .
Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
Valor esperado no retorno da função: 2 .
Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
Valor de teste: N = 5 .
Valor esperado no retorno da função: 1+2+3+4+5 = 15 .
Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
Valor de teste: "trybe" e "be"
Valor esperado no retorno da função: true
verificaFimPalavra("trybe", "be") ;
Retorno esperado: true
verificaFimPalavra("joaofernando", "fernan") ;
Retorno esperado: false
(Difícil) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.
Atenção! Esse exercício já apareceu no processo seletivo de uma grande multinacional!
Dicas:
Uma string é um array de caracteres, então cada elemento do array é uma letra.
O valor de cada numeral romano é:
Copiar
| I   | 1    |
| --- | ---- |
| IV  | 4    |
| V   | 5    |
| IX  | 9    |
| X   | 10   |
| XL  | 40   |
| L   | 50   |
| XC  | 90   |
| C   | 100  |
| CD  | 400  |
| D   | 500  |
| CM  | 900  |
| M   | 1000 |
Que tal criar um objeto que associe cada letra a um numeral para fácil consulta?
Atenção! Quando você tem um número pequeno à direita de um número grande, eles devem ser somados. Exemplo: XI = 10 + 1 = 11. No entanto, se o número pequeno está à esquerda de um número maior que ele, ele deve ser subtraído. Exemplo: IX = 10 - 1 = 9.
Para o próximo exercício você irá precisar ter uma conta no CodeWars , para entender como fazê-lo acesse esse o conteúdo que fizemos sobre isso. Após seguir os passos para registro acesse o desafio proposto e então clique em TRAIN , você então será redirecionado para a página onde o desafio deve ser feito. Quando tiver finalizado o exercício clique em TEST para verificar, com testes simples, se sua solução satisfaz o que foi pedido. Passando nesses testes clique em ATTEMPT , ao fazer isso seu código passará por todos os testes existentes para validação da solução. Caso sua solução esteja correta o botão SUBMIT ficará disponível, clique nele para submeter sua resposta, caso contrário volte ao seu código e veja o que ainda não está satisfazendo o que se é pedido, repita esse processo até que sua solução esteja correta.
Desafio - 16 + 8 = 214 ;
Esse desafio irá exigir um pouco de conhecimento sobre alguns métodos do JavaScript, para isso pesquise quando for necessário e caso surja alguma dúvida peça ajuda no Slack . Dúvidas em como fazer uma boa pesquisa? Sem problemas! Acesse esse conteúdo sobre como pesquisar como uma pessoa desenvolvedora .