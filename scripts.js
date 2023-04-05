    function buscarCategorias()
{
    fetch("https://fakestoreapi.com/products/categories")
    .then(res => res.json())
    .then(listaCategorias => {
    
        listaCategorias.forEach(cada => {
            categorias.innerHTML += `
            <li class="list-group-item">
            <h6>
            <input name="${cada.replace(" ","-")}" type="checkbox" onClick="filtro()">
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
        lista = listaProdutos;
        listaProdutos.forEach(cada => {
            products.innerHTML += `
            <li class="${cada.category.replace(" ","-")}">
            <div class="card">
                <img src="${cada.image}" alt="" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title" title="${cada.title}">${cada.title}</h5>
                    <div class="badge bg-secondary mb-2">${cada.category}</div>
                    <p class="card-text text-wrap">${cada.description}</p>
                    <a href="" class="btn btn-primary">Adicionar ao carrinho</a>
                </div>
            </div>
        </li>`
        });
    });
}buscarProdutos();

function filtro(){
    let inputs = document.querySelectorAll('input:checked')
    let input_nomes = [];
    for(let i = 0; i < inputs.length; i++){
        input_nomes.push(inputs[i].name);
    }

    let lis = document.querySelectorAll("#products li");
    for(let i= 0; i< lis.length; i++) {
        if(!lis[i].classList.contains(input_nomes.toString())){
            lis[i].style.display = 'none'
        }
    }
}