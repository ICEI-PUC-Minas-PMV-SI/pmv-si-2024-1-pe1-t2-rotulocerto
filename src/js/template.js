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
                <li><a href="#">Início</a></li>
                <li><a href="#">Alimentos</a></li>
                <li><a href="#">Rótulos</a></li>
                <li><a href="#">Profissionais de saúde</a></li>
                <li><a href="/src/pages/mercados.html">Mercados</a></li>
                <li><a href="#">Acesso Admin</a></li>
              </ul>
            </div>
            <button class="admin-button">Acesso Admin</button>
          </nav>

          <div class="dropdown-menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">Alimentos</a></li>
            <li><a href="#">Rótulos</a></li>
            <li><a href="#">Profissionais de saúde</a></li>
            <li><a href="/src/pages/mercados.html">Mercados</a></li>
            <li><a href="#">Acesso Admin</a></li>
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
              <p>Alimentos</p>
              <ul>
                <li><a href="#">Como ler os rótulos</a></li>
                <li><a href="#">Todos os alimentos</a></li>
                <li><a href="#">Categorias de alimentos</a></li>
                <li>
                  <a href="/src/pages/ranking-alimentos.html">
                    Ranking de Alimentos
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p>Profissionais de saúde</p>
              <ul>
                <li><a href="#">Como ler os rótulos</a></li>
                <li><a href="#">Todos os alimentos</a></li>
                <li><a href="#">Categorias de alimentos</a></li>
                <li><a href="#">Restrição alimentar</a></li>
              </ul>
            </div>
            <div>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="/src/pages/mercados.html">Mercados</a></li>
                <li><a href="#">Notícias</a></li>
                <li><a href="#">Sugestões</a></li>
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

