var card = document.querySelector('.ethcard');

var smallCard = document.querySelector('.ethcard-small');
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

function ethSmallCardFlip()
{
  setTimeout(function () {
    // This will be executed after 1,000 milliseconds
    smallCard.classList.toggle('is-flipped');
    ethSmallCardFlip();
  }, 2000);
  
}

ethMainCardFlip();

