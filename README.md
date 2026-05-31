# Gerenciador de Produtos - CRUD Completo

Este projeto consiste em uma aplicação web completa para o gerenciamento de produtos (Create, Read, Update e Delete), desenvolvida como atividade avaliativa para a disciplina de **Desenvolvimento de Software para Web (DSW 2026/1)** da **UNEMAT** (Universidade do Estado de Mato Grosso), sob a orientação do **Prof. Ivan Luiz Pedroso Pires**.

A aplicação é dividida em um ecossistema de duas partes: um backend robusto em **Bun + Express** com persistência de dados em memória e um frontend dinâmico em **HTML5, CSS3 e JavaScript puro (Vanilla JS)** consumindo as APIs via requisições assíncronas (`fetch`).

---

## 👥 Integrantes da Dupla
* **João Antônio Bittencourt Montagner**
* *Guilherme Viana Priori**

---

## 🚀 Como Inicializar e Rodar o Projeto

O projeto está estruturado em duas pastas principais: `/backend` e `/frontend`. Siga os passos abaixo para executar cada uma das partes.

### 🛠️ 1. Inicializando o Backend (Servidor)

O backend utiliza o **Bun** como runtime de alta performance e gerenciador de pacotes, junto com o framework **Express**.

1. Abra o seu terminal.
2. Navegue até a pasta do backend:
   ```bash
   cd backend
   ```
3. Se for a primeira vez rodando o projeto, instale as dependências necessárias executando:
   ```bash
   bun install
   ```
4. Inicie o servidor em modo de desenvolvimento:
   ```bash
   bun dev
   ```
   *O servidor será iniciado e estará escutando requisições na porta **3000** (`http://localhost:3000`).*

### 💻 2. Inicializando o Frontend (Interface)

O frontend foi construído utilizando tecnologias nativas da web. 

1. No seu ambiente de desenvolvimento (como o VS Code), abra a pasta `frontend`.
2. Para evitar problemas de CORS e garantir o funcionamento correto de módulos JavaScript (`type="module"`), inicialize a aplicação utilizando a extensão **Live Server**:
   * Clique com o botão direito sobre o arquivo `index.html`.
   * Selecione a opção **"Open with Live Server"**.
3. A aplicação abrirá automaticamente no seu navegador padrão.

---

## 🔌 Documentação das Rotas da API (Backend)

O backend expõe uma API RESTful completa sob o endpoint base `http://localhost:3000`. Todas as operações modificam em tempo real o array de produtos armazenado em memória.

### 1. Listar Produtos (Com Filtros)
* **Método:** `GET`
* **Rota:** `/produtos`
* **Query Parameters opcionais:** * `busca`: Filtra produtos cujo nome contenha o termo.
  * `status`: Filtra por status exato (`disponivel`, `emprestado`, `manutencao`).
  * `tipo`: Filtra pelo tipo do produto.
  * `descricao`: Filtra produtos cuja descrição contenha o termo.
* **Retorno:** `200 OK` (Retorna o array de produtos).

### 2. Buscar Produto por ID
* **Método:** `GET`
* **Rota:** `/produtos/:id`
* **Retorno:**
  * `200 OK`: Caso o produto exista.
  * `404 Not Found`: Caso o ID informado não corresponda a nenhum produto.

### 3. Cadastrar Novo Produto
* **Método:** `POST`
* **Rota:** `/produtos`
* **Corpo da Requisição (JSON):**
  ```json
  {
    "nome": "Nome do Produto",
    "tipo": "Tipo",
    "status": "disponivel",
    "descricao": "Descrição detalhada"
  }
  ```
* **Regras:** Campos `nome` e `tipo` obrigatórios. O `status` deve ser um dos valores permitidos.
* **Retorno:** `201 Created` ou `400 Bad Request` (erro de validação).

### 4. Atualizar um Produto Existente
* **Método:** `PUT`
* **Rota:** `/produtos/:id`
* **Regras:** Valida se o ID existe e verifica os campos preenchidos.
* **Retorno:** `200 OK`, `400 Bad Request` (validação) ou `404 Not Found`.

### 5. Excluir um Produto
* **Método:** `DELETE`
* **Rota:** `/produtos/:id`
* **Retorno:** `204 No Content` (excluído com sucesso) ou `404 Not Found`.

---

## 🛠️ Tecnologias e Bibliotecas Utilizadas

* **Runtime de Execução:** Bun
* **Framework Backend:** Express
* **Interface:** HTML5, CSS3, Vanilla JavaScript
* **Compartilhamento de Recursos:** CORS
* **Ícones:** Material Symbols Outlined
