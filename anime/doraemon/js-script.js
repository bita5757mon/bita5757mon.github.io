$(document).ready(function(){
TweenMax.to("#loading", 0.1, {opacity:0.6, delay:0.3, yoyo: true, repeat: -1, ease: Power2.easeInOut});
//changeIMGcount=0;
});

$(window).load(function(){

resizeFunc();
TweenMax.fromTo("#op", 0.7, {opacity:1} , {opacity:0, delay:0.5, onStart:function(){  $("html, body").animate({scrollTop:0}, 0);  }, onComplete: function(){ $("#op").fadeOut(0); youtube_defer(); }});

});
	
$(window).resize(function() {
resizeFunc();
});


function resizeFunc(){

var w = $(window).width();
var h = $(window).height();

if(w>=768){
$('.imgChange').each(function(){
		$(this).attr("src",$(this).attr("src").replace('_sp', '_pc')); changeIMGcount=1;
});	
}else{
$('.imgChange').each(function(){
		$(this).attr("src",$(this).attr("src").replace('_pc', '_sp')); changeIMGcount=1;
});
}

var ytH = $(".yt").width()*9/16;
$('.yt').css({'height':ytH});

}


$(function() {
	

/////////////////////////////////////
//マウスオーバーで画像が光る（スマホ対応）//
/////////////////////////////////////

var ua = navigator.userAgent;
if(ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 ||ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0) {

$( '.fade, input[type="button"], input[type="submit"], button' )
  .bind( 'touchstart', function(){
    $( this ).addClass( 'SPhover' );
}).bind( 'touchend', function(){
    $( this ).removeClass( 'SPhover' );
});

}else{

 $('.fade').fadeTo(0, 1.0);
 $('.fade').hover(function(){
 if(!$(this).hasClass('noFade')){$(this).fadeTo(200, 0.5);}
 }, function(){
 $(this).fadeTo(150, 1.0);
 });
 }


/////////////////////////////
//ページ内リンクでアニメーション//
/////////////////////////////

$('a.ctsMove').click(function(){
var speed = 600;
var href= $(this).attr("href");
var target = $(href == "#" || href == "" ? 'html' : href);
var position = target.offset().top;
$("html, body").animate({scrollTop:position}, speed, "easeOutExpo");
resizeFunc();
return false;
});


///////////////////
//pageTopボタン出現//
///////////////////

var topBtn = $('#ptWrap');    
topBtn.hide();

$(window).scroll(function () {
if ($(this).scrollTop() > 100) {
topBtn.fadeIn();
} else {
topBtn.fadeOut();
}
});


});