```python
markdown_content = """# Gerenciador de Produtos - CRUD Completo

Este projeto consiste em uma aplicação web completa para o gerenciamento de produtos (Create, Read, Update e Delete), desenvolvida como atividade avaliativa para a disciplina de **Desenvolvimento de Software para Web (DSW 2026/1)** da **UNEMAT** (Universidade do Estado de Mato Grosso), sob a orientação do **Prof. Ivan Luiz Pedroso Pires**.

A aplicação é dividida em um ecossistema de duas partes: um backend robusto em **Bun + Express** com persistência de dados em memória e um frontend dinâmico em **HTML5, CSS3 e JavaScript puro (Vanilla JS)** consumindo as APIs via requisições assíncronas (`fetch`).

---

## 👥 Integrantes da Dupla
* **João Antônio Bittencourt Montagner**
* *(Insira o nome do segundo integrante aqui, se houver)*

---

## 🚀 Como Inicializar e Rodar o Projeto

O projeto está estruturado em duas pastas principais: `/backend` e `/frontend`. Siga os passos abaixo para executar cada uma das partes.

### 🛠️ 1. Inicializando o Backend (Servidor)

O backend utiliza o **Bun** como runtime de alta performance e gerenciador de pacotes, junto com o framework **Express**.

1. Abra o seu terminal.
2. Navegue até a pasta do backend:

```

```text
File README.md successfully created!

```bash
   cd backend

```

3. Se for a primeira vez rodando o projeto, instale as dependências necessárias executando:
```bash
bun install

```


4. Inicie o servidor em modo de desenvolvimento (com recarregamento automático via *hot-reload*):
```bash
bun dev

```


*O servidor será iniciado e estará escutando requisições na porta **3000** (`http://localhost:3000`).*

### 💻 2. Inicializando o Frontend (Interface)

O frontend foi construído utilizando tecnologias nativas da web, eliminando a necessidade de etapas complexas de compilação.

1. No seu ambiente de desenvolvimento (como o VS Code), abra a pasta `frontend`.
2. Para evitar problemas de CORS e garantir o funcionamento correto de módulos JavaScript (`type="module"`), inicialize a aplicação utilizando a extensão **Live Server**:
* Clique com o botão direito sobre o arquivo `index.html`.
* Selecione a opção **"Open with Live Server"**.


3. A aplicação abrirá automaticamente no seu navegador padrão (geralmente no endereço `http://127.0.0.1:5500/frontend/index.html`).

---

## 🔌 Documentação das Rotas da API (Backend)

O backend expõe uma API RESTful completa sob o endpoint base `http://localhost:3000`, aceitando corpos de requisição no formato `application/json`. Todas as operações modificam em tempo real o array de produtos armazenado em memória.

### 1. Listar Produtos (Com Filtros)

* **Método:** `GET`
* **Rota:** `/produtos`
* **Query Parameters opcionais:** * `busca`: Filtra produtos cujo nome contenha o termo (case-insensitive).
* `status`: Filtra por status exato (`disponivel`, `emprestado`, `manutencao`).
* `tipo`: Filtra pelo tipo do produto (ex: `notebook`, `projetor`).
* `descricao`: Filtra produtos cuja descrição contenha o termo.


* **Código de Resposta:** `200 OK` (Retorna o array filtrado).

### 2. Buscar Produto por ID

* **Método:** `GET`
* **Rota:** `/produtos/:id`
* **Descrição:** Busca os detalhes de um único produto cadastrado.
* **Códigos de Resposta:**
* `200 OK`: Caso o produto exista (retorna o objeto do produto).
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


* **Regras de Validação:**
* Os campos `nome` e `tipo` são obrigatórios e não podem estar vazios.
* O campo `status` deve obrigatoriamente ser um dos três valores: `disponivel`, `emprestado` ou `manutencao`.
* O ID é gerado automaticamente pelo servidor utilizando o carimbo de data/hora (`Date.now()`).


* **Códigos de Resposta:**
* `201 Created`: Sucesso no cadastro (retorna o objeto completo criado).
* `400 Bad Request`: Erro de validação (campos obrigatórios ausentes ou status incorreto).



### 4. Atualizar um Produto Existente

* **Método:** `PUT`
* **Rota:** `/produtos/:id`
* **Corpo da Requisição (JSON):** Campos que deseja atualizar (aceita atualização parcial ou total dos dados mantendo as validações).
* **Regras de Validação:**
* Valida se o produto com o ID informado existe.
* Se informados, os campos `nome` e `tipo` não podem ser vazios.
* Se informado, o campo `status` deve ser válido.


* **Códigos de Resposta:**
* `200 OK`: Sucesso na atualização (retorna o objeto modificado).
* `400 Bad Request`: Erro de validação nos campos informados.
* `404 Not Found`: Produto não encontrado para o ID especificado.



### 5. Excluir um Produto

* **Método:** `DELETE`
* **Rota:** `/produtos/:id`
* **Descrição:** Remove permanentemente o produto do array em memória.
* **Códigos de Resposta:**
* `204 No Content`: Excluído com sucesso (sem corpo de retorno).
* `404 Not Found`: Produto não encontrado para o ID especificado.



---

## 🛠️ Tecnologias e Bibliotecas Utilizadas

* **Runtime de Execução:** [Bun](https://bun.sh/)
* **Framework Backend:** [Express](https://expressjs.com/)
* **Compartilhamento de Recursos:** [CORS](https://github.com/expressjs/cors)
* **Feedback Visual do Usuário:** [iziToast](https://www.google.com/search?q=https://izitoast.marcelodolza.com/) (Biblioteca Javascript para notificações flutuantes elegantes)
* **Ícones de Interface:** [Material Symbols Outlined](https://fonts.google.com/icons) (Google Fonts)
"""

with open("README.md", "w", encoding="utf-8") as f:
f.write(markdown_content)

print("File README.md successfully created!")

```
O seu arquivo Markdown (MD) está pronto.
[file-tag: code-generated-file-0-1780271562955712760]

Esse README está super completo e detalhado. Eu incluí o cabeçalho com o nome do professor, as instruções claras de como você está iniciando o Back (com Bun) e o Front (com Live Server) exatamente como você pediu, e descrevi detalhadamente todas as rotas GET, POST, PUT e DELETE com suas validações de erro, conforme solicitado pelo PDF.

Basta colocar esse arquivo `README.md` na pasta principal do seu projeto e ele vai aparecer bonitão assim que você subir pro GitHub! Lembre-se de preencher o nome da sua dupla (caso tenha) na linha 14 do arquivo, e se fez o trabalho sozinho, é só apagar aquela segunda linha.

```
