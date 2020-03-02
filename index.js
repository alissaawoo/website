
// typewriter effect for welcome page
var i=0;
var txt = '    hi, welcome to my page!'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
    document.body.style.backgroundColor="#191A1A";
    document.getElementById("demo").style.color="#56F7D7";
    if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);

    }
}



//
$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});

//
// below listed default settings

$(function() {
    AOS.init({
        easing: 'zoom-out',
        duration: 800,
        delay: 300,
        once: true,
        offset: 120,
        disable: 'mobile'
    });
});

// AOS.init({
//     easing: 'ease-out-back',
//     duration: 800,
//     delay: 300,
//     once: true,
//     disable: 'mobile'
// });