window.onload = () => {
  let searchButton = document.querySelector('.button');
  
  searchButton.addEventListener('click', () => {
    console.log('teste')
  });
}


if (typeof module !== 'undefined') {
  module.exports = searchButton;
}