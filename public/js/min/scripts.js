$(document).ready(function() {
    $('.fade-link').click(function(e) {
        e.preventDefault();
        newLocation = this.href;
        $('body').fadeOut(200, newpage);
    });

    function newpage() {
        window.location = newLocation;
    }
});
