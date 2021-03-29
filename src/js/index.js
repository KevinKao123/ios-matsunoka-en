import $ from 'jquery';
import inview from 'jquery-inview';

// sp menu 
let spMenuOpen = false;
$('#spMenuBtn, .sp-menu-btn').on('click', () => {
    spMenuOpen = !spMenuOpen;
    $('#spMenuBtn').toggleClass('menu-active');
    $('#spMenuText').text(spMenuOpen ? 'Close' : 'Menu');
    $('#spMenu').toggleClass('sp-menu-show');
});

// to top navi 
const topBtn = $('.footer-toTop');
$(window).on('scroll', function() {
    let bottomPos = $(document).height() - $(window).height();
    let nowPos = bottomPos - $(this).scrollTop();
    let stopPos = $('.footer').height();
	
    // $(this).scrollTop() > 200 ? topBtn.fadeIn() : topBtn.fadeOut();
	$(this).scrollTop() > 200 ? topBtn.addClass('toTopActive') : topBtn.removeClass('toTopActive');
    // nowPos <= stopPos ? topBtn.addClass('stop') : topBtn.removeClass('stop');
	nowPos < stopPos ? topBtn.addClass('toTopRemoveFixed') : topBtn.removeClass('toTopRemoveFixed');
});

// animsion 
$('.animsition').on('inview', function() {
    $(this).toggleClass('upview');
});

// select room 
$('.room-btn').on('click', function() {
    let roomId = $(this).attr('room-id');
    console.log(roomId);
    $('.room-btn').removeClass('roomTypeSelected');
    $(this).addClass('roomTypeSelected');
    $('.sec2-roomType-display').removeClass('displayActive');
    $('.sec2-roomType-block').children('.sec2-roomType-display').eq(roomId).addClass('displayActive');
});