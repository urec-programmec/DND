$(document).ready(function () {
    $("body").mousemove(function (e) {
        handleMouseMove(e);
    });

    $("#button-interface").click(
        function (e) {
            interfaceMoveOut(e);
        }
    );

    function handleMouseMove(event) {
        let x = event.pageX,
            y = event.pageY;

        $("#circle").animate({
            left: x,
            top: y
        }, 0);
    }
    
    function interfaceMoveOut(event) {
        let interfase = $("#interface"),
            flag = interfase.css("display") == "none" ? false : true;
        if(flag){
            interfase.hide(1000);
            interfase.empty();
            $("#button-interface").animate({
                left: "6%",
                top: "2%"
            })
        }
        else{
            interfase.show("slow");
            $("#button-interface").animate({
                left: "1%",
                top: "1%"
            });
        }
    }
});

