
let infos = document.getElementById('infos')
let paginationInfo = document.getElementById('pagination-info')
let searchInput = document.getElementById('searchInput')
let searchButon = document.getElementById('searchButon')

const gerarReceitas = (receita) => {
    let div = document.createElement('div')
    div.innerHTML = `
    <div class="info">
        <div class="img"><img class="img" src="${receita.imagem}"></div>
        <div class="text">
        <h3>${receita.titulo}</h3>
        <div>
            <p>
            ${receita.descricao}
            </p>
            <p>Ingredientes: ${receita.ingredientes.join(", ")}</span></p>
        </div>
        </div>
    </div>
`
    return div
}

const renderizarReceitas = (data) => {
    const startIndex = (data.page - 1) * data.itemsPerPage
    const endIndex = startIndex + data.itemsPerPage
    const receitas = data.recipes.slice(startIndex, endIndex)
    infos.innerHTML = ''
    receitas.forEach((receita) => {
        console.log(receita)
        infos.appendChild(gerarReceitas(receita))
    })
    paginationInfo.textContent = `Página ${data.page} de ${data.totalPages}`
}

fetch('../api/db.json').then((res) => {
    return res.json()
}).then(({ receitas }) => {
    console.log('receitas', receitas)
    renderizarReceitas(receitas)

    const pesquisarReceitas = () => {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredRecipes = receitas.recipes.filter((receita) =>
            receita.titulo.toLowerCase().includes(searchTerm)
        );

        renderizarReceitas({ ...receitas, recipes: filteredRecipes, page: 1 });
    };

    // search by input text
    searchButon.addEventListener('click', pesquisarReceitas);

    let searchPerdaGordura = document.getElementById('perda-gordura')
    let searchGanhoMassa = document.getElementById('ganho-massa')
    let searchVegana = document.getElementById('vegana')
    let searchVegetariana = document.getElementById('vegetariana')


    const filterByObjective = (objective) => {
        console.log('objective', objective)
        const filteredRecipes = receitas.recipes.filter((receita) =>
            receita.objetivo.filter((obj) => obj == objective).length > 0
        );

        renderizarReceitas({ ...receitas, recipes: filteredRecipes, page: 1 });
    };

    searchPerdaGordura.addEventListener('click', () => filterByObjective('Perda de Gordura'))
    searchGanhoMassa.addEventListener('click', () => filterByObjective('Ganho de Massa'))
    searchVegana.addEventListener('click', () => filterByObjective('Vegana'))
    searchVegetariana.addEventListener('click', () => filterByObjective('Vegetariana'))

    // previous page
    document.getElementById('prev-page').addEventListener('click', () => {
        if (receitas.page > 1) {
            receitas.page--
            renderizarReceitas(receitas)
        }
    })

    // next page
    document.getElementById('next-page').addEventListener('click', () => {
        if (receitas.page < receitas.totalPages) {
            receitas.page++
            renderizarReceitas(receitas)
        }
    })
})
