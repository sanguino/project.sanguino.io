let numbers;
const lastNumbers = document.querySelector('.last');
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
  if (keyPressed === 'r' || keyPressed === 'e' || keyPressed === 's' || keyPressed === 't') {
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
    } else if (!'reset'.startsWith(keySequence)) {
      keySequence = '';
    }
  } else {
    keySequence = '';
  }
});