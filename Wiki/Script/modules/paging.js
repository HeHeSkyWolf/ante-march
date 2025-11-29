/**
 * Generate a page number list for the website to navigate the pages
 * @param {Number} num The current page number
 * @param {String} addr The address of the pages
 * @param {Number} start The start number of the pages
 * @param {Number} end The end number of the pages
 */
function pagination(num, addr, start, end) {
    // detecting is the current number reaches the start or the end
    let prev = parseInt(num) - 1;
    let next = parseInt(num) + 1;
    if (prev < start) {
        prev = start;
    }
    if (next > end) {
        next = end;
    }

    // create back to first page
    var ul = document.getElementById("page-list");
    var li = document.createElement("li");
    var a = document.createElement("a");
    a.setAttribute("href", addr + start.toString() + '.html');
    a.append("第一页");
    li.appendChild(a);
    ul.appendChild(li);

    // create previous page
    var li = document.createElement("li");
    var a = document.createElement("a");
    a.setAttribute("href", addr + prev.toString() + '.html');
    a.append("上一页");
    li.appendChild(a);
    ul.appendChild(li);
    
    for (let i = Math.max(start, parseInt(num) - 4); i < parseInt(num) + 1; i++) {       
        if (i >= start) {
            var li = document.createElement("li");
            var a = document.createElement("a");
            a.setAttribute("href", addr + i.toString() + '.html');
            a.append(i.toString())
            li.appendChild(a);
            ul.appendChild(li);

            if (i.toString() == num) {
                li.id = "current";
            }
        }
    }
    for (let i = parseInt(num) + 1; i < parseInt(num) + 5; i++) {
        if (i <= end) {
            var li = document.createElement("li");
            var a = document.createElement("a");
            a.setAttribute("href", addr + i.toString() + '.html');
            a.append(i.toString())
            li.appendChild(a);
            ul.appendChild(li);
        }
    }

    // create next page
    var li = document.createElement("li");
    var a = document.createElement("a");
    a.setAttribute("href", addr + next.toString() + '.html');
    a.append("下一页")
    li.appendChild(a);
    ul.appendChild(li);

    // create back the last page
    var li = document.createElement("li");
    var a = document.createElement("a");
    a.setAttribute("href", addr + end.toString() + '.html');
    a.append("最后一页")
    li.appendChild(a);
    ul.appendChild(li);
}

export { pagination }