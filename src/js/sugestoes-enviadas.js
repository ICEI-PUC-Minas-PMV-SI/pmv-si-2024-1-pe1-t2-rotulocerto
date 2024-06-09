document.addEventListener("DOMContentLoaded", function() {

  let storedSugestoes = localStorage.getItem('sugestoes');
  const main = document.querySelector('main');
  
  if (storedSugestoes) {
      let data = JSON.parse(storedSugestoes);

      const suggestionsList = data.suggestionsList;
      const itemsPerPage = data.itemsPerPage || 5; 
      const totalPages = Math.ceil(suggestionsList.length / itemsPerPage);
      let currentPage = 1;

      function renderSugestoes(page) {
        main.innerHTML = '';  

        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const paginatedSuggestions = suggestionsList.slice(start, end);

        paginatedSuggestions.forEach(sugestao => {
          const section = document.createElement('section');
          section.classList.add('content', 'form', 'col-25', 'col-75', 'center');

          const sugestaoDiv = document.createElement('div');
          sugestaoDiv.classList.add('sugestao');

          const nomeP = document.createElement('p');
          nomeP.innerHTML = `<em>Nome Completo:</em> ${sugestao.nome}`;
          sugestaoDiv.appendChild(nomeP);

          const emailP = document.createElement('p');
          emailP.innerHTML = `<em>Email:</em> ${sugestao.email}`;
          sugestaoDiv.appendChild(emailP);

          const sugestaoDescricaoDiv = document.createElement('div');
          sugestaoDescricaoDiv.classList.add('sugestao-descricao');

          const descricaoP = document.createElement('p');
          descricaoP.textContent = sugestao.sugestao;
          sugestaoDescricaoDiv.appendChild(descricaoP);

          section.appendChild(sugestaoDiv);
          section.appendChild(sugestaoDescricaoDiv);

          main.appendChild(section);
        });

        document.getElementById('pagination-info').textContent = `Página ${page} de ${totalPages}`;
      }

      function setupPagination() {
        const prevButton = document.getElementById('prev-page');
        const nextButton = document.getElementById('next-page');

        prevButton.addEventListener('click', () => {
          if (currentPage > 1) {
            currentPage--;
            renderSugestoes(currentPage);
          }
        });

        nextButton.addEventListener('click', () => {
          if (currentPage < totalPages) {
            currentPage++;
            renderSugestoes(currentPage);
          }
        });

        renderSugestoes(currentPage);
      }

      setupPagination();
  } else {
      const h1 = document.createElement('h1');
      h1.textContent = 'Não há sugestões';
      main.appendChild(h1);
  }
});
