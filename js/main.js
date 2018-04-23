$(document).ready(function() {

    $('#mail-spoofer input').on('keydown', function(event) {
        event.stopPropagation();
        console.log("haha");
    });

    // Attach a submit handler to the form
    $('#mail-spoofer').submit(function(event) {
        // Stop form from submitting normally
        event.preventDefault();
    
        var $form = $(this);   
        // Send the data using post
        var posting = $.post( $form.attr( "action" ), $form.serialize() );
        posting.done(function( data ) {
            $( "#response .text" ).html( data );
            $( "#response" ).addClass("alert-success").slideDown();
        });
        posting.fail(function( data ) {
            $( "#response .text" ).html( data );
            $( "#response" ).addClass("alert-danger").slideDown();
        });

    });
});

function drawLines() {
    var coords = getLineCoords(
        document.getElementById('post-office1'),
        document.getElementById('post-office2')
    );
    console.log(coords);

    $(document.createElementNS('http://www.w3.org/2000/svg','line')).attr({
        x1: coords[0].x,
        y1: coords[0].y,
        x2: coords[1].x,
        y2: coords[1].y
    }).appendTo("#lines");
}

function getLineCoords(el1, el2) {
    var x1 = el1.offsetTop + (el1.offsetWidth / 2);
    var y1 = el1.offsetLeft + (el1.offsetHeight / 2);
    var x2 = el2.offsetTop + (el2.offsetWidth / 2);
    var y2 = el2.offsetLeft + (el2.offsetHeight / 2);

    return [
        {x: x1, y: y1},
        {x: x2, y: y2}
    ];
}
