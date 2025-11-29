/**
 * Uncolor the previous button.
 * @param {String} id 
 * @returns 
 */
function prevBut(id) {
    let but = document.getElementById(id);
    but.removeAttribute('style');

    return;
}

function currentBut(id) {
    if (id.includes("all")) {
        return;
    }

    let but = document.getElementById(id);
    but.setAttribute('style', 'border: 3px solid black;');

    return;
}

function showByClassName(elementID) {
    let elements = document.getElementsByClassName(elementID);
    for (let elem of elements) {
        elem.setAttribute("style", "");
    }

    return;
}

function hideByClassName(elementID) {
    let elements = document.getElementsByClassName(elementID);
    for (let elem of elements) {
        elem.setAttribute("style", "display: none;");
    }

    return;
}

function showByID(elementID) {
    document.getElementById(elementID).setAttribute('style', '');

    return;
}

function hideByID(elementID) {
    document.getElementById(elementID).setAttribute('style', 'display: none;');

    return;
}

export { prevBut, currentBut, showByClassName, hideByClassName, showByID, hideByID }