$(function() {
  $('.jcarousel').jcarousel({
    list: '.jcarousel-list',
    items: '.jcarousel-item',
    animation: 'slow',
    wrap: 'both'
  });

  $('.jcarousel-prev')
    .on('jcarouselcontrol:active', function() {
      $(this).removeClass('inactive');
    })
    .on('jcarouselcontrol:inactive', function() {
      $(this).addClass('inactive');
    })
    .jcarouselControl({
      target: '-=1'
    });

  $('.jcarousel-next')
    .on('jcarouselcontrol:active', function() {
      $(this).removeClass('inactive');
    })
    .on('jcarouselcontrol:inactive', function() {
      $(this).addClass('inactive');
    })
    .jcarouselControl({
      target: '+=1'
    });

  $('.jcarousel-pagination')
    .on('jcarouselpagination:active', 'a', function() {
      $(this).addClass('active');
    })
    .on('jcarouselpagination:inactive', 'a', function() {
      $(this).removeClass('active');
    })
    .jcarouselPagination({
      item: function(page) {
        return '<a href="#' + page + '">' + page + '</a>';
      }
    });

  $('select').selectBox({
    mobile: false,
    menuSpeed: 'fast',
    menuTransition: 'fade',
    loopOptions: true
  });

  $(".niceCheck").each(
    function() {
      changeCheckStart($(this));
    });

  $('li.dropdown').on('mouseenter', function() {
    $(this).children('.sub-menu').slideDown({
      duration: 100,
      done: function() {
        $(this).animate({
          duration: 50,
          backgroundColor: "#0039e6"
        });
      }
    });
  });
  $('li.dropdown').on('mouseleave', function() {
    $(this).children('.sub-menu').slideUp({
      duration: 100,
      done: function() {
        $(this).animate({
          duration: 50,
          backgroundColor: "#3366ff"
        });
      }
    });
  });
});
