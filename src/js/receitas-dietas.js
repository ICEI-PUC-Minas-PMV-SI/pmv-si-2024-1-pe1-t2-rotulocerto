
let infos = document.getElementById('infos')
let paginationInfo = document.getElementById('pagination-info')
let searchInput = document.getElementById('searchInput')
let searchButon = document.getElementById('searchButon')

const createTableData = (product) => {
    let div = document.createElement('div')
    div.innerHTML = `
    <div class="info">
        <div class="img"><img class="img" src="${product.imagem}"></div>
        <div class="text">
        <h3>${product.titulo}</h3>
        <div>
            <p>
            ${product.descricao}
            </p>
            <p>Ingredientes: ${product.ingredientes.join(", ")}</span></p>
        </div>
        </div>
    </div>
`
    return div
}

const renderTablePage = (data) => {
    const startIndex = (data.page - 1) * data.itemsPerPage
    const endIndex = startIndex + data.itemsPerPage
    const receitas = data.recipes.slice(startIndex, endIndex)
    infos.innerHTML = ''
    receitas.forEach((product) => {
        console.log(product)
        infos.appendChild(createTableData(product))
    })
    paginationInfo.textContent = `Página ${data.page} de ${data.totalPages}`
}

fetch('../api/db.json').then((res) => {
    return res.json()
}).then(({ receitas }) => {
    console.log('receitas', receitas)
    renderTablePage(receitas)

    const pesquisarReceitas = () => {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredRecipes = receitas.recipes.filter((product) =>
            product.titulo.toLowerCase().includes(searchTerm)
        );

        renderTablePage({ ...receitas, recipes: filteredRecipes, page: 1 });
    };

    searchButon.addEventListener('click', pesquisarReceitas);

    document.getElementById('prev-page').addEventListener('click', () => {
        if (receitas.page > 1) {
            receitas.page--
            renderTablePage(receitas)
        }
    })

    document.getElementById('next-page').addEventListener('click', () => {
        if (receitas.page < receitas.totalPages) {
            receitas.page++
            renderTablePage(receitas)
        }
    })
})
