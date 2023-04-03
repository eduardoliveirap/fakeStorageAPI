function buscarCategorias()
{
    fetch("https://fakestoreapi.com/products/categories")
    .then(res => res.json())
    .then(listaCategorias => {
        listaCategorias.forEach(cada => {
            categorias.innerHTML += `
            <li class="list-group-item">
            <h6>
            <input type="checkbox">
            <span>${cada}</span>
        </h6>
        </li>`
        });
    });
}buscarCategorias();

function buscarProdutos() {
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json()) 
    .then(listaProdutos => {
        listaProdutos.forEach(cada => {
            products.innerHTML += `<li>
            <div class="card">
                <img src="${cada.image}" alt="" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${cada.title}</h5>
                    <p class="card-text text-wrap">${cada.description}</p>
                    <a href="" class="btn btn-primary">Adicionar ao carrinho</a>
                </div>
            </div>
        </li>`
        });
    });
}buscarProdutos();