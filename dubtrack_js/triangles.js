var triangles_target = null, triangles_to = null, triangles_init = true;

function initTriangle() {
    if(triangles_to !== null) clearTimeout(to);
    if(triangles_init && triangles_target !== null) {
        var width = rnd(25, 300), tr = $('<div class="triangle"></div>').appendTo(triangles_target);
        tr.css("border-bottom-width", width + 'px');
        tr.css("border-left-width", (width / 2) + 'px');
        tr.css("border-right-width", (width / 2) + 'px');
        tr.css("border-bottom-color", 'rgba(' + rnd(0, 255) + ',' + rnd(0, 255) + ',' + rnd(0, 255) + ',.6)');
        tr.css("top", $(window).height() + 'px');
        tr.css("left", rnd(0, $(window).width() - width) + 'px')

        tr.animate({ top: -width + 'px' }, rnd(250, 2000), "linear", function() { tr.remove(); });
        console.log(tr);
    }
    triangles_to = window.setTimeout(initTriangle, rnd(50, 150));
}
initTriangle();

function rnd(min, max) { return Math.floor(Math.random() * (min + max)) + 1 + min; }