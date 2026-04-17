# Giftback Admin — protótipos estáticos

HTML/CSS/JS estáticos para demonstração ou GitHub Pages.

## Estrutura

- **`index.html`** — Índice com links para todas as telas.
- **`assets/css/`** — `prototype-theme.css` (tema e componentes).
- **`assets/js/`** — Scripts partilhados (`prototype-sidebar.js`, `prototype-modal-stores.js`, `prototype-submenu.js`).
- **`assets/media/`** — Imagens e outros ficheiros binários (pasta reservada no repositório).
- **`assets/index.html`** — Página de referência de assets (ícones de exemplo e lista de ficheiros).

As demais páginas `.html` na raiz são protótipos; todas usam caminhos relativos (`assets/css/...`, `assets/js/...`) para funcionar em GitHub Pages com o repositório na raiz do site.

## Publicar no GitHub

1. Inicialize o git nesta pasta (se ainda não existir): `git init`
2. Adicione o remoto e faça push da branch principal.
3. Em **Settings → Pages**, escolha a branch e a pasta `/ (root)`.

Abra o site em `https://<utilizador>.github.io/<repositório>/` — o `index.html` será a página inicial.
