// #1 Slider

let thumb = document.querySelector('.thumb');

thumb.addEventListener('mousedown', function(event) {
    let thumbWidth = thumb.offsetWidth;
    let sliderLeft = slider.offsetLeft;
    let sliderWidth = slider.offsetWidth;    

    moveThumb(event.pageX);

    document.addEventListener('mousemove', onMouseMove);

    document.addEventListener('mouseup', onMouseUp);

    function moveThumb(x) {
        let newCoord = x-sliderLeft-thumbWidth/2
        if(newCoord < 0) {
            thumb.style.left = "0px";
        } else if (newCoord > sliderWidth) {
            thumb.style.left = `${sliderWidth}px`;
        } else {
            thumb.style.left = `${newCoord}px`;
        }
    }

    function onMouseMove(event) {
        moveThumb(event.pageX);
    }

    function onMouseUp() {
        document.removeEventListener('mousemove', onMouseMove);
    }
});



thumb.ondragstart = function() {
  return false;
};


    