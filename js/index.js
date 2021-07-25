$(window).scroll(function() {
    var wScroll = $(this).scrollTop();
    
    //about
    if ( wScroll > $('#about').offset().top - 400 ) {
        $('#about .col-lg-4').each(function(i) {
            setTimeout(function() {
                $('#about .col-lg-4').eq(i).addClass('appear');
            }, 300 * i);
        });    
    }

    //gallery
    if ( wScroll > $('#gallery').offset().top - 350 ) {
        $('#gallery .col-md-3').each(function(i) {
            setTimeout(function() {
            $('#gallery .col-md-3').eq(i).addClass('appear');
            }, 300 * i);
        });    
    }

    //story
    if ( wScroll > $('#story').offset().top - 400 ) {
        $('#story .col-md-4').each(function(i) {
            setTimeout(function() {
            $('#story .col-md-4').eq(i).addClass('appear');
            }, 300 * i);
        });    
    }

    //date
    if ( wScroll > $('#date').offset().top - 400 ) {
        $('#date .date').each(function(i) {
            setTimeout(function() {
            $('#date .date').eq(i).addClass('appear');
            }, 300 * i);
        });    
    }

    //map
    if ( wScroll > $('#map').offset().top - 400 ) {
        $('#map .map').each(function(i) {
            setTimeout(function() {
            $('#map .map').eq(i).addClass('appear');
            }, 300 * i);
        });    
    }

    //closing
    if ( wScroll > $('#closing').offset().top - 400 ) {
        $('#closing .closing').each(function(i) {
            setTimeout(function() {
            $('#closing .closing').eq(i).addClass('appear');
            }, 300 * i);
        });    
    }

    //Guest
    if ( wScroll > $('#guest').offset().top - 300 ) {
        $('#guest .guest').each(function(i) {
            setTimeout(function() {
            $('#guest .guest').eq(i).addClass('appear');
            }, 300 * i);
        });    
    }

    //Message
    if ( wScroll > $('#message').offset().top - 300 ) {
        $('#message .row').each(function(i) {
            setTimeout(function() {
            $('#message .row').eq(i).addClass('appear');
            }, 300 * i);
        });    
    }

});

function copy_mandiri() {
    document.getElementById("mandiri").select();
    document.execCommand("copy");
    alert("No. Rekening Berhasil di Copy, Kami tunggu tranferannya :)");
}

function copy_bca() {
    document.getElementById("bca").select();
    document.execCommand("copy");
    alert("No. Rekening Berhasil di Copy, Kami tunggu tranferannya :)");
}

function copy_permata() {
    document.getElementById("permata").select();
    document.execCommand("copy");
    alert("No. Rekening Berhasil di Copy, Kami tunggu tranferannya :)");
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbzuqPylRAMMJXw2TkaIAoDsQ4x2ZDlYXX0zfMKinN4ZRJNA4odUaRD4Q_dX3rxkxSs/exec'
const form = document.forms['tya&tyo']

const btnKirim = document.querySelector('.btn-kirim')
const btnLoading = document.querySelector('.btn-loading')
const alert = document.querySelector('.alert')

form.addEventListener('submit', e => {
e.preventDefault()
btnLoading.classList.toggle('d-none');
btnKirim.classList.toggle('d-none');
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => {
    btnLoading.classList.toggle('d-none');
    btnKirim.classList.toggle('d-none');
    alert.classList.toggle('d-none');
    form.reset();
    console.log('Success!', response);
  })
  .catch(error => console.error('Error!', error.message))
})

const play = document.querySelector('.play')
const pause = document.querySelector('.pause')

var el = document.getElementById("music"); 
function playAudio() { 
  el.play();
  pause.classList.remove('d-none');
  play.classList.add('d-none');
} 
function pauseAudio() { 
  el.pause();
  pause.classList.add('d-none');
  play.classList.remove('d-none');
} 