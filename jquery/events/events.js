$(document).ready(function() {
    // $('p').click(function() {
    //     $(this.hide());
    // });

    // $('p').mousedown(function() {
    //     alert('mosuedown event')
    // });

    $('input').focus(function() {
        $(this).css("background-color", "green")
    });

    $("input").blur(function() {
        $('this').css("background-color", "white")
    });

    $('p').on({
        mouseenter: function() {
            $(this).css('background-color', 'lightgray')
        },

        mouseleave: function() {
            $(this).css('background-color', 'lightblue')
        },

        click: function() {
            $(this).css('background-color', 'yellow')
        }
    })
    
});