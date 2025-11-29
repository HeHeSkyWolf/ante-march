import { POPUP_ALERT } from "../constants/popup_html.js"

/**
 * Close the popup box.
 */
function close_popup() {
    if (document.getElementById('popup') == null) {
        return;
    }

    var body = document.getElementsByTagName("body");
    var popup = document.getElementById("popup");

    body[0].removeChild(popup)
}

/**
 * Show the Redirect alert popup box.
 * @param {string} link The link where user is about to redirect to another website.
 * @param {string} status The status of the link.
 */
function popup_jump(link, status) {
    if (document.getElementById('popup') != null) {
        return;
    }
    var body = document.getElementsByTagName("body");
    body[0].insertAdjacentHTML('beforeend', POPUP_ALERT);

    var popup_content = document.getElementById("popup-content")
    var p = document.createElement("p")
    var addr = document.createElement("a")
    addr.href = link
    addr.innerHTML = link
    addr.setAttribute('target', "_blank")
    addr.addEventListener('click', () => {
        close_popup();
    });

    p.appendChild(addr);
    popup_content.appendChild(p);

    document.getElementById('popup-cancel').addEventListener('click', () => {
        close_popup();
    });

    if (status === 'inactive') {
        var p1 = document.createElement("p");
        p1.innerHTML = "由于卡伦种子失衡，导致卡尔秋大陆崩裂，我们无法收到有关那里的信息。"
        p1.setAttribute('style', 'color: #0b75ac;font-weight: bold;');
        var p2 = document.createElement("p");
        p2.innerText = "注：上述链接无法访问，或者没有有用的信息!";
        p2.setAttribute('style', 'color: red;font-weight: bold;');
        document.getElementById("popup-content").appendChild(p1);
        document.getElementById("popup-content").appendChild(p2);
    }
}

/**
 * Shows the header of BL Wiki.
 * @param {boolean} show The status of the header.
 */
function showHeader(show) {
    var topBar = document.getElementById('top-bar');
    var bar = document.getElementById('top-bar').getElementsByTagName('nav')[0];
    var control = document.getElementById('top-bar-control');
    var but = document.getElementById('show-but');

    if (show) {
        bar.style.display = "flex";
        topBar.style.height = "60px";
        topBar.style.padding = "8px 0 8px 0";
        control.style.marginTop = "8px";
        but.innerHTML = "▲";
    } else {
        bar.style.display = "none";
        topBar.style.height = "0px";
        topBar.style.padding = "0";
        control.style.marginTop = "0";
        but.innerHTML = "▼";
    }
}

export { showHeader, popup_jump, close_popup }