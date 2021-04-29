  jQuery(function($){
    $(document).mouseup(function (e){
        if (!$("#nav_box_1").is(e.target) &&
            $("#nav_box_1").has(e.target).length === 0) {
            $("#nav_box_1").fadeOut();
          };
        if (document.querySelector('.activated') !== null && document.querySelector('.navigation-bar-item:nth-child(1) .visible') == null) {
            document.querySelector('.activated').classList.remove('activated');
          };
      });
    $(document).mouseup(function (e){
      if (!$("#nav_box_2").is(e.target) &&
          $("#nav_box_2").has(e.target).length === 0) {
          $("#nav_box_2").fadeOut();
        };
      if (document.querySelector('.activated') !== null && document.querySelector('.navigation-bar-item:nth-child(1) .visible') == null) {
          document.querySelector('.activated').classList.remove('activated');
          };
      });
    $(document).mouseup(function (e){
      if (!$("#nav_box_3").is(e.target) &&
          $("#nav_box_3").has(e.target).length === 0) {
          $("#nav_box_3").fadeOut();
        };
      if (document.querySelector('.activated') !== null && document.querySelector('.navigation-bar-item:nth-child(1) .visible') == null) {
        document.querySelector('.activated').classList.remove('activated');
        };
    });
    $(document).mouseup(function (e){
      if (!$("#nav_box_4").is(e.target) &&
          $("#nav_box_4").has(e.target).length === 0) {
          $("#nav_box_4").fadeOut();
        };
      if (document.querySelector('.activated') !== null && document.querySelector('.navigation-bar-item:nth-child(1) .visible') == null) {
        document.querySelector('.activated').classList.remove('activated');
        };
    });
    $(document).mouseup(function (e){
      if (!$("#nav_box_5").is(e.target) &&
          $("#nav_box_5").has(e.target).length === 0) {
          $("#nav_box_5").fadeOut();
        };
        if (document.querySelector('.activated') !== null && document.querySelector('.navigation-bar-item:nth-child(1) .visible') == null) {
          document.querySelector('.activated').classList.remove('activated');
        };
    });
});

window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#nav_1').addEventListener('click', function() {
    document.querySelector('#nav_1').classList.toggle('activated');
    document.querySelector('#nav_box_1').style.display ="block"
  });
  document.querySelector('#nav_2').addEventListener('click', function() {
    document.querySelector('#nav_2').classList.toggle('activated');
    document.querySelector('#nav_box_2').style.display ="block";
  });
  document.querySelector('#nav_3').addEventListener('click', function() {
    document.querySelector('#nav_3').classList.toggle('activated');
    document.querySelector('#nav_box_3').style.display ="block";
  });
  document.querySelector('#nav_4').addEventListener('click', function() {
    document.querySelector('#nav_4').classList.toggle('activated');
    document.querySelector('#nav_box_4').style.display ="block";
  });
  document.querySelector('#nav_5').addEventListener('click', function() {
    document.querySelector('#nav_5').classList.toggle('activated');
    document.querySelector('#nav_box_5').style.display ="block";
  });
  document.querySelector('.events__button').addEventListener('click', function() {
    if (window.getComputedStyle(document.querySelector('.events__list-item:nth-child(3)'), null).getPropertyValue('display') == 'none') {
      document.querySelector('.events__list-item:nth-child(3)').style.display = 'block';
      document.querySelector('.events__list-item:nth-child(3)').classList.toggle('animated');
    };
    document.querySelector('.events__list-item:nth-child(4)').style.display = 'block';
    document.querySelector('.events__list-item:nth-child(5)').style.display = 'block';
    document.querySelector('.events__list-item:nth-child(4)').classList.toggle('animated');
    document.querySelector('.events__list-item:nth-child(5)').classList.toggle('animated');
    document.querySelector('.events__button').classList.toggle('events__hidden');
  });

  document.querySelector('.header__burger').addEventListener('click', function() {
    document.querySelector('.header__burger-menu').classList.toggle('rolled-in')
  });

  document.querySelector('.header__burger-close').addEventListener('click', function() {
    document.querySelector('.header__burger-menu').classList.toggle('rolled-in')
  });

  document.querySelector('.editions__categoties .choices').addEventListener('click', function() {
    document.querySelector('.editions__categoties .choices').style.marginBottom = 59 + document.querySelector('.choices .choices__inner .choices__list--multiple').scrollHeight + 'px'
  });

  document.querySelector('.editions__categoties .choices__inner').addEventListener('click', function() {
    document.querySelector('.editions__categoties .choices__list--dropdown').classList.toggle('is-active');
    document.querySelector('.editions__categoties .choices').style.marginBottom = 59 + document.querySelector('.choices .choices__inner .choices__list--multiple').scrollHeight + 'px'
  });

  document.querySelector('.editions').addEventListener('click', function() {
    document.querySelector('.editions__categoties .choices').style.marginBottom = 59 + document.querySelector('.choices .choices__inner .choices__list--multiple').scrollHeight + 'px'
  });
})
