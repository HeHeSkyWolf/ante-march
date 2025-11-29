import { NAV_BAR } from "./constants/bar.js";
import { paging_size } from "./constants/page_const.js"
import { popup_jump } from "./modules/popup.js";
import { pagination } from "./modules/paging.js"

// Showing the website just like the actual website. This means the user is notified about the copyright of the actual website.
// Get the current absolute path to check where is the index position
var path = decodeURIComponent(window.location.pathname);

// give popup for jumping to active links
if (document.getElementById('source-link') != null) {
    document.getElementById('source-link').addEventListener('click', () => {
        let link = document.getElementById('source-link').innerHTML
        popup_jump(link, 'active');
    });
}

// create the paging bar
if (document.getElementById('page-list') != null) {
    let lst = path.split('/');
    let filename = lst[lst.length - 1];
    let pagenum = filename.substring(filename.indexOf('_') + 1, filename.indexOf('.html'));
    let sitename = './' + filename.substring(0, filename.indexOf('_') + 1);

    pagination(pagenum, sitename, 1, paging_size[filename.substring(0, filename.indexOf('_'))]);;
}

// give popup for jumping to inactive links
if (document.getElementsByClassName('inactive').length > 0) {
    let inactive_links = document.getElementsByClassName('inactive');
    for (let link of inactive_links) {
        link.setAttribute('onclick', 'return false;');
        link.addEventListener('click', () => {
            popup_jump(link.href, 'inactive');
        });
    }
}

// set up nav bar button links
if (document.getElementById('nav-bar') == null) {
    let content = document.getElementById('main');
    content.insertAdjacentHTML('afterbegin', NAV_BAR);

    // calculate the location of parent dir
    let path = decodeURIComponent(window.location.pathname);
    let numParent = (path.split('/').length - 1) - path.split('/').lastIndexOf('Wiki');

    let root = "";
    for (let i = 0; i < numParent; i++) {
        root = root.concat("../");
    }

    root = root.concat('Wiki/');

    document.getElementById('nav-bar-index').addEventListener('click', () => {
        window.location.href = root.concat('安特进行曲.html');
    });
    document.getElementById('nav-bar-boss').addEventListener('click', () => {
        window.location.href = root.concat('安特进行曲.html#jbosses');
    });
    document.getElementById('nav-bar-npc').addEventListener('click', () => {
        window.location.href = root.concat('类别/主模块/NPC大全.html');
    });
    document.getElementById('nav-bar-monster').addEventListener('click', () => {
        window.location.href = root.concat('安特进行曲.html#jmonsters');
    });
    document.getElementById('nav-bar-car').addEventListener('click', () => {
        window.location.href = root.concat('安特进行曲.html#jcars');
    });
    document.getElementById('nav-bar-other').addEventListener('click', () => {
        window.location.href = root.concat('类别/主模块/其他.html');
    });
}