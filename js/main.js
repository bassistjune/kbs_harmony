(function() {
  
  var swiper = new Swiper(".main_slide", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
  

  search();
  function search() {
    $('#header .util_wrap .search_wrap').removeClass('active');

    // 서치랩 켜기
    $('#header .util_wrap .search_btn').on('click', function() {
      $('#header .util_wrap .search_wrap').addClass('active');
    })

    // 서치랩 닫기
    $('#header .util_wrap .search_wrap .top_search .close_btn').on('click', function() {
      $('#header .util_wrap .search_wrap').removeClass('active');
    })

  };


  gnbMenu();
  function gnbMenu() {
    $('#header .gnb_wrap .gnb_btn').on('click', function() {
      $('#header .gnb_menu').addClass('active');
      $('#dimm').show();
      $('#header .gnb_wrap .gnb_close ').addClass('active');
    });

    $('#header .gnb_wrap .gnb_close').on('click', function() {
      $('#header .gnb_menu').removeClass('active');
      $(this).removeClass('active');
      $('#dimm').hide();
    });

    $('#header .gnb_list>li>a').off().on('click', function(e) {
      e.preventDefault();
      $(this).parent('li').addClass('on').siblings().removeClass('on');
      $(this).siblings('.depth_2').stop().slideToggle().parent().siblings().find('.depth_2').slideUp();
    });

  }

 
  // 달력
  $( function() { $("#datepicker").datepicker({
     changeMonth: true, 
     changeYear: true,
      minDate: '-50y', 
      nextText: '다음 달', 
      prevText: '이전 달', 
      yearRange: 'c-50:c+20', 
      showButtonPanel: false, 
      closeText: '닫기', 
      dateFormat: "yy-mm-dd", 
      showAnim: "slide", 
      showMonthAfterYear: true, 
      dayNamesMin: ['월', '화', '수', '목', '금', '토', '일'], 
      monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'] 
    });
  });


  // 뉴스탭
  newsTab();
  function newsTab() {
    var newsBtn = $('#container .news_wrap .news_tab li a');
    newsBtn.on('click', function(e) {
      e.preventDefault();
      $(this).parent().addClass('on').siblings().removeClass('on');
      
      var idx = $(this).parent().index();
      $('.news_contents').eq(idx).show().siblings().hide();
    });
    $('#container .news_wrap .news_tab li').eq(0).find('a').trigger('click');
  }

})();