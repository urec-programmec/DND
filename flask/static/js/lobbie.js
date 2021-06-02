$( document ).ready(function() {
    
    document.onkeydown = check;

    $('#hero').addClass('right');

    var hero = {
        x:3,
        y:21,
        room: -1
    }

    console.log(me);

    move_left('#hero', 5, true);
    move_down('#hero', 16, true);
    move_right('#hero', 3, true);

    hero.room = map[hero.y][hero.x];
    map[hero.y][hero.x] = 'x';

    $('#profile-open').on("click", () => {
        if (! $('#profile').hasClass('profile-open')){
            $('#profile').addClass('profile-open');
        }
        else{
            $('#profile').removeClass('profile-open');
        }
    }); 

    function check(e){
        // console.log(map);

        if (e.keyCode == '37')
            move_left('#hero', 1);

        if (e.keyCode == '38')
            move_up('#hero', 1);

        if (e.keyCode == '39')
            move_right('#hero', 1);

        if (e.keyCode == '40')
            move_down('#hero', 1);
    }

    function move_left(selector, count, ignored_rules=false){
        if (hero.x > 0 && map[hero.y][hero.x - 1] != -1 || ignored_rules){
            for (let i = 0; i < count; i++){
                if ((hero.x > 0 && map[hero.y][hero.x - 1] != -1 || ignored_rules) && ($(selector).position().left > -130 || parseInt($(selector).css('backgroundPosition').split(" ")[0]) < 130)){
                    if ($(selector).position().left > -130)
                        $(selector).css({"left": "calc(" + $(selector).position().left + "px - 32px)"});
                    $(selector).css({"background-position-x": "calc(" + $(selector).css('backgroundPosition').split(" ")[0] + " + 32px)"});
                    
                    if(!ignored_rules){
                        map[hero.y][hero.x] = hero.room;
                        hero.x--;
                        hero.room = map[hero.y][hero.x];
                        map[hero.y][hero.x] = 'x';
                    }
                }
            }
            $(selector).addClass('left');
            $(selector).removeClass('right');
            $(selector).removeClass('up');
            $(selector).removeClass('down');
        }
    }
    
    function move_right(selector, count, ignored_rules=false){
        if (hero.x < 107 && map[hero.y][hero.x + 1] != -1 || ignored_rules){

            for (let i = 0; i < count; i++){
                if ((hero.x < 108 && map[hero.y][hero.x + 1] != -1 || ignored_rules) && -1 * parseInt($(selector).css('backgroundPosition').split(" ")[0]) + 200 <= 3456){
                    if ($(document).width() - $(selector).position().left - 200 >= 32)
                        $(selector).css({"left": "calc(" + $(selector).position().left + "px + 32px)"});                
                    $(selector).css({"background-position-x": "calc(" + $(selector).css('backgroundPosition').split(" ")[0] + " - 32px)"});
                   
                    if(!ignored_rules){                    
                        map[hero.y][hero.x] = hero.room;
                        hero.x++;
                        hero.room = map[hero.y][hero.x];
                        map[hero.y][hero.x] = 'x';
                    }
                }
            }
            $(selector).addClass('right');
            $(selector).removeClass('left');
            $(selector).removeClass('up');
            $(selector).removeClass('down');
        }
    }
    
    function move_up(selector, count, ignored_rules=false){
        if (hero.y > 0 && map[hero.y - 1][hero.x] != -1 || ignored_rules){
            for (let i = 0; i < count; i++){
                if ((hero.y > 0 && map[hero.y - 1][hero.x] != -1 || ignored_rules) && ($(selector).position().top > -110 || parseInt($(selector).css('backgroundPosition').split(" ")[1]) < 110)){
                    if ($(selector).position().top > -110)
                        $(selector).css({"top": "calc(" + $(selector).position().top + "px - 32px)"});
                    $(selector).css({"background-position-y": "calc(" + $(selector).css('backgroundPosition').split(" ")[1] + " + 32px)"});
                    
                    if(!ignored_rules){                
                        map[hero.y][hero.x] = hero.room;
                        hero.y--;
                        hero.room = map[hero.y][hero.x];
                        map[hero.y][hero.x] = 'x';
                    }
                }
            }
            $(selector).addClass('up');
            $(selector).removeClass('right');
            $(selector).removeClass('left');
            $(selector).removeClass('down');
        }
    }
    
    function move_down(selector,count, ignored_rules=false){
        if (hero.y < 47 && map[hero.y + 1][hero.x] != -1 || ignored_rules){
            for (let i = 0; i < count; i++){
                if ((hero.y < 48 && map[hero.y + 1][hero.x] != -1 || ignored_rules) && -1 * parseInt($(selector).css('backgroundPosition').split(" ")[1]) + 200 <= 1536){           
                    if ($(document).height() - $(selector).position().top - 200 >= 32)
                        $(selector).css({"top": "calc(" + $(selector).position().top + "px + 32px)"});
                    $(selector).css({"background-position-y": "calc(" + $(selector).css('backgroundPosition').split(" ")[1] + " - 32px)"});
                    
                    if(!ignored_rules){                
                        map[hero.y][hero.x] = hero.room;
                        hero.y++;
                        hero.room = map[hero.y][hero.x];
                        map[hero.y][hero.x] = 'x';
                    }
                }
            }
            $(selector).addClass('down');
            $(selector).removeClass('right');
            $(selector).removeClass('up');
            $(selector).removeClass('left');
        }
    }
});