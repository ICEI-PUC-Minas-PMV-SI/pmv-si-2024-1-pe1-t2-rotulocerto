let tbody = document.getElementById('tbody')
let paginationInfo = document.getElementById('pagination-info')

const createTableData = (product) => {
  let tr = document.createElement('tr')
  tr.innerHTML = `
    <tr>
      <td>${product.id}</td>
      <td class="product-name">${product.name}</td>
      <td>${product.nutrients.calories}</td>
      <td>${product.nutrients.proteins}</td>
      <td>${product.nutrients.fats}</td>
      <td>${product.nutrients.carbohydrates}</td>
      <td>${product.nutrients.fibers}</td>
      <td>${product.nutrients.sugars}</td>
      <td>${product.nutrients.calcium}</td>
    </tr>
  `

  return tr
}

const renderTablePage = (data) => {
  const startIndex = (data.page - 1) * data.itemsPerPage
  const endIndex = startIndex + data.itemsPerPage
  const productsToShow = data.products.slice(startIndex, endIndex)

  tbody.innerHTML = ''
  productsToShow.forEach((product) => {
    tbody.appendChild(createTableData(product))
  })
  paginationInfo.textContent = `Página ${data.page} de ${data.totalPages}`
}

fetch('../api/db.json')
  .then((res) => {
    return res.json()
  })
  .then(({ productsData }) => {
    console.log('productsData', productsData)
    renderTablePage(productsData)

    document.getElementById('prev-page').addEventListener('click', () => {
      if (productsData.page > 1) {
        productsData.page--
        renderTablePage(productsData)
      }
    })

    document.getElementById('next-page').addEventListener('click', () => {
      if (productsData.page < productsData.totalPages) {
        productsData.page++
        renderTablePage(productsData)
      }
    })
  })
