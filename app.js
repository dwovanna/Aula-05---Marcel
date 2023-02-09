/****************************************************************************
 * Objetivo: Arquivo destinado ao processamento do calculo de uma tabuada
 * Autor: Dwovanna Santos
 * Data: 09/02/2023
 * Versão: 1.0
****************************************************************************/

//Import da biblioteca da tabuada
var tabuada = require('./modulo/tabuada.js');

//Import da biblioteca de entrada de dados
var readline = require('readline');

// Cria um objeto para manipular as entradas de dados
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDados.question('Minimo multiplicador: \n', function(multiplicador));

entradaDados.question('Máximo multiplicador: \n', function(maxMultiplicador))