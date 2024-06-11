// funzioni scroll

var nav = document.getElementById('navBar');
for (var i = 0; i < nav.children.length; i++) {
    e = nav.children[i];
    e.addEventListener('click', function() {
        // get the id of the clicked element
        var id = this.getAttribute('id');

        // reformat the id to match the id of the destination element
        id = id.substring(0, id.length - 3);
        id = 'scrollDest_' + id;

        // get the element with the id
        var dest = document.getElementById(id);
        // scroll to the element
        dest.scrollIntoView({ behavior: 'smooth' });
    });
}