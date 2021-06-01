$( document ).ready(function() {
    
    document.onkeydown = check;

    $('#map').addClass('right');

    var hero_x = 1;
    var hero_y = 21;

    // move_left(4, true);
    // move_down(16, true);
    // move_right(1, true);




    function check(e){
        if (e.keyCode == '37')
            move_left(1);

        if (e.keyCode == '38')
            move_up(1);

        if (e.keyCode == '39')
            move_right(1);

        if (e.keyCode == '40')
            move_down(1);
    }

    function move_left(count, ignored_rules=false){
        if (true || ignored_rules){
            for (let i = 0; i < count; i++){
                if ($('#map').position().left > -160 || parseInt($('#map').css('backgroundPosition').split(" ")[0]) < 160){
                    if ($('#map').position().left > -160)
                        $('#map').css({"left": "calc(" + $('#map').position().left + "px - 32px)"});
                    $('#map').css({"background-position-x": "calc(" + $('#map').css('backgroundPosition').split(" ")[0] + " + 32px)"});
                }
            }
            $('#map').addClass('left');
            $('#map').removeClass('right');
            $('#map').removeClass('up');
            $('#map').removeClass('down');
        }
    }
    
    function move_right(count, ignored_rules=false){
        if (true || ignored_rules){

            for (let i = 0; i < count; i++){
                if (-1 * parseInt($('#map').css('backgroundPosition').split(" ")[0]) + 200 <= 3456){
                    if ($(window).width() - $('#map').position().left - 200 >= 32)
                        $('#map').css({"left": "calc(" + $('#map').position().left + "px + 32px)"});                
                    $('#map').css({"background-position-x": "calc(" + $('#map').css('backgroundPosition').split(" ")[0] + " - 32px)"});
                }
            }
            $('#map').addClass('right');
            $('#map').removeClass('left');
            $('#map').removeClass('up');
            $('#map').removeClass('down');
        }
    }
    
    function move_up(count, ignored_rules=false){
        if (true || ignored_rules){
            for (let i = 0; i < count; i++){
                if ($('#map').position().top > -110 || parseInt($('#map').css('backgroundPosition').split(" ")[1]) < 110){
                    if ($('#map').position().top > -110)
                        $('#map').css({"top": "calc(" + $('#map').position().top + "px - 32px)"});
                    $('#map').css({"background-position-y": "calc(" + $('#map').css('backgroundPosition').split(" ")[1] + " + 32px)"});
                }
            }
            $('#map').addClass('up');
            $('#map').removeClass('right');
            $('#map').removeClass('left');
            $('#map').removeClass('down');
        }
    }
    
    function move_down(count, ignored_rules=false){
        if (true || ignored_rules){
            for (let i = 0; i < count; i++){
                if (-1 * parseInt($('#map').css('backgroundPosition').split(" ")[1]) + 200 <= 1536){           
                    if ($(window).height() - $('#map').position().top - 200 >= 32)
                        $('#map').css({"top": "calc(" + $('#map').position().top + "px + 32px)"});
                    $('#map').css({"background-position-y": "calc(" + $('#map').css('backgroundPosition').split(" ")[1] + " - 32px)"});
                }
            }
            $('#map').addClass('down');
            $('#map').removeClass('right');
            $('#map').removeClass('up');
            $('#map').removeClass('left');
        }
    }
});