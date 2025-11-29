import { boss, car, map, monster, npc, other, miji, news, mission, update, ask } from "../constants/keyword.js"

// Showing the website just like the actual website. This means the user is notified about the copyright of the actual website.
// Get the current absolute path to check where is the index position
let path = decodeURIComponent(window.location.pathname);

function link(tag, text) {
    // calculate the location of parent dir
    let numParent = (path.split('/').length - 2) - path.split('/').lastIndexOf('Wiki');

    let root = "";
    for (let i = 0; i < numParent; i++) {
        root = root.concat("../");
    }

    let link = "";
    root = root.concat("类别/");

    if (tag === "boss") { link = root.concat('BOSS大全/' + text + '.html'); }
    if (tag === "map") { link = root.concat('主模块/地图.html#' + text); }
    if (tag === "other") { link = root.concat(text + '.html'); }
    if (tag === "npc") { link = root.concat('NPC/'+ text +'.html'); }
    if (tag === "monster") { link = root.concat('怪物/'+ text +'.html'); }
    if (tag === "car") { link = root.concat('战车/'+ text +'.html'); }
    if (tag === "miji") { link = root.concat('秘籍心得/'+ text +'.html'); }
    if (tag === "news") { link = root.concat('新闻/'+ text +'.html'); }
    if (tag === "mission") { link = root.concat('任务攻略/'+ text +'.html'); }
    if (tag === "update") { link = root.concat('更新/'+ text +'.html'); }
    if (tag === "ask") { link = root.concat('问答/'+ text +'.html'); }
    if (tag === "ref") { link = "#ref" + text; }

    // window.location.href=link;
    // window.open(link, "_blank")
    return link;
}

function formalname(text) {
    if (text.includes("_")) {
        return text.substring(0, text.indexOf("_"));
    }
    return text;
}

function additional(text) {
    if (text.includes("|")) {
        return text.indexOf("|");
    }
    return text.indexOf("]");
}

function search(pText, i) {

    let searchable = new Set();

    let s = "";
    let sch = false;
    for (let k = 0; k < pText[i].innerHTML.length; k++) {
        s = s + pText[i].innerHTML[k];

        if (s === '[[') {
            sch = true;
        }
        
        if (s != '[' && !sch) {
            s = "";
        }

        if (s === '[[[') {
            s = '[[';
        }
        
        if (s.includes("]]") && sch) {            
            searchable.add(s);
            sch = false;
            s = "";
        }
    }

    for (let value of searchable) {
        let tag = value.substring(value.indexOf("[[") + 2, value.indexOf("#"));
        let n = value.substring(value.indexOf("#") + 1, additional(value));
        let ad = n;

        if (value.includes("|")) {
            ad = value.substring(value.indexOf("|") + 1, value.indexOf("]"));
        }

        if (tag === "boss" && boss.includes(n)) {
            pText[i].innerHTML = pText[i].innerHTML.replaceAll(value, '<a class="boss" href="' + link('boss', n) + '">' + formalname(ad) + '</a>');
        }
        else if (tag === "car" && car.includes(n)) {
            pText[i].innerHTML = pText[i].innerHTML.replaceAll(value, '<a class="car" href="' + link('car', n) + '">' + formalname(ad) + '</a>');
        }
        else if (tag === "map" && map.includes(n)) {
            pText[i].innerHTML = pText[i].innerHTML.replaceAll(value, '<a class="map" href="' + link('map', n) + '">' + formalname(ad) + '</a>');
        }
        else if (tag === "monster" && monster.includes(n)) {
            pText[i].innerHTML = pText[i].innerHTML.replaceAll(value, '<a class="monster" href="' + link('monster', n) + '">' + formalname(ad) + '</a>');
        }
        else if (tag === "npc" && npc.includes(n)) {
            pText[i].innerHTML = pText[i].innerHTML.replaceAll(value, '<a class="npc" href="' + link('npc', n) + '">' + formalname(ad) + '</a>');
        }
        else if (tag === "other" && other.includes(n)) {
            pText[i].innerHTML = pText[i].innerHTML.replaceAll(value, '<a class="other" href="' + link('other', n) + '">' + formalname(ad) + '</a>');
        }
        else if (tag === "miji" && miji.includes(n)) {
            pText[i].innerHTML = pText[i].innerHTML.replaceAll(value, '<a class="miji" href="' + link('miji', n) + '">' + formalname(ad) + '</a>');
        }
        else if (tag === "news" && news.includes(n)) {
            pText[i].innerHTML = pText[i].innerHTML.replaceAll(value, '<a class="news" href="' + link('news', n) + '">' + formalname(ad) + '</a>');
        }
        else if (tag === "mission" && mission.includes(n)) {
            pText[i].innerHTML = pText[i].innerHTML.replaceAll(value, '<a class="mission" href="' + link('mission', n) + '">' + formalname(ad) + '</a>');
        }
        else if (tag === "update" && update.includes(n)) {
            pText[i].innerHTML = pText[i].innerHTML.replaceAll(value, '<a class="update" href="' + link('update', n) + '">' + formalname(ad) + '</a>');
        }
        else if (tag === "ask" && ask.includes(n)) {
            pText[i].innerHTML = pText[i].innerHTML.replaceAll(value, '<a class="ask" href="' + link('ask', n) + '">' + formalname(ad) + '</a>');
        }
        else if (tag === "ref") {
            pText[i].innerHTML = pText[i].innerHTML.replaceAll(value, '<a class="ref" href="' + link('ref', n) + '">[' + formalname(ad) + ']</a>');
        }
        else {
            pText[i].innerHTML = pText[i].innerHTML.replaceAll(value, '<b style="color: red;">' + n.replaceAll('[[', '') + '</b>');
        }
    }
}

export { search }