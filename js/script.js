(function($) {
  if ($.fancybox) {
    $('.fancybox').fancybox()
  }

  $('#mobile-navbar-toggle,#mobile-nav-overlay').click(function() {
    $('body').toggleClass('mobile-nav-visible')
  })

  $('#back-to-top').click(function () {
    $('html').animate({ scrollTop: 0 })
  })

  $(document).scroll(function scrollbarVisible () {
    if ($(window).scrollTop() > 0) $('body').addClass('scrollbar-visible')
    else $('body').removeClass('scrollbar-visible')
    return scrollbarVisible
  })
})(jQuery)