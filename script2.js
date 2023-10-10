const helloString = 'Hi there. This is Wilson!';
function printFavoriteAnimal() {
  document.querySelector('p').innerText += ' My favorite animal is tortoise!';
  document.querySelector('p').innerText += ' This is working. Yay! ';
}



export { helloString as hello, printFavoriteAnimal  };