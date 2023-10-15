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
