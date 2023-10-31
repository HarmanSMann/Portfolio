$(document).ready(function () {
    var arrows = $(".scroll-down a");

    function animateArrows() {
        arrows.eq(0).animate({ opacity: 1 }, 500, function () {
            arrows.eq(1).animate({ opacity: 1 }, 500, function () {
                arrows.eq(2).animate({ opacity: 1 }, 500);
            });
        });
    }

    // Initial animation
    animateArrows();

    // Set an interval to reset the opacity and animate the arrows every 10 seconds (adjust as needed)
    setInterval(function () {
        arrows.css({ opacity: 0 });
        animateArrows();
    }, 10000); // 10000 milliseconds = 10 seconds (adjust as needed)
});
