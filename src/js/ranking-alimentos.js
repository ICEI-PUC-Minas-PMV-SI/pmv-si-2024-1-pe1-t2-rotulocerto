
let tbody = document.getElementById('tbody')
let filterButtons = document.querySelectorAll('.filter-buttons span')
let tableHeaders = document.querySelectorAll('th');

let currentFilter = 'calories'

const convertNumberToString = (number) => {
  return number.toString().replace('.', ',')
}

const createTableData = (product) => {
  let tr = document.createElement('tr')
  tr.innerHTML = `
    <tr>
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

const renderRankingTable = (data, filter) => {
  data.products.sort((a, b) => parseFloat(b.nutrients[filter]) - parseFloat(a.nutrients[filter]))
  const topProducts = data.products.slice(0, 6)

  tbody.innerHTML = '' 

  topProducts.forEach((product) => {
    tbody.appendChild(createTableData(product)) 
  })

  tableHeaders.forEach(th => th.classList.remove('active-header'));

  tableHeaders.forEach(th => {
    if (th.getAttribute('data-filter') === filter) {
      th.classList.add('active-header');
    }
  });
} 

fetch('../api/db.json').then((res) => {
  return res.json()
}).then(({ productsData }) => {

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
