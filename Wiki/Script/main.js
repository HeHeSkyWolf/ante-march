import { showHeader, popup_jump } from "./modules/popup.js";

// Press "Enter" key to move to the top of the website.
window.addEventListener(
    "keydown",
    (event) => {
        if (event.key === "Enter") {
            window.scrollTo(0, 0);
        }
    },
    true,
);

let isHeaderShowed = true;
document.getElementById('show-but').addEventListener('click', () => {
    isHeaderShowed = !isHeaderShowed;
    showHeader(isHeaderShowed);
});

if (document.getElementsByClassName('active').length > 0) {
    let active_links = document.getElementsByClassName('active');
    for (let link of active_links) {
        link.setAttribute('onclick', 'return false;')
        link.addEventListener('click', () => {
            popup_jump(link.href, 'active');
        });
    }
}