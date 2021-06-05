$( document ).ready(function() {
    
    document.onkeydown = check;

    socket.on('connect', function() {
        socket.emit('start', {'key': key});
    });

    socket.on('message', function(data) {
        if (Object.keys(users).length - 1 > Object.keys(data).length){
            names = []
            for (i in data)
                names.push(data[i].name)

            for (i in users){
                if (names.indexOf(users[i].name) == -1 && users[i].name != 'hero2'){
                    console.log('delete');
                    $("#" + users[i].name).remove();
                    $("#" + users[i].name + "-x").remove();
                    $("#" + users[i].name + "-t1").remove();
                    $("#" + users[i].name + "-t2").remove();
                    delete users[i];
                }
            }
        }
        else if (Object.keys(users).length - 1 < Object.keys(data).length){
            // console.log('add');
            // console.log(users);
            for (let i in data){
                if (Object.keys(users).indexOf(data[i].name) == -1){

                    $("#loading").removeClass("loading-end");
                    $("#loading").removeClass("loading-end-end");
                    $(".delete").remove();
                    $('#loading-text').text("new player coming");                
                    map[hero.y][hero.x] = hero.room;
                    console.log('first ' + data[i].name);

                    let counter = 0;
                    let t1 = setInterval(() => {
                        console.log('first ' + data[i].name);
                        if (counter == hero.x){                    
                            counter = 0;
                            clearInterval(t1);
                            let t2 = setInterval(() => {
                                if (counter == hero.y){         
                                    // console.log(Y);
                                    clearInterval(t2);
                                    users = Object.assign({
                                        [data[i].name]: {
                                            name: data[i].name,
                                            X: data[i].X,
                                            Y: data[i].Y,
                                            color: data[i].color
                                        }
                                    }, users);

                                    console.log(users);
                                    console.log('two ' + data[i].name);
                    
                                    full_init();                                           
                                }                          
                                else {                                
                                    counter ++;                             
                                    move_up('#hero', 1, true, true);
                                
                                }
                            },1)
                        }  
                        else {                       
                            counter ++;                    
                            move_left('#hero', 1, true, true);                                                                           
                        }            
                    },1);               
                }                
            }
        }
        else {
            for (let i in data){
                if (data[i].X > users[data[i].name].X)
                    move_right('#' + data[i].name, 1, true, true)
                else if (data[i].X < users[data[i].name].X)
                    move_left('#' + data[i].name, 1, true, true)
                else if (data[i].Y > users[data[i].name].Y)
                    move_down('#' + data[i].name, 1, true, true)
                else if (data[i].Y < users[data[i].name].Y)
                    move_up('#' + data[i].name, 1, true, true)
            }
        }
    });

    //#region INITIAL

    var hero = {
        x: 0,
        y: 0,
        room: -1
    }    
    var can_write = false;
    var init_access = true;

    full_init();

    //#endregion

    function full_init(){
        
        hero = {
            x: 0,
            y: 0,
            room: -1
        }    
        
        can_write = false;
        init_access = true;

        hero.room = map[hero.y][hero.x];
        map[hero.y][hero.x] = 'x';
        
        move_left('#hero', 5, true, true);
        move_up('#hero', 5, true, true);

        for (i in users){
            if (users[i].name != me.name && users[i].name != 'hero2'){
                $('#heros').append(template(users[i]));
                move_left('#' + users[i].name, 5, true, true)
                move_up('#' + users[i].name, 5, true, true)        
            }
        }       
        // return;
        users['hero2'] = {
            name:'hero2',
            X: 108,
            Y: 48,
            color: '#ef8b76'
        }
    
        move_left('#hero2', 5, true, true);
        move_up('#hero2', 5, true, true);
    
        init(Object.keys(users)[0]);
    }

    
    function init(selector, notyet=false){
        // if(selector != 'hirovo')
        //     return;

        next = Object.keys(users).indexOf(selector) != Object.keys(users).length - 1 ? Object.keys(users)[Object.keys(users).indexOf(selector) + 1] : null;
        counter = 0;
        back = false;

        if (selector == me.name){
            selector = '#hero';
            X = me.X;
            Y = me.Y;
        }
        else if (notyet) {
            selector = '#' + selector;
            X = 107;
            Y = 47;
            back = true;
        }
        else {
            X = users[selector].X;
            Y = users[selector].Y;
            selector = '#' + selector;
        }

        if (selector == '#hero' && !notyet){
            if (next != null)
                return init(next)
            else 
                return init('hero2', true)
        }
            
        // console.log(selector)

        let t1 = setInterval(() => {
            if (counter == X){
                // console.log(X);
                counter = 0;
                clearInterval(t1);
                let t2 = setInterval(() => {
                    if (counter == Y){         
                        // console.log(Y);
                        clearInterval(t2);
                        // console.log(next);
                        if (next != null || notyet){                            
                            if (notyet){
                                if (selector == '#hero'){
                                    // console.log('ok');
                                    can_write = true;     
                                    $("#loading").addClass("loading-end-end");
                                    setTimeout(() => {
                                        $("#loading").addClass("loading-end");
                                    }, 1000);
                                    return;    
                                }
                                else{
                                    init_access = false;     
                                    return init(me.name, true)                                    
                                }
                            }                                      
                            if (selector != '#hero')
                                init(next);
                        }
                        else if (next == null){
                            // console.log('last');
                            init('hero2', true)
                        }
                    }                          
                    else {
                        // console.log('2 ' + counter)
                        counter ++;
                        if (back)
                            move_up(selector, 1, true, selector != '#hero');
                        else
                            move_down(selector, 1, true, selector != '#hero');
                    }
                },1)
            }  
            else {
                // console.log('1 ' + counter)
                counter ++;
                if (back)
                    move_left(selector, 1, true, selector != '#hero');                                    
                else 
                    move_right(selector, 1, true, selector != '#hero');                
            }            
        },1);
    }

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

    function move_left(selector, count, ignored_rules=false, up_off_map=false){
        
        if (hero.x > 0 && map[hero.y][hero.x - 1] != -1 || ignored_rules){
            for (let i = 0; i < count; i++){
                if ((hero.x > 0 && map[hero.y][hero.x - 1] != -1 || ignored_rules) && ($(selector).position().left > -130 || parseInt($(selector).css('backgroundPosition').split(" ")[0]) < 130)){
                    if ($(selector).position().left > -130){
                        $(selector).css({"left": "calc(" + $(selector).position().left + "px - 32px)"});
                        $(selector + '-x').css({"left": "calc(" + $(selector + '-x').position().left + "px - 32px)"});
                        $(selector + '-t1').css({"left": "calc(" + $(selector + '-t1').position().left + "px - 32px)"});
                        $(selector + '-t2').css({"left": "calc(" + $(selector + '-t2').position().left + "px - 32px)"});
                    }
                    else if (selector == '#hero' || init_access){
                        for (i in users){
                            n = init_access ?  selector : '#' + me.name;
                            if ('#' + users[i].name != n){
                                who = users[i].name == me.name ? '#hero' : "#" + users[i].name;
                                $(who).css({"left": "calc(" + $(who).position().left + "px + 32px)"});                
                                $(who + "-x").css({"left": "calc(" + $(who + "-x").position().left + "px + 32px)"});                
                                $(who + "-t1").css({"left": "calc(" + $(who + "-t1").position().left + "px + 32px)"});                
                                $(who + "-t2").css({"left": "calc(" + $(who + "-t2").position().left + "px + 32px)"});           
                            }
                        }
                    }
                    $(selector).css({"background-position-x": "calc(" + $(selector).css('backgroundPosition').split(" ")[0] + " + 32px)"});
                    
                    if(!up_off_map){
                        map[hero.y][hero.x] = hero.room;
                        hero.x--;
                        hero.room = map[hero.y][hero.x];
                        map[hero.y][hero.x] = 'x';
                        savestate();
                    }
                }
            }
            $(selector + '-x').addClass('left');
            $(selector + '-x').removeClass('right');
            $(selector + '-x').removeClass('up');
            $(selector + '-x').removeClass('down');
        }
    }
    
    function move_right(selector, count, ignored_rules=false, up_off_map=false){
        

        if (hero.x < 107 && map[hero.y][hero.x + 1] != -1 || ignored_rules){
            for (let i = 0; i < count; i++){
                if ((hero.x < 108 && map[hero.y][hero.x + 1] != -1 || ignored_rules) && -1 * parseInt($(selector).css('backgroundPosition').split(" ")[0]) + 200 <= 3456){
                    if ($(document).width() - $(selector).position().left - 200 >= 32){
                        $(selector).css({"left": "calc(" + $(selector).position().left + "px + 32px)"});                
                        $(selector + "-x").css({"left": "calc(" + $(selector + "-x").position().left + "px + 32px)"});                
                        $(selector + "-t1").css({"left": "calc(" + $(selector + "-t1").position().left + "px + 32px)"});                
                        $(selector + "-t2").css({"left": "calc(" + $(selector + "-t2").position().left + "px + 32px)"});                
                    }
                    else if (selector == '#hero' || init_access){
                        for (i in users){
                            n = init_access ?  selector : '#' + me.name;
                            if ('#' + users[i].name != n){
                                who = users[i].name == me.name ? '#hero' : "#" + users[i].name;
                                $(who).css({"left": "calc(" + $(who).position().left + "px - 32px)"});
                                $(who + '-x').css({"left": "calc(" + $(who + '-x').position().left + "px - 32px)"});
                                $(who + '-t1').css({"left": "calc(" + $(who + '-t1').position().left + "px - 32px)"});
                                $(who + '-t2').css({"left": "calc(" + $(who + '-t2').position().left + "px - 32px)"});   
                            }
                        }
                    }
                    $(selector).css({"background-position-x": "calc(" + $(selector).css('backgroundPosition').split(" ")[0] + " - 32px)"});
                   
                    if(!up_off_map){                    
                        map[hero.y][hero.x] = hero.room;
                        hero.x++;
                        hero.room = map[hero.y][hero.x];
                        map[hero.y][hero.x] = 'x';
                        savestate();
                    }
                }
            }

            $(selector + '-x').addClass('right');
            $(selector + '-x').removeClass('left');
            $(selector + '-x').removeClass('up');
            $(selector + '-x').removeClass('down');
        }
    }
    
    function move_up(selector, count, ignored_rules=false, up_off_map=false){
        

        if (hero.y > 0 && map[hero.y - 1][hero.x] != -1 || ignored_rules){
            for (let i = 0; i < count; i++){
                if ((hero.y > 0 && map[hero.y - 1][hero.x] != -1 || ignored_rules) && ($(selector).position().top > -150 || parseInt($(selector).css('backgroundPosition').split(" ")[1]) < 150)){
                    if ($(selector).position().top > -150){
                        $(selector).css({"top": "calc(" + $(selector).position().top + "px - 32px)"});
                        $(selector + '-x').css({"top": "calc(" + $(selector + '-x').position().top + "px - 32px)"});
                        $(selector + '-t1').css({"top": "calc(" + $(selector + '-t1').position().top + "px - 32px)"});
                        $(selector + '-t2').css({"top": "calc(" + $(selector + '-t2').position().top + "px - 32px)"});
                    }
                    else if (selector == '#hero' || init_access){
                        for (i in users){
                            n = init_access ?  selector : '#' + me.name;
                            if ('#' + users[i].name != n){
                                who = users[i].name == me.name ? '#hero' : "#" + users[i].name;
                                $(who).css({"top": "calc(" + $(who).position().top + "px + 32px)"});
                                $(who + '-x').css({"top": "calc(" + $(who + '-x').position().top + "px + 32px)"});
                                $(who + '-t1').css({"top": "calc(" + $(who + '-t1').position().top + "px + 32px)"});
                                $(who + '-t2').css({"top": "calc(" + $(who + '-t2').position().top + "px + 32px)"});
                            }
                        }
                    }
                    $(selector).css({"background-position-y": "calc(" + $(selector).css('backgroundPosition').split(" ")[1] + " + 32px)"});
                    
                    if(!up_off_map){                
                        map[hero.y][hero.x] = hero.room;
                        hero.y--;
                        hero.room = map[hero.y][hero.x];
                        map[hero.y][hero.x] = 'x';
                        savestate();
                    }
                }
            }
            $(selector + '-x').addClass('up');
            $(selector + '-x').removeClass('right');
            $(selector + '-x').removeClass('left');
            $(selector + '-x').removeClass('down');
        }
    }
    
    function move_down(selector,count, ignored_rules=false, up_off_map=false){

        if (hero.y < 47 && map[hero.y + 1][hero.x] != -1 || ignored_rules){
            for (let i = 0; i < count; i++){
                if ((hero.y < 48 && map[hero.y + 1][hero.x] != -1 || ignored_rules) && -1 * parseInt($(selector).css('backgroundPosition').split(" ")[1]) + 200 <= 1536){           
                    if ($(document).height() - $(selector).position().top - 200 >= 32){
                        $(selector).css({"top": "calc(" + $(selector).position().top + "px + 32px)"});
                        $(selector + '-x').css({"top": "calc(" + $(selector + '-x').position().top + "px + 32px)"});
                        $(selector + '-t1').css({"top": "calc(" + $(selector + '-t1').position().top + "px + 32px)"});
                        $(selector + '-t2').css({"top": "calc(" + $(selector + '-t2').position().top + "px + 32px)"});
                    }
                    else if (selector == '#hero' || init_access){
                        for (i in users){
                            n = init_access ?  selector : '#' + me.name;
                            if ('#' + users[i].name != n){
                                who = users[i].name == me.name ? '#hero' : "#" + users[i].name;
                                $(who).css({"top": "calc(" + $(who).position().top + "px - 32px)"});
                                $(who + '-x').css({"top": "calc(" + $(who + '-x').position().top + "px - 32px)"});
                                $(who + '-t1').css({"top": "calc(" + $(who + '-t1').position().top + "px - 32px)"});
                                $(who + '-t2').css({"top": "calc(" + $(who + '-t2').position().top + "px - 32px)"});
                            }
                        }
                    }
                    $(selector).css({"background-position-y": "calc(" + $(selector).css('backgroundPosition').split(" ")[1] + " - 32px)"});
                    
                    if(!up_off_map){                
                        map[hero.y][hero.x] = hero.room;
                        hero.y++;
                        hero.room = map[hero.y][hero.x];
                        map[hero.y][hero.x] = 'x';
                        savestate();
                    }
                }
            }
            $(selector + '-x').addClass('down');
            $(selector + '-x').removeClass('right');
            $(selector + '-x').removeClass('up');
            $(selector + '-x').removeClass('left');
        }
    }

    function savestate() {
        if (!can_write)
            return;
            
        socket.emit('go', {'key': key, 'X':hero.x, 'Y': hero.y});
        
        // $.ajax({
        //     data: {
        //         key: key,
        //         x: hero.x,
        //         y: hero.y
        //     },
        //     type: 'POST',
        //     url: '/savestate'
        // })
        // .done(function(data) {
        //     if (data.error)
        //         console.log('error')                  
        // });
    }

    function refresh(){
        if (!can_write)
            return;

        $.ajax({            
            type: 'POST',
            url: '/refresh/' + key
        })
        .done(function(data) {
            if (data.error)
                console.log('error')  
            else 
                console.log(data)  
        });
    }

    function template(user){
        text_color = (hex_rgb(user.color).r * 0.299 + hex_rgb(user.color).g * 0.587 + hex_rgb(user.color).b * 0.114) > 150 ?'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)'
        
        return  `
            <div id="` + user.name + `" class="delete map text-light" style="background-image: url('/static/source/map` + key + `.jpg')">
                <div class="text h2" style="color: ` + user.color + `;"><span style="background: ` + text_color + `;">&nbsp;` + user.name + `&nbsp;</span></div>           
            </div>
            <div id="` + user.name + `-t1" class="delete map text-x h2" style="color: ` + user.color + `;"><span style="background: ` + text_color + `;">&nbsp;` + user.name + `&nbsp;</span></div>
            <div id="` + user.name + `-t2" class="delete map text-x h4"></div>
            <div id="` + user.name + "-x" + `" class="delete map text-light left" style="z-index: 2"></div>`
    }

    function hex_rgb(hex) {
        var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        hex = hex.replace(shorthandRegex, function(m, r, g, b) {
          return r + r + g + g + b + b;
        });
      
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
        } : null;
      }
    

    $('#profile-open').on("click", () => {
        if (! $('#profile').hasClass('profile-open')){
            $('#profile').addClass('profile-open');
        }
        else{
            $('#profile').removeClass('profile-open');
        }
    }); 
});


