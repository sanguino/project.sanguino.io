let numbers;
const lastNumbers = document.querySelector('.last');
const bingoImg = document.querySelector('.bingo');
document.addEventListener('DOMContentLoaded', function() {
  numbers = document.querySelectorAll('.number');
  numbers.forEach(number => {
    number.addEventListener('click', function() {
      this.classList.toggle('marked');
      if (this.classList.contains('marked')) {
        lastNumbers.insertBefore(this.cloneNode(true), lastNumbers.firstChild);
      } else {
        const currentNumbers = lastNumbers.querySelectorAll('.number');
        for (var i = 0; i < currentNumbers.length; i++) {
          if (currentNumbers[i].getAttribute('data-number') === this.getAttribute('data-number')) {
            lastNumbers.removeChild(currentNumbers[i]);
            break;
            
          }
        }
      }
    });
  });
});


let keySequence = '';
document.addEventListener('keydown', (event) => {
  const keyPressed = event.key.toLowerCase();
  console.log(keySequence)
  if (keyPressed === 'r' || keyPressed === 'e' || keyPressed === 's' || keyPressed === 't' || keyPressed === 'b' || keyPressed === 'i' || keyPressed === 'n' || keyPressed === 'g' || keyPressed === 'o' || keyPressed === 'a' || keyPressed === 'c' || keyPressed === 'k') {
    keySequence += keyPressed;
    console.log(keySequence);
    if (keySequence === 'reset') {
      keySequence = '';
      numbers.forEach(number => {
        number.classList.remove('marked');
      });
      while (lastNumbers.firstChild) {
        lastNumbers.removeChild(lastNumbers.firstChild);
      }
      bingoImg.classList.add('hidden');
      keySequence = '';
    } else if (keySequence === 'bingo') {
        bingoImg.classList.remove('hidden');
        keySequence = '';
    } else if (keySequence === 'back') {
        bingoImg.classList.add('hidden');
        keySequence = '';
    } else if (!'reset'.startsWith(keySequence) && !'bingo'.startsWith(keySequence) && !'back'.startsWith(keySequence)) {
      keySequence = '';
    }
  } else {
    keySequence = '';
  }
});