// Uma lista de Promises em JavaScript é uma coleção de Promises que podem ser
// executadas em paralelo ou sequencialmente. Ela permite que você execute várias
// operações assíncronas e trate seus resultados de maneira eficiente.

// Existem várias abordagens para trabalhar com uma lista de Promises.
// Vou apresentar duas maneiras comuns: usando Promise.all() e usando um loop com async/await.

// número para validar nas promises
const chanceDeErro = 5;

// função para gerar numeros aleatórios de 1 a 10
const gerarNumeroAleatorio = () => {
  return Math.floor(Math.random() * 10) + 1;
};

// lista de promises
const promise1 = new Promise((resolve, reject) => {
  const numeroAleatorio = gerarNumeroAleatorio();
  setTimeout(() => {
    if (numeroAleatorio < chanceDeErro) {
      resolve(numeroAleatorio);
    } else {
      reject(
        new Error(
          `Promise 1 rejeitada pois o número gerado foi maior ou igual a ${chanceDeErro}`
        )
      );
    }
  }, numeroAleatorio * 1000);
});

const promise2 = new Promise((resolve, reject) => {
  const numeroAleatorio = gerarNumeroAleatorio();
  setTimeout(() => {
    if (numeroAleatorio < chanceDeErro) {
      resolve(numeroAleatorio);
    } else {
      reject(
        new Error(
          `Promise 1 rejeitada pois o número gerado foi maior ou igual a ${chanceDeErro}`
        )
      );
    }
  }, numeroAleatorio * 1000);
});

const promise3 = new Promise((resolve, reject) => {
  const numeroAleatorio = gerarNumeroAleatorio();
  setTimeout(() => {
    if (numeroAleatorio < chanceDeErro) {
      resolve(numeroAleatorio);
    } else {
      reject(
        new Error(
          `Promise 1 rejeitada pois o número gerado foi maior ou igual a ${chanceDeErro}`
        )
      );
    }
  }, numeroAleatorio * 1000);
});

const listaDePromises = [promise1, promise2, promise3];

// 1 - Usando Promise.all():
// O método Promise.all() é usado quando você deseja executar todas as Promises em PARALELO e aguardar
// que todas elas sejam resolvidas. Ele retorna uma nova Promise que é resolvida com um array contendo
// os resultados das Promises na ordem em que foram passadas.

const executarPromisesEmParalelo = () => {
  console.log("As promises serão executas em paralelo");
  Promise.all(listaDePromises)
    .then((results) => {
      // results é um array com os resultados das Promises
      console.log(results);
    })
    .catch((error) => {
      // Lidar com erros
      console.error(error);
    });
};
// executarPromisesEmParalelo();

// 2 - Usando um loop com async/await:
// Outra abordagem é usar um loop combinado com a palavra-chave await para executar as Promises sequencialmente.
// Isso é útil quando você precisa que uma Promise seja resolvida antes de iniciar a próxima.

async function executarPromisesEmSequencia(listaDePromises) {
  console.log("As promises serão escutas em sequência");
  for (const promise of listaDePromises) {
    try {
      const resultado = await promise;
      console.log("Promise resolvida:", resultado);
    } catch (error) {
      console.log("Promise rejeitada:", error);
    }
  }
}

executarPromisesEmSequencia(listaDePromises);
