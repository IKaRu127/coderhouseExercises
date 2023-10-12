/*Exercícios de fixação de algoritmos simples*/


/*Concatenação de textos - Descobrindo nome e idade do usuário*/

console.log('Programa em carregamento...')
console.warn('Programa carregado')
alert('Bem vindo ao primeiro exercício! \nPrimeiro, vamos fazer um breve cadastro de dados!')
let nome = prompt('Digite aqui seu primeiro nome:')
alert('Olá, ' + nome + '! \nMuito Prazer!')
let sobrenome = prompt('Agora digite aqui seu sobrenome:')
let nomeCompleto = nome + ' ' + sobrenome
let anoNascimento = parseInt(prompt('Digite aqui o ano que você nasceu:'))
let anoAtual = parseInt(prompt('Digite aqui o ano atual:'))
let idade = anoAtual - anoNascimento

alert('Seu nome completo é ' + nomeCompleto + '.' + '\nSua idade até o fim desse ano é/será ' + idade + ' anos!')

/*Calculadora de soma - Recebendo dois números e somando eles*/

alert('Tudo certo, '+ nome + '! \nAgora vamos realizar a soma de dois números!')
let numero1 = parseFloat(prompt('Insira o primeiro número aqui:'))
console.log('Primeiro número escolhido: ' + numero1)
let numero2 = parseFloat(prompt('Insira o segundo número aqui:'))
console.log('Segundo número escolhido: ' + numero2)
let resultado = numero1 + numero2
console.log('Equação: ' + numero1 + " + " + numero2 + ' = ' + resultado) //colocando a soma no console
alert('A soma dos dois números é de ' + resultado +'!')


