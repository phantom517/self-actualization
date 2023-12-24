function play() {
    var audio = new Audio('mantra-om-sound-music-spiritual-frequency-11-12236.mp3');
    audio.play();
    }

$(document).ready(function(){

    $('.filter-item').click(function(){
        const value = $(this).attr('data-filter')
        if (value == 'all') {
            $('.post-box').show('1000')
        }

        else{
            $('.post-box').not('.' + value).hide('1000')
            $('.post-box').filter('.' + value).show('1000')

        }
    })
})

$(".filter-item").click(function () {
    $(this).addClass("active-filter").siblings().removeClass("active-filter")
})


let header = document.querySelector('header');

window.addEventListener("scroll", () => {
    header.classList.toggle('shadow', window.scrollY > 0);
    
})



document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('login').addEventListener('click', function() {
        play();
    });
});




document.addEventListener('DOMContentLoaded', function() {
    var playSoundButton = document.getElementById('playSoundButton');
    var stopSoundButton = document.getElementById('stopSoundButton');
    var clickSound = document.getElementById('clickSound');

    playSoundButton.addEventListener('click', function() {
        clickSound.play();
    });

    stopSoundButton.addEventListener('click', function() {
        clickSound.pause();
        clickSound.currentTime = 0;
    });
});



