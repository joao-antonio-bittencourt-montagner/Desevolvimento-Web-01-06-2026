import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());


let produtos = [
    {
        id: 1,
        nome: 'Alienware',
        tipo: 'notebook',
        status: 'disponivel',
        descricao: 'Notebook para processamento elevado'
    },
    {
        id: 2,
        nome: 'Chromebook 14',
        tipo: 'notebook',
        status: 'manutencao',
        descricao: 'Notebook leve e portátil'
    },
    {
        id: 3,
        nome: 'Epson Power Lite W39',
        tipo: 'projetor',
        status: 'emprestado',
        descricao: 'Projetor para apresentações'
    },
    {
        id: 4,
        nome: 'MacBook Pro 16',
        tipo: 'notebook',
        status: 'disponivel',
        descricao: 'Notebook para edição de vídeo e design'
    },
    {
        id: 5,
        nome: 'Sony WH-1000XM4',
        tipo: 'fone de ouvido',
        status: 'emprestado',
        descricao: 'Fone de ouvido com cancelamento de ruído ativo'
    },
    {
        id: 6,
        nome: 'iPad Air',
        tipo: 'tablet',
        status: 'disponivel',
        descricao: 'Tablet para ilustrações e anotações rápidas'
    },
    {
        id: 7,
        nome: 'Logitech C920',
        tipo: 'webcam',
        status: 'disponivel',
        descricao: 'Webcam Full HD para videoconferências'
    },
    {
        id: 8,
        nome: 'Dell UltraSharp 27',
        tipo: 'monitor',
        status: 'manutencao',
        descricao: 'Monitor 4K com alta fidelidade de cores'
    },
    {
        id: 9,
        nome: 'Blue Yeti',
        tipo: 'microfone',
        status: 'disponivel',
        descricao: 'Microfone condensador USB para podcasts e gravações'
    },
    {
        id: 10,
        nome: 'ThinkPad T14',
        tipo: 'notebook',
        status: 'emprestado',
        descricao: 'Notebook corporativo de alta durabilidade'
    },
    {
        id: 11,
        nome: 'Raspberry Pi 4',
        tipo: 'computador',
        status: 'disponivel',
        descricao: 'Microcomputador para testes e prototipagem'
    },
    {
        id: 12,
        nome: 'BenQ TH585',
        tipo: 'projetor',
        status: 'disponivel',
        descricao: 'Projetor de alta luminosidade para salas de reunião'
    },
    {
        id: 13,
        nome: 'Kindle Paperwhite',
        tipo: 'e-reader',
        status: 'manutencao',
        descricao: 'Leitor de livros digitais com iluminação embutida'
    }
];



app.get('/produtos', (req, res) => {

    const { status, tipo, busca, descricao } = req.query;
    let resultado = produtos;

    if (status) resultado = resultado.filter(p => p.status === status);

    if (tipo) resultado = resultado.filter(p => p.tipo === tipo);

    if (busca) resultado = resultado.filter(p => p.nome.toLowerCase().includes(busca.toLowerCase()))

    if (descricao) resultado = resultado.filter(p => p.descricao.toLowerCase().includes(descricao.toLowerCase()))

    res.json(resultado);
});

app.get('/produtos/:id', (req, res) => {
    const id = Number(req.params.id);
    const produto = produtos.find(p => p.id === id);

    if (!produto) {
        return res.status(404).json({
            error: 'Produto não encontrado!'
        });
    }

    res.status(200).json(produto);
});

app.delete('/produtos/:id', (req, res) => {
    const id = Number(req.params.id)
    const produto = produtos.find(p => p.id === id)

    if (!produto) {
        return res.status(404).json({
            error: 'Produto não encontrado'
        })
    } else {
        produtos = produtos.filter(p => p.id !== id)
    }
    res.status(204).send();
})


app.put('/produtos/:id', (req, res) => {
    const id = Number(req.params.id);
    const { nome, tipo, status, descricao } = req.body;

    const produto = produtos.find(p => p.id === id)


    if (!produto) {
        return res.status(404).json({
            error: 'Produto não encontrado'
        })
    }

    else if ((nome == null || nome == '') || (tipo == null || tipo == '')) {
        return res.status(400).json({
            error: "Campos NOME e TIPO obrigatórios não enviados!"
        });
    }

    const statusValidos = ['disponivel', 'emprestado', 'manutencao'];
    if (!statusValidos.includes(status)) {
        return res.status(400).json({
            error: "Campos STATUS incorreto, deve possuir um dos status [disponivel, emprestado, manutencao]!"
        });
    }
    produto.nome = nome ? nome : produto.nome;
    produto.tipo = tipo ? tipo : produto.tipo;
    produto.status = status ? status : produto.status;
    produto.descricao = descricao ? descricao : produto.descricao;

    res.status(200).json(produto)
})


app.post('/produtos', (req, res) => {
    const { nome, tipo, status, descricao } = req.body;

    if (!nome || !tipo) {
        return res.status(400).json({
            error: "Campos NOME e TIPO obrigatórios não enviados!"
        });
    }

    const statusValidos = ['disponivel', 'emprestado', 'manutencao'];
    if (!statusValidos.includes(status)) {
        return res.status(400).json({
            error: "Campo STATUS incorreto, deve possuir um dos status [disponivel, emprestado, manutencao]!"
        });
    }

    const novoProduto = {
        id: Date.now(),
        nome,
        tipo,
        status,
        descricao
    };

    produtos.push(novoProduto);
    res.status(201).json(novoProduto);
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});