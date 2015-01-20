$(document).ready(function() {
    
    $(window).on('resize', function() {
        resizePublicationsOverlay();
    });
    
    $(window).resize();
    
});

function resizePublicationsOverlay() {
    
    $('.cell').each(function() {
        
        var $img = $(this).find('img').eq(0);
        var $overlay = $(this).find('.overlay');
        
        if ($img.height() > 0 && $img.width() > 0) {
            
             setDimensions($img, $overlay);
            
        } else {
            
            $img.on('load', function() {

                setDimensions($img, $overlay);

            });
            
        }

    });
    
}

function setDimensions($source, $target) {
    
    $target.css({
        width: $source.width(),
        height: $source.height()
    });
    
}