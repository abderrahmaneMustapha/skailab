

/*  start modification button */

$('.video').parent().click(function () {
    if($(this).children(".video").get(0).paused){
        $(this).children(".video").get(0).play();
        $(this).children(".buttons").fadeOut();
    }else{
    $(this).children(".video").get(0).pause();
        $(this).children(".buttons").fadeIn();
    }

});





/*  End modification button  

        Read More   */

function myFunction1() {
var dots1 = document.getElementById("dots1");
var moreText1 = document.getElementById("more1");
var btnText1 = document.getElementById("myBtn1");

if (dots1.style.display === "none") {
    dots1.style.display = "inline";
    btnText1.innerHTML = "Read more"; 
    moreText1.style.display = "none";
    $('.insidecard1').css({"background-color":"white","height":"290px","bottom":"-70px","transition":"1s"});


} else {
    dots1.style.display = "none";
    btnText1.innerHTML = "Read less"; 
    moreText1.style.display = "inline";
    $('.insidecard1').css({"background-color":"rgb(235, 235, 235)","height":"390px","bottom":"-20px","transition":"1s"});

}
}

function myFunction2() {
var dots2 = document.getElementById("dots2");
var moreText2 = document.getElementById("more2");
var btnText2 = document.getElementById("myBtn2");

if (dots2.style.display === "none") {
    dots2.style.display = "inline";
    btnText2.innerHTML = "Read more"; 
    moreText2.style.display = "none";
    $('.insidecard2').css({"background-color":"white","height":"290px","bottom":"-70px","transition":"1s"});


} else {
    dots2.style.display = "none";
    btnText2.innerHTML = "Read less"; 
    moreText2.style.display = "inline";
    $('.insidecard2').css({"background-color":"rgb(235, 235, 235)","height":"390px","bottom":"-20px","transition":"1s"});

}
}

function myFunction3() {
    var dots3 = document.getElementById("dots3");
    var moreText3 = document.getElementById("more3");
    var btnText3 = document.getElementById("myBtn3");

    if (dots3.style.display === "none") {
        dots3.style.display = "inline";
        btnText3.innerHTML = "Read more"; 
        moreText3.style.display = "none";
        $('.insidecard3').css({"background-color":"white","height":"290px","bottom":"-70px","transition":"1s"});


    } else {
        dots3.style.display = "none";
        btnText3.innerHTML = "Read less"; 
        moreText3.style.display = "inline";
        $('.insidecard3').css({"background-color":"rgb(235, 235, 235)","height":"390px","bottom":"-20px","transition":"1s"});
    }
}



/*  end Read More satrt nav bar */

$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar-fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $(".background").height());
    });
});




/*  end nav bar  start  GO to place  */

$(function() {
// Smooth Scrolling
$('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
        $('html, body').animate({
        scrollTop: target.offset().top
        }, 1800);
        return false;
    }
    }
});
});

/* end GO to place  */


// $('.inputbox').parent().click(function () {
//     if($('.inputbox').css({"background-color":"blue"})){
//         $('.inputbox').css({"background-color":"rgba(240, 54, 76, 0.9)","transition":"1s"});
//     }else{
//         $('.inputbox').css({"background-color":"blue","transition":"1s"});
//     }

// }); 