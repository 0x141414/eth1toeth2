var card = document.querySelector('.ethcard');
/*
card.addEventListener( 'click', function() {
  card.classList.toggle('is-flipped');
});
*/

function ethMainCardFlip()
{
  setTimeout(function () {
    // This will be executed after 1,000 milliseconds
    card.classList.toggle('is-flipped');
    ethMainCardFlip();
  }, 2000);
  
}

ethMainCardFlip();
