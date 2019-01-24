let searchInput = document.querySelector('#inputText');
let select = document.querySelector('#selectLang');
let selectedLang = 'es';

function getLanguages(){
    axios.get('https://translate.yandex.net/api/v1.5/tr.json/getLangs?key=trnsl.1.1.20180914T205319Z.b0ffef87e97badd3.e78787ec8a392b9772f8b8f56933b1d86463d330&ui=en')
    .then((response) => {
        let languages = response.data.langs;
        let languageCode = {
            name:'',
            code:''
        };
        for(language in languages) {
            languageCode.name = languages[language];
            languageCode.code = language;
            let option = document.createElement('option');
            option.innerHTML = languageCode.name;
            option.value = languageCode.code;
            select.appendChild(option);
        }
    })
    .catch((err) => {
        console.log(err);
    });
}

function translateText(textArg){
    let searchText;
    if(textArg.trim() == ''){
        searchText = document.querySelector('#inputText').value;
    }
    else{
        searchText = textArg;
    }

    if(searchText != ''){
        axios.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180914T205319Z.b0ffef87e97badd3.e78787ec8a392b9772f8b8f56933b1d86463d330&lang=' + selectedLang + '&text=' + searchText)
        .then((response) => {
            let translateInput = document.querySelector('#translation');
            translateInput.value = response.data.text[0];
        })
        .catch((err) => {
            console.log(err);
        });
    } else {
    document.querySelector('#translation').value = '';
}}
    
    
searchInput.addEventListener('keyup',() => {
    translateText('');
});

select.addEventListener('change',() => {
    selectedLang = select.options[select.selectedIndex].value;
    translateText('');
});

getLanguages();

// Overlay Nav

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}



// Title typed.js

    var typed = new Typed('#typed', {
    strings: ['Welcome to Trans<span class="text-warning">Lex</span>', 'We translate stuff', 'Welcome to Trans<span class="text-warning">Lex</span>'],
    typeSpeed: 150,
    backSpeed: 150,
    fadeOut: true,
    loop: false
  });
  
  
// Particles effect background

        /* particlesJS.load(@dom-id, @path-js */
        particlesJS.load('particles-js', 'dist/js/particles.js', function() {
            console.log('particles.js loaded...');
        });
        
// Fork me ribbon UX 

$('document').ready(function() {

  $('img').on({
    'mouseover' : function() {
      $(this).attr('src','https://s3.amazonaws.com/github/ribbons/forkme_right_orange_ff7600.png');
    },
    mouseout : function() {
  $(this).attr('src','https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png');
    }
  });


// Animate.CSS UX

$('#facebook-animate').on({
    'mouseover' : function() {
        $('#facebook-animate').addClass('animated pulse');
    },
    mouseout : function() {
                $('#facebook-animate').removeClass('animated pulse');
    }
});

$('#twitter-animate').on({
    'mouseover' : function() {
        $('#twitter-animate').addClass('animated pulse');
    },
    mouseout : function() {
                $('#twitter-animate').removeClass('animated pulse');
    }
});

$('#insta-animate').on({
    'mouseover' : function() {
        $('#insta-animate').addClass('animated pulse');
    },
    mouseout : function() {
                $('#insta-animate').removeClass('animated pulse');
    }
});

$('#github-animate').on({
    'mouseover' : function() {
        $('#github-animate').addClass('animated pulse');
    },
    mouseout : function() {
                $('#github-animate').removeClass('animated pulse');
    }
});

$('#dribble-animate').on({
    'mouseover' : function() {
        $('#dribble-animate').addClass('animated pulse');
    },
    mouseout : function() {
                $('#dribble-animate').removeClass('animated pulse');
    }
});

// Self made Animation 

$('.closebtn').on({
    'mouseover' : function () {
        $('.closebtn').addClass('spin-me');
    },
    mouseout : function () {
        $('.closebtn').removeClass('spin-me');
    }
});



});
// End of document ready function