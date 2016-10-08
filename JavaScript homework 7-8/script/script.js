$(function() {

  $('.tabs__tablink').on('click', function(event) {
    event.preventDefault();
    if (!$(this).hasClass('.tabs__tablink--active')) {
      var active = $('.tabs__tablink--active').attr('href');
      var clicked = $(this).attr('href');
      $('.tabs__tablink--active').removeClass('tabs__tablink--active');
      $(this).addClass('tabs__tablink--active');
      $('.tabs__tabtext').eq(active - 1).slideToggle(300);
      $('.tabs__tabtext').eq(clicked - 1).slideToggle(300);
    }
  });

  $('.form__field>input').on('mouseover', function() {
    $(this).siblings('.form__tooltip').removeClass('form__tooltip--error').fadeIn(200);
  });
  $('.form__field>input').on('mouseout', function() {
    $(this).siblings('.form__tooltip').removeClass('form__tooltip--error').fadeOut(200);
  });
  $('input[type="submit"]').on('click', function(event) {
    var $emptyFields = $('.form__field>input').filter(function() {
      return this.innerHTML == '';
    });
    if ($emptyFields.length > 0) {
      event.preventDefault();
      $emptyFields.siblings('.form__tooltip').addClass('form__tooltip--error').fadeIn(200);
    }
  });
});
