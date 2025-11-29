import { search } from "./modules/find.js"

var doc = document.getElementsByClassName("container")
for (let j = 0; j < doc.length; j++) {
    var pText = doc[j].getElementsByTagName("p")
    for (let i = 0; i < pText.length; i++) {
        search(pText, i)
    }
}

if (document.getElementById('content-reference') != null) {
    if (document.getElementById('content-reference').children.length > 0) {
        let count = 1
        for (let elem of document.getElementById('content-reference').children) {
            elem.id = "ref" + count.toString()
            count += 1
        }
    }
}

if (document.getElementsByClassName('ref').length >= 1) {
    for (let i = 0; i < document.getElementsByClassName('ref').length; i++) {
        let ref = document.getElementsByClassName('ref')[i];
        let link = ref.getAttribute('href').replace('#', '');

        ref.addEventListener('click', () => {
            let cite = document.getElementById(link);
            
            setTimeout(() => {
                cite.setAttribute('style', 'background-color: lightgrey;');
            }, 0);
            setTimeout(() => {
                cite.removeAttribute('style');
            }, 500);
            setTimeout(() => {
                cite.setAttribute('style', 'background-color: lightgrey;');
            }, 1000);
            setTimeout(() => {
                cite.removeAttribute('style');
            }, 1500);
            setTimeout(() => {
                cite.setAttribute('style', 'background-color: lightgrey;');
            }, 2000);
            setTimeout(() => {
                cite.removeAttribute('style');
            }, 2500);
        });
    }
}

if (document.getElementById('image-reference') != null) {
    if (document.getElementById('image-reference').children.length > 0) {
        let count = 1
        for (let elem of document.getElementById('image-reference').children) {
            elem.id = "img" + count.toString()
            count += 1
        }
    }
}

if (document.getElementsByClassName('img-ref').length >= 1) {
    for (let i = 0; i < document.getElementsByClassName('img-ref').length; i++) {
        let ref = document.getElementsByClassName('img-ref')[i];
        let link = ref.getAttribute('href').replace('#', '');

        ref.addEventListener('click', () => {
            let cite = document.getElementById(link);
            
            setTimeout(() => {
                cite.setAttribute('style', 'background-color: lightgrey;');
            }, 0);
            setTimeout(() => {
                cite.removeAttribute('style');
            }, 500);
            setTimeout(() => {
                cite.setAttribute('style', 'background-color: lightgrey;');
            }, 1000);
            setTimeout(() => {
                cite.removeAttribute('style');
            }, 1500);
            setTimeout(() => {
                cite.setAttribute('style', 'background-color: lightgrey;');
            }, 2000);
            setTimeout(() => {
                cite.removeAttribute('style');
            }, 2500);
        });
    }
}