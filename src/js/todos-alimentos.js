
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

fetch('../api/db.json').then((res) => {
  return res.json()
}).then(({ productsData }) => {
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




{/* <tbody>
<tr>
  <td>1</td>
  <td id="product-name">Banana da Terra</td>
  <td>139 Kcal</td>
  <td>1,44g</td>
  <td>0,24g</td>
  <td>33,7g</td>
  <td>1,53g</td>
</tr>
<tr>
  <td>2</td>
  <td id="product-name">Laranja Bahia</td>
  <td>86 Kcal</td>
  <td>1,50g</td>
  <td>0,20g</td>
  <td>25,0g</td>
  <td>10,6g</td>
</tr>
<tr>
  <td>3</td>
  <td id="product-name">Maçã Fuji</td>
  <td>59 Kcal</td>
  <td>0,29g</td>
  <td>-</td>
  <td>15,2g</td>
  <td>1,35g</td>
</tr>
<tr>
  <td>4</td>
  <td id="product-name">Milho de Pipoca, com óleo e sal</td>
  <td>433 Kcal</td>
  <td>9,88g</td>
  <td>15,9g</td>
  <td>70,0g</td>
  <td>14,3g</td>
</tr>
<tr>
  <td>5</td>
  <td id="product-name">Batata Frita McDonald's</td>
  <td>315 Kcal</td>
  <td>3,41g</td>
  <td>15,5g</td>
  <td>42,6g</td>
  <td>3,90g</td>
</tr>
<tr>
  <td>6</td>
  <td id="product-name">Picanha Bovina grelhada</td>
  <td>233 Kcal</td>
  <td>31,9g</td>
  <td>11,3g</td>
  <td>0,90g</td>
  <td>-</td>
</tr>
</tbody> */}

