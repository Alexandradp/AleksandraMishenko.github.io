$(function() {

  $('.carousel__list').simpleCarousel({
    duration: 300
  });

  var template_tmpl = $('#profile-template-tmpl').html();
  var data_tmpl = [{
    name: 'Александра',
    profession: 'Кандидат философских наук',
    cause1: 'Люблю учиться',
    cause2: 'Хочу расширить кругозор',
    cause3: 'Для меня это своеобразный вызов',
    phone: '+380633436638',
    facebook: 'https://facebook.com/aleksandramishenko',
    feedback: 'Если вас посетил экзистенциальный кризис, то вам ко мне.'
  }];
  var content_tmpl = tmpl(template_tmpl, {
    data: data_tmpl
  });
  $('.profile__wrapper--tmpl').append(content_tmpl);

  var template_lodash = $('#profile-template-lodash').html();
  var data_lodash = {
    name: 'Александра',
    profession: 'Кандидат философских наук',
    causes: ['Люблю учиться',
      'Хочу расширить кругозор',
      'Для меня это своеобразный вызов'
    ],
    phone: '+380633436638',
    facebook: 'https://facebook.com/aleksandramishenko',
    feedback: 'Если вас посетил экзистенциальный кризис, то вам ко мне.'
  };
  var content_lodash = _.template(template_lodash)(data_lodash);
  $('.profile__wrapper--lodash').append(content_lodash);
});
