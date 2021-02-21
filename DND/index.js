$(document).ready(function () {
    window.defaultWidth = window.innerWidth;
    window.onresize = function () {

        let x = (window.defaultWidth / window.innerWidth).toFixed(2);
        document.getElementById("circle2").style.transform = "scale(" + 1 / x + ")"

        $("#circle").height(250 / x)
        $("#circle").width(250 / x)
        $("#circle").css({marginTop: -125 / x, marginLeft: -125 / x})
    }

    $("body").mousemove(function (e) {
        handleMouseMove(e);
    });

    function handleMouseMove(event) {

        var x = event.pageX < ($(window).width() - 125 / (window.defaultWidth / window.innerWidth).toFixed(2)) ? event.pageX : ($(window).width() - 125 / (window.defaultWidth / window.innerWidth).toFixed(2));
        var y = event.pageY < ($(window).height() - 125 / (window.defaultWidth / window.innerWidth).toFixed(2)) ? event.pageY : ($(window).height() - 125 / (window.defaultWidth / window.innerWidth).toFixed(2));

        $("#circle").animate({
            left: x,
            top: y
        }, 0);

        $("#circle2").animate({
            left: x,
            top: y
        }, 0);

    }

    $("#button-interface").click(
        function (e) {
            interfaceMoveOut(e);
        }
    );

    function interfaceMoveOut(event) {
        let interfase = $("#interface"),
            flag = interfase.css("display") == "none" ? false : true;
        if (flag) {
            interfase.hide(1000);
            interfase.empty();
            $("#button-interface").animate({
                left: "6%",
                top: "2%"
            })
        } else {
            interfase.show("slow");
            $("#button-interface").animate({
                left: "1%",
                top: "1%"
            });
        }
    }
});


