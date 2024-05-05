class TemplateHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header>
        <div class="header-container">
          <nav class="menu">
            <div class="toggle-btn">
              <i class="fa-solid fa-bars"></i>
            </div>
            <div class="left-side">
              <a href="/src/index.html">
                <img class="logo" src="/src/assets/logo.png" alt="Logo" />
              </a>
              <ul>
                <li><a href="/src/index.html">Início</a></li>
                <li>
                  <p class="submenu-toggle alimentos">Alimentos</p>
                  <ul class="submenu alimentos">
                    <li><a href="/src/pages/aprenda-sobre-rotulos.html">Aprenda sobre os rótulos</a></li>
                    <li><a href="/src/pages/todos-alimentos.html">Todos os alimentos</a></li>
                    <li><a href="/src/pages/receitas-dietas.html">Receitas e dietas</a></li>
                    <li><a href="/src/pages/ranking-alimentos.html">Ranking de Alimentos</a></li>
                    <li></li>
                  </ul>
                </li>
                <li>
                  <p class="submenu-toggle saude">Saúde</p>
                  <ul class="submenu saude">
                    <li><a href="/src/pages/profissionais-saude.html">Profissionais de saúde</a></li>
                    <li><a href="/src/pages/teste-de-imc.html">Teste de IMC</a></li>
                    <li></li>
                  </ul>
                </li>
                <li><a href="/src/pages/mercados.html">Mercados</a></li>
                <li><a href="/src/pages/enviar-sugestoes.html">Sugestões</a></li>
                <li><a href="/src/pages/login-admin.html">Acesso Admin</a></li>
              </ul>
            </div>
            <button class="admin-button">Acesso Admin</button>
          </nav>

          <div class="dropdown-menu">
            <li><a href="/src/index.html">Início</a></li>
            <li>
              <p class="submenu-toggle m-alimentos">Alimentos</p>
              <ul class="submenu m-alimentos">
                <li><a href="/src/pages/aprenda-sobre-rotulos.html">Aprenda sobre os rótulos</a></li>
                <li><a href="/src/pages/todos-alimentos.html">Todos os alimentos</a></li>
                <li><a href="/src/pages/receitas-dietas.html">Receitas e dietas</a></li>
                <li><a href="/src/pages/ranking-alimentos.html">Ranking de Alimentos</a></li>
              </ul>
            </li>
            <li>
              <p class="submenu-toggle m-saude">Saúde</p>
              <ul class="submenu m-saude">
                <li><a href="/src/pages/profissionais-saude.html">Profissionais de saúde</a></li>
                <li><a href="/src/pages/teste-de-imc.html">Teste de IMC</a></li>
              </ul>
            </li>
            <li><a href="/src/pages/mercados.html">Mercados</a></li>
            <li><a href="/src/pages/enviar-sugestoes.html">Sugestões</a></li>
            <li><a href="/src/pages/login-admin.html">Acesso Admin</a></li>
          </div>
        </div>
      </header>
    `;
  }
}

customElements.define('template-header', TemplateHeader);

class TemplateFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <div class="footer-container">
          <img class="logo" src="/src/assets/logo.png" alt="Logo" />
          <div class="separator"></div>
          <div class="footer-links">
            <div>
              <p>Páginas</p>
              <ul>
                <li><a href="/src/index.html">Home</a></li>

                <li><a href="/src/pages/aprenda-sobre-rotulos.html">Aprenda sobre os rótulos</a></li>
                <li><a href="/src/pages/todos-alimentos.html">Todos os alimentos</a></li>
                <li><a href="/src/pages/receitas-dietas.html">Receitas e dietas</a></li>
                <li><a href="/src/pages/ranking-alimentos.html">Ranking de Alimentos</a></li>

                <li><a href="/src/pages/profissionais-saude.html">Profissionais de saúde</a></li>
                <li><a href="/src/pages/teste-de-imc.html">Teste de IMC</a></li>

                <li><a href="/src/pages/mercados.html">Mercados</a></li>
                <li><a href="/src/pages/enviar-sugestoes.html">Sugestões</a></li>
              </ul>
            </div>
            <div>
              <p>Seções da Home</p>
              <ul>
                <li><a href="/src/index.html#alimentos">Alimentos</a></li>
                <li><a href="/src/index.html#saude">Saúde</a></li>
                <li><a href="/src/index.html#mercados">Mercados</a></li>
                <li><a href="/src/index.html#recomendacoes">Recomendações</a></li>
                <li><a href="/src/index.html#sugestoes">Sugestões</a></li>
              </ul>
            </div>
          </div>
          <div class="separator"></div>
          <div class="copyright">
            <p>© Copyright. Rótulo Certo 2024</p>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('template-footer', TemplateFooter);


const toggleBtn = document.querySelector('.toggle-btn');
const toggleBtnIcon = document.querySelector('.toggle-btn i');
const dropdownMenu = document.querySelector('.dropdown-menu');

toggleBtn.onclick = (event) => {
  event.stopPropagation();
  dropdownMenu.classList.toggle('open');

  const isOpen = dropdownMenu.classList.contains('open');

  toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
}

document.addEventListener('click', (event) => {
  if (!toggleBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
    dropdownMenu.classList.remove('open');
    toggleBtnIcon.classList = 'fa-solid fa-bars';
  }
});


const submenuToggles = document.querySelectorAll('.submenu-toggle');
submenuToggles.forEach((toggle) => {
  toggle.onclick = (event) => {
    event.stopPropagation();
    const submenu = document.querySelector(`.submenu.${toggle.classList[1]}`);
    console.log(submenu);
    if(submenu.classList.contains('open')){
      submenu.classList.remove('open');
    }else{
      submenu.classList.add('open');
    }
  }
});