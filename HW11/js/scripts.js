$('.pricing__choice-button-month').addClass('selected');

let button = $('.pricing__choice-button');

button.on('click', function() {
  button.removeClass('selected');
  $(this).addClass('selected');
  if (this.classList.contains('pricing__choice-button-month')) {
    $('.price-basic').text('19');
    $('.price-pro').text('29');
    $('.period').text('month');
  } else {
    $('.price-basic').text('219');
    $('.price-pro').text('319');
    $('.period').text('year');
  }
});