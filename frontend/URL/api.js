const BASE_URL = 'http://localhost:3000';

export async function fetchProducts(queryString) {
    const response = await fetch(`${BASE_URL}/produtos?${queryString}`, {
        method: 'GET'
    });
    return await response.json();
}

export async function fetchDeleteProduct(id) {
    return await fetch(`${BASE_URL}/produtos/${id}`, { 
        method: 'DELETE' 
    });
}

export async function fetchUpdateProduct(produto) {
    return await fetch(`${BASE_URL}/produtos/${produto.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(produto)
    });
}

export async function fetchCreateProduct(novoProduto) {
    return await fetch(`${BASE_URL}/produtos`, { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(novoProduto)
    });
}