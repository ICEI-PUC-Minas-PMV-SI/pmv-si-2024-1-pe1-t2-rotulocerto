
let tbody = document.getElementById('tbody')
let filterButtons = document.querySelectorAll('.filter-buttons span')

let currentFilter = 'calories'

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

const renderRankingTable = (data, filter) => {
  data.products.sort((a, b) => parseFloat(b.nutrients[filter]) - parseFloat(a.nutrients[filter]))
  const topProducts = data.products.slice(0, 6)

  tbody.innerHTML = '' 

  topProducts.forEach((product) => {
    tbody.appendChild(createTableData(product)) 
  })
} 

fetch('../api/db.json').then((res) => {
  return res.json()
}).then(({ productsData }) => {
  console.log('productsData', productsData)
  renderRankingTable(productsData, currentFilter)
  
  document.querySelector(`[data-filter="${currentFilter}"]`).style.fontWeight = 'bold';

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      currentFilter = button.getAttribute('data-filter')

      renderRankingTable(productsData, currentFilter)

      filterButtons.forEach(btn => btn.style.fontWeight = 'normal')
      button.style.fontWeight = 'bold'
    })
  })
}) 
