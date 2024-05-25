let tbody = document.getElementById('tbody')
let paginationInfo = document.getElementById('pagination-info')

const convertNumberToString = (number) => {
  return number.toString().replace('.', ',')
}

const createTableData = (product) => {
  let tr = document.createElement('tr')
  tr.innerHTML = `
    <tr>
      <td>${product.id}</td>
      <td class="product-name">${product.name}</td>
      <td>${convertNumberToString(product.nutrients.calories)} g</td>
      <td>${convertNumberToString(product.nutrients.proteins)} g</td>
      <td>${convertNumberToString(product.nutrients.fats)} g</td>
      <td>${convertNumberToString(product.nutrients.carbohydrates)} g</td>
      <td>${convertNumberToString(product.nutrients.fibers)} g</td>
      <td>${convertNumberToString(product.nutrients.sugars)} g</td>
      <td>${convertNumberToString(product.nutrients.calcium)} mg</td>
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
