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