// function init(selector, notyet=false, end=false){
//     // if(selector != 'hirovo')
//     //     return;

//     next = Object.keys(users).indexOf(selector) != Object.keys(users).length - 1 ? Object.keys(users)[Object.keys(users).indexOf(selector) + 1] : null;
//     counter = 0;
//     back = false;

//     if (end){
//         selector = '#' + selector;
//         X = me.X;
//         Y = me.Y;
//     }
//     else if (notyet) {
//         selector = '#' + selector;
//         X = 108;
//         Y = 48;
//         back = true;
//     }    
//     else {
//         X = users[selector].X;
//         Y = users[selector].Y;
//         selector = '#' + selector;
//     }

//     if (selector == me.name && !notyet && next != null)
//         return init(next)
//     else if (next == null && !notyet)
//         return init('hero2', true)
    

//     console.log(selector)

//     let t1 = setInterval(() => {
//         if (counter >= X){
//             console.log(X);
//             counter = 0;
//             clearInterval(t1);
//             let t2 = setInterval(() => {
//                 if (counter >= Y){         
//                     console.log(Y);
//                     clearInterval(t2);
//                     console.log(next);
//                     if (next != null || notyet || end){                                                              
//                         if (end){
//                             // can_write = true;     
//                             init_access = false;     
//                             $("#loading").addClass("loading-end-end");
//                             setTimeout(() => {
//                                 $("#loading").addClass("loading-end");
//                             }, 1000);
//                             return;
//                         }
//                         else if (notyet){
//                             // init('hero', true, true)
//                         }   
//                         else 
//                             init(next);
//                     }
//                     else if (next == null){
//                         console.log('last');
//                         init('hero2', true)
//                     }
//                 }                          
//                 else {
//                     console.log('2 ' + counter)
//                     counter ++;
//                     if (back)
//                         move_up(selector, 1, true, selector != '#hero');
//                     else
//                         move_down(selector, 1, true, selector != '#hero');
//                 }
//             },1)
//         }  
//         else {
//             console.log('1 ' + counter)
//             counter ++;
//             if (back)
//                 move_left(selector, 1, true, selector != '#hero');                                    
//             else 
//                 move_right(selector, 1, true, selector != '#hero');                
//         }            
//     },1);
// }
