# Solução de Proxy para Acesso a API Sem Configurações de CORS

Muitas vezes, ao desenvolver aplicativos da web, nos deparamos com o desafio de acessar APIs de terceiros que não têm as configurações de **CORS (Cross-Origin Resource Sharing)** devidamente configuradas. O CORS é um mecanismo de segurança que impede requisições de um domínio diferente. Quando as configurações de CORS não estão presentes em uma API, isso pode causar problemas de segurança e dificultar o acesso aos dados.

Para superar essa limitação, adotei a estratégia de criar um **Proxy Server**. Esse servidor atua como um intermediário entre o aplicativo e a API de destino. Ele permite que o aplicativo faça requisições para o servidor proxy, que, por sua vez, faz as requisições para a API de destino. Como o servidor proxy opera em um domínio diferente, ele não está sujeito às restrições de CORS, o que possibilita o acesso aos dados da API.

## Repositório do Proxy Server

O repositório do Proxy Server que criei para essa finalidade está disponível no GitHub. Você pode acessá-lo [aqui](https://github.com/ThiagoDaSilveiraSouza/vehicleListProxyServer).

## Como Rodar o Projeto do Proxy Server

Para executar o projeto do Proxy Server, siga estas etapas:

### Instalando as Dependências

Você pode instalar as dependências usando o **npm** ou o **yarn**. Abra o terminal na raiz do projeto e execute um dos seguintes comandos, dependendo da sua preferência:

**Com npm:**

```bash
npm install
```

ou

**Com yarn:**

```bash
yarn install
```

## Iniciando o Servidor

Depois de instalar as dependências, você pode iniciar o servidor usando o nodemon. A partir do diretório raiz do projeto, execute o seguinte comando:

```bash
yarn dev
```

Isso iniciará o servidor proxy e permitirá que você o utilize para acessar a API de destino sem problemas de CORS.

## Como Rodar o Projeto do Front-End

Para rodar o projeto do front-end, siga estas etapas:

### Instalando as Dependências

Navegue até o diretório do projeto do front-end e abra o terminal. Em seguida, execute um dos seguintes comandos para instalar as dependências, dependendo da sua preferência:

**Com npm:**

```bash
npm install
```

ou

**Com yarn:**

```bash
yarn install
```

### Iniciando o Servidor do Front-End

Depois de instalar as dependências, você pode iniciar o servidor do front-end a partir do diretório do projeto. Use o seguinte comando:

**Com npm:**

```bash
npm dev
```

ou

**Com yarn:**

```bash
yarn dev
```

## Relatório de Problema e Solução - Objeto com Falta de Vírgula

Durante o desenvolvimento do projeto, identifiquei um problema em um objeto JSON que estava sendo consumido no front-end. O objeto em questão continha uma falta de vírgula antes da propriedade "cor", o que resultou em um formato JSON inválido e causou erros ao tentar analisar o dado no front-end.

### Problema Identificado

Aqui está um exemplo simplificado do objeto com o problema:

```json
{
    "id": 1,
    "timestamp_cadastro": 1696539488,
    "modelo_id": 12,
    "ano": 2015,
    "combustível": "FLEX",
    "num_portas": 4"cor": "BEGE",
    "nome_modelo": "ONIX PLUS",
    "valor": 50.000
}
```
Observe que a propriedade "cor" não possui uma vírgula antes dela. Isso torna o JSON inválido e causa erros na análise do dado no front-end.

### Solução Implementada

Para solucionar esse problema e garantir que o dado fosse consumido corretamente no front-end, realizei uma intervenção no proxy que estava fazendo a requisição à API. No proxy, identifiquei o problema e introduzi uma vírgula antes da propriedade "cor" para tornar o JSON válido. 

Após essa correção no proxy, o dado passou a ser consumido corretamente no front-end, sem erros na análise do JSON.

### Conclusão

Identificar e resolver problemas de formatação de JSON é fundamental para garantir o correto funcionamento de um sistema. Neste caso, a intervenção no proxy permitiu que o dado fosse processado sem problemas no front-end, demonstrando a importância de uma abordagem proativa para solucionar problemas desse tipo.

Espero que este relatório ajude a entender e documentar a solução aplicada para o problema encontrado no projeto.