var request = new XMLHttpRequest();

request.open('GET', './dest/symbol_sprite.html', true);

request.onload = function() {

    if (request.status >= 200 && request.status < 400 ) {
        var node = document.createElement("div");

        node.innerHTML = request.responseText;
        document.body.insertBefore(node, document.body.firstChild);

        localStorage.setItem( 'inlineSVGdata',  request.responseText );
    }

};

request.send();
