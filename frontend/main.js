import { fetchProducts, fetchDeleteProduct, fetchUpdateProduct, fetchCreateProduct } from './URL/api.js';

const tbody = document.querySelector('#data');

window.getProducts = async () => {

    const params = new URLSearchParams();

    const tipo = document.querySelector('#tipo').value;
    const status = document.querySelector('#status').value;
    const nome = document.querySelector('#nome').value;
    const descricao = document.querySelector('#descricao').value;

    if (tipo !== '') params.append('tipo', tipo);
    if (status !== '') params.append('status', status);
    if (nome !== '') params.append('busca', nome);
    if (descricao !== '') params.append('descricao', descricao);

    const products = await fetchProducts(params.toString());

    tbody.innerHTML = '';

    for (const p of products) {
        const tr = document.createElement('tr');

        tr.innerHTML = `
            <td>${p.id}</td>
            <td>${p.nome}</td>
            <td>${p.tipo}</td>
            <td>${p.status}</td>
            <td>${p.descricao}</td>
            <td>
                <span class="edit-button material-symbols-outlined" style="cursor: pointer;">
                    edit
                </span>
            </td>
            <td>
                <span class="delete-button material-symbols-outlined" style="cursor: pointer;">
                    delete
                </span>
            </td>
        `;

        tbody.appendChild(tr);

        const editButton = tr.querySelector('.edit-button');
        const deleteButton = tr.querySelector('.delete-button');

        editButton.addEventListener('click', () => {
            getProductInfo(p);
        });

        deleteButton.addEventListener('click', () => {
            deleteProduct(p);
        });
    }
};

function getProductInfo(produto) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const div = document.querySelector('#campo-edicao-cadastro');
    div.innerHTML = '';

    const form = document.createElement('form');

    form.innerHTML = `
        <p>Painel de Edição</p>
        <input type="text" id="nomeForm" placeholder="Nome" />
        <select id="statusForm" required>
            <option value=""> - Status - </option>
            <option value="emprestado">Emprestado</option>
            <option value="disponivel">Disponível</option>
            <option value="manutencao">Em Manutenção</option>
        </select>
        <select id="tipoForm" required>
            <option value=""> - Tipo - </option>
            <option value="notebook">Notebook</option>
            <option value="projetor">Projetor</option>
        </select>
        <input type="text" id="descricaoForm" placeholder="Descrição" />

        <button type="button" id="btnSalvar">Salvar Edição</button>
        <button type="button" id="btnCancelar">Cancelar</button>
    `;

    div.appendChild(form);

    form.querySelector('#nomeForm').value = produto.nome;
    form.querySelector('#tipoForm').value = produto.tipo;
    form.querySelector('#statusForm').value = produto.status;
    form.querySelector('#descricaoForm').value = produto.descricao;

    form.querySelector('#btnSalvar').addEventListener('click', () => {
        const newProduct = {
            id: produto.id,
            nome: form.querySelector('#nomeForm').value,
            tipo: form.querySelector('#tipoForm').value,
            status: form.querySelector('#statusForm').value,
            descricao: form.querySelector('#descricaoForm').value
        }
        editarProduto(newProduct);
    });

    form.querySelector('#btnCancelar').addEventListener('click', () => {
        cancelarEdicaoCadastro();
    });
}

async function deleteProduct(produto) {

    if (confirm(`Deseja realmente excluir o produto [ ${produto.nome} ]?`)) {
        const response = await fetchDeleteProduct(produto.id);
        const div = document.querySelector('#campo-edicao-cadastro');
        div.innerHTML = '';

        if (response.ok) {
            window.getProducts();
            alert('Produto deletado com sucesso!');
        }
    }
}

async function editarProduto(produto) {
    const result = await fetchUpdateProduct(produto);

    if (result.ok) {
        window.getProducts();
        alert('Produto editado com sucesso!');
    }
    cancelarEdicaoCadastro();
}

function cancelarEdicaoCadastro() {
    const div = document.querySelector('#campo-edicao-cadastro');
    div.innerHTML = '';
}

window.cadastrarProduto = () => {
    const div = document.querySelector('#campo-edicao-cadastro');
    div.innerHTML = '';

    const form = document.createElement('form');

    form.innerHTML = `
        <p>Painel de Cadastro</p>
        <input type="text" id="nomeForm" placeholder="Nome" />
        <select id="statusForm" required>
            <option value=""> - Status - </option>
            <option value="emprestado">Emprestado</option>
            <option value="disponivel">Disponível</option>
            <option value="manutencao">Em Manutenção</option>
        </select>
        <select id="tipoForm" required>
            <option value=""> - Tipo - </option>
            <option value="notebook">Notebook</option>
            <option value="projetor">Projetor</option>
        </select>
        <input type="text" id="descricaoForm" placeholder="Descrição" />

        <button type="button" id="btnSalvarCadastro">Salvar Cadastro</button>
        <button type="button" id="btnCancelar">Cancelar Cadastro</button>
    `;
    div.appendChild(form);

    form.querySelector('#btnSalvarCadastro').addEventListener('click', () => {
        salvarProduto();
    });

    form.querySelector('#btnCancelar').addEventListener('click', () => {
        cancelarEdicaoCadastro();
    });
};

async function salvarProduto() {
    const nome = document.querySelector('#nomeForm').value;
    const tipo = document.querySelector('#tipoForm').value;
    const status = document.querySelector('#statusForm').value;
    const descricao = document.querySelector('#descricaoForm').value;

    if (!nome || !tipo || !status) {
        alert('O produto deve ter NOME, TIPO e STATUS preenchidos!');
        return;
    }

    const novoProduto = { nome, tipo, status, descricao };

    const response = await fetchCreateProduct(novoProduto);

    if (response.ok) {
        window.getProducts();
        alert('Produto cadastrado com sucesso!');
        cancelarEdicaoCadastro();
    } else {
        alert('Erro ao cadastrar o produto.');
    }
}

window.getProducts();