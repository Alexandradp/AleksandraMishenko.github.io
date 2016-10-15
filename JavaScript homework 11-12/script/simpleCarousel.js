(function($) {

  $.fn.simpleCarousel = function(data) {

    var $goleft = $('.carousel__left');
    var $goright = $('.carousel__right');
    var $list = this;
    var defaults = {
      duration: 500,
      visible: 5
    };
    var settings = $.extend({}, defaults, data);

    for (var i = settings.visible; i < $list.children().length; i++) {
      $list.children().eq(i).css({
        width: '0px',
        opacity: 0
      });
    };

    $goleft.on('click', function(e) {
      e.preventDefault();
      $first = $list.children().first();
      $firstInvisible = $list.children().eq(settings.visible);
      $first.animate({
        width: '0px',
        opacity: 0,
        margin: 0,
        padding: 0,
        easing: 'linear'
      }, settings.duration).promise().done(function() {
        $list.append($first);
        $first.css({
          margin: '',
          padding: ''
        });
      });
      $firstInvisible.animate({
        width: $firstInvisible.find('img').css('width'),
        margin: $firstInvisible.css('margin'),
        padding: $firstInvisible.css('padding'),
        opacity: 100,
        easing: 'linear'
      }, settings.duration).promise().done(function() {
        $firstInvisible.css({
          width: '',
          opacity: '',
          margin: '',
          padding: ''
        });
      });
    });

    $goright.on('click', function(e) {
      e.preventDefault();
      $last = $list.children().last();
      $lastVisible = $list.children().eq(settings.visible - 1);
      $list.prepend($last);
      $last.animate({
        width: $last.find('img').css('width'),
        margin: $last.css('margin'),
        padding: $last.css('padding'),
        opacity: 100,
        easing: 'linear'
      }, settings.duration).promise().done(function() {
        $last.css({
          width: '',
          opacity: '',
          margin: '',
          padding: ''
        });
      });
      $lastVisible.animate({
        width: '0px',
        opacity: 0,
        margin: 0,
        padding: 0,
        easing: 'linear'
      }, settings.duration).promise().done(function() {
        $lastVisible.css({
          margin: '',
          padding: ''
        });
      });
    });

    return this;

  };

}(jQuery));
