// 1-) Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

/* function resultadoIMC() {
    // Obtém os valores de peso e altura dos campos de entrada
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);   
  
  
    // Chama a função para calcular o IMC
    const imc = calcularIMC(peso, altura);
  
    // Exibe o resultado na página
    document.getElementById('resultado').textContent = `Seu IMC é: ${imc}`;
  }
  
  function calcularIMC(peso, altura) {
    // Verifica se os valores de peso e altura são válidos
    if (peso <= 0 || altura <= 0) {
      return "Peso e altura devem ser valores positivos.";
    }
  
    // Calcula o IMC
    const imc = peso / (altura * altura);
  
    // Retorna o valor do IMC com duas casas decimais
    return imc.toFixed(2);
  } */
//------------------------------------------------------------------------------------------------

// 2-) Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

/* function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    }
  
    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
      fatorial *= i;
    }
  
    return fatorial;
  }
  
  // Exemplo de uso
  let numero = 5;
  let resultado = calcularFatorial(numero);
  console.log(`O fatorial de ${numero} é ${resultado}`); */
//------------------------------------------------------------------------------------------------

// 3-) Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

/* function converterDolarParaReal(valorEmDolar) {
    let cotacaoDolar = 4.80;
    let valorEmReais = valorEmDolar * cotacaoDolar;
    return valorEmReais.toFixed(2);
  }
  
  // Exemplo de uso
  let valorEmDolar = 50;
  let valorEmReais = converterDolarParaReal(valorEmDolar);
  console.log(`${valorEmDolar} dólares equivalem a R$ ${valorEmReais}`); */
//------------------------------------------------------------------------------------------------

// 4-) Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

/* function calcularAreaPerimetroSalaRetangular(altura, largura) {
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);
    
    console.log(`Área da sala: ${area} metros quadrados`);
    console.log(`Perímetro da sala: ${perimetro} metros`);
  }
  
  // Exemplo de uso
  let altura = 3; // em metros
  let largura = 5; // em metros
  calcularAreaPerimetroSalaRetangular(altura, largura); */
//------------------------------------------------------------------------------------------------

// 5-) Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

/* function calcularAreaPerimetroSalaCircular(raio) {
    let area = Math.PI * raio * raio;
    let perimetro = 2 * Math.PI * raio;
    
    console.log(`Área da sala circular: ${area.toFixed(2)} metros quadrados`);
    console.log(`Perímetro da sala circular: ${perimetro.toFixed(2)} metros`);
  }
  
  // Exemplo de uso
  let raio = 4; // em metros
  calcularAreaPerimetroSalaCircular(raio); */
//------------------------------------------------------------------------------------------------

// 6-) Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

/* function mostrarTabuada(numero) {
    for (let i = 1; i <= 10; i++) {
      let resultado = numero * i;
      console.log(`${numero} x ${i} = ${resultado}`);
    }
  }
  
  // Exemplo de uso
  let numero = 4;
  mostrarTabuada(numero); */    
//------------------------------------------------------------------------------------------------