// ========================================================
// LISTA DE EXERCÍCIOS 02 - LÓGICA DE PROGRAMAÇÃO
// ========================================================

// Exercício 1: Formatação de Números para Moeda Real
// function ex01() {
//     let num = Number(prompt("Digite um valor:"));
//     
//     // usando toLocaleString para formatar no padrao de moeda
//     let real = num.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
//     
//     alert("Valor formatado: " + real);
// }


// Exercício 2: Converter Letras para Maiúsculas
// function ex02() {
//     let texto = prompt("Digite uma palavra ou frase:");
//     let maiusculo = texto.toUpperCase();
//     
//     alert("Texto em maiúsculas: " + maiusculo);
// }


// Exercício 3: Converter Letras para Minúsculas
// function ex03() {
//     let texto = prompt("Digite uma palavra ou frase:");
//     let minusculo = texto.toLowerCase();
//     
//     alert("Texto em minúsculas: " + minusculo);
// }


// Exercício 4: Contar o Número de Letras no Primeiro Nome
// function ex04() {
//     let nomeCompleto = prompt("Digite seu nome completo:");
//     
//     // tirando os espacos para contar as letras
//     let semEspaco = nomeCompleto.replace(/\s+/g, '');
//     let totalLetras = semEspaco.length;
//     
//     alert("O nome digitado tem " + totalLetras + " letras no total.");
// }


// Exercício 5: Formatar a Divisão de 10/3 com Duas Casas Decimais
// function ex05() {
//     let calculo = 10 / 3;
//     
//     // usando toFixed pra travar em duas casas decimais
//     let resultado = calculo.toFixed(2);
//     
//     alert("O resultado de 10 dividido por 3 e: " + resultado);
// }


// Exercício 6: Exibir o Primeiro Nome em Maiúsculas e Contar as Letras
// function ex06() {
//     let primeiroNome = prompt("Digite apenas o seu primeiro nome:");
//     
//     let nomeMaiusculo = primeiroNome.toUpperCase();
//     let qtdLetras = primeiroNome.length;
//     
//     alert("Nome: " + nomeMaiusculo + "\nQuantidade de letras: " + qtdLetras);
// }


// Exercício 7: Calcular a Média de Valores com Moeda Brasileira
// function ex07() {
//     let v1 = Number(prompt("Digite o primeiro valor:"));
//     let v2 = Number(prompt("Digite o segundo valor:"));
//     let v3 = Number(prompt("Digite o terceiro valor:"));
//     
//     let media = (v1 + v2 + v3) / 3;
//     
//     // formatando a media calculada para a moeda R$
//     let mediaFormatada = media.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
//     
//     alert("A media dos valores informados e: " + mediaFormatada);
// }
