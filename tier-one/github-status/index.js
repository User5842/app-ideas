import Operations from './components/operations.component.js';

const operations = new Operations('.operations');

const loader = document.querySelector('.loader');
const refreshButton = document.querySelector('button');

refreshButton.addEventListener('click', () => {
  loader.classList.toggle('loader__visibility_hidden');
  operations.clear();
  operations.fetchOperations();
  loader.classList.toggle('loader__visibility_hidden');
});
