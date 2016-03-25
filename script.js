$(function(){
    var slides = $('.mini-image a');
       slides.click(function(event) {
           //event.preventDefault();
           var image=$(this).find('img');
           var imgSrc= image.attr('src');

           $('.big-image img').attr('src', imgSrc);
           $('.active').removeClass('active');
           $(this).addClass('active');
           return false;
       });

    $('.next').click(function(){
        var oldImage = $('.mini-image .active');
        $('.active').removeClass('active');
        var nextItem = oldImage.next();
        if(nextItem.length > 0) {
            nextItem.trigger('click');
        } else {
            slides.eq(0).trigger('click');
        }
        return false
    });

    $('.prev').click(function(){
        var oldImage = $('.mini-image .active');
        $('.active').removeClass('active');
        var prevItem = oldImage.prev();
        if(prevItem.length > 0) {
            prevItem.trigger('click');
        } else {
            slides.eq(slides.length - 1).trigger('click');
        }
        return false
    });
});
