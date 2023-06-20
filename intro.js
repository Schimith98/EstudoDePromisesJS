// As Promises em JavaScript são uma forma de lidar com operações
// assíncronas e assinalar o resultado dessas operações
// quando estiverem concluídas.

// Estados da promise: pending, fulfilled ou rejected

// Para criar uma Promise, você pode usar a seguinte sintaxe:

const exemploDePromise = new Promise((resolve, reject) => {
  // Lógica assíncrona aqui
});

// Dentro da função passada para o construtor da Promise, você executa a lógica assíncrona desejada.
// Dentro dessa lógica assíncrona, você chama a função resolve(valor) quando a operação é concluída
// com sucesso e você deseja retornar um valor. Se a operação falhar, você pode chamar a função reject(motivo)
// para rejeitar a Promise, fornecendo um motivo específico.

// Depois de criar uma Promise, você pode encadear chamadas usando os métodos then() e catch().
// O método then() é chamado quando a Promise é resolvida, e você pode passar uma função que recebe
// o valor resolvido como argumento. O método catch() é chamado quando a Promise é rejeitada, e você
// pode passar uma função que recebe o motivo de rejeição como argumento.

// Exemplo

const minhaPromise = new Promise((resolve, reject) => {
  console.log("Iniciando minhaPromise");
  setTimeout(() => {
    const randomNumber = Math.random();
    console.log("O número gerado na minhaPromise foi:", randomNumber);
    if (randomNumber < 0.5) {
      resolve(randomNumber);
    } else {
      reject(new Error("Número maior ou igual a 0.5"));
    }
  }, 2000);
});

minhaPromise
  .then((valor) => {
    console.log("Promise resolvida:", valor);
  })
  .catch((erro) => {
    console.log("Promise rejeitada:", erro.message);
  })
  .finally(() => {
    console.log("Promise Finalizada!");
  });

//   Nesse exemplo, uma Promise é criada com uma lógica assíncrona simulada usando setTimeout().
//   Se o número gerado for inferior a 0.5, a Promise é resolvida com o número. Caso contrário, a
//   Promise é rejeitada com um objeto de erro contendo uma mensagem.

// A chamada de then() encadeada trata o caso de resolução, enquanto a chamada de catch() trata o caso
// de rejeição. Dependendo do resultado da Promise, a função apropriada será chamada para lidar com o
// valor resolvido ou o motivo de rejeição.
