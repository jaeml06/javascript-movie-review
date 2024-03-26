import logoPng from '../../images/logo.png';

export function createHeader(logoHandler: () => void, inputSubmitHandler: (inputValue: string) => void) {
  const header = render(logoHandler, inputSubmitHandler);
  return header;
}

function render(logoHandler: () => void, inputSubmitHandler: (inputValue: string) => void) {
  const header = document.createElement('header');

  const logo = document.createElement('h1');
  const logoImage = document.createElement('img');
  logoImage.src = logoPng;
  logoImage.alt = 'MovieList 로고';
  logo.appendChild(logoImage);

  const searchBox = document.createElement('form');
  searchBox.className = 'search-box';

  const searchInput = document.createElement('input');
  searchInput.placeholder = '검색';

  const searchButton = document.createElement('button');
  searchButton.type = 'submit';
  searchButton.className = 'search-button';
  searchButton.textContent = '검색';

  searchBox.append(searchInput, searchButton);

  header.append(logo, searchBox);

  logo.addEventListener('click', () => {
    logoHandler();
  });

  searchBox.addEventListener('submit', (event: Event) => {
    event.preventDefault();
    if (searchInput.value.trim() !== '') inputSubmitHandler(searchInput.value);
  });

  return header;
}
