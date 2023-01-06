$( () => {

    $('#content').mouseenter(() => {
        console.log("Mouse enters element #content");
    });

    $('#content').mouseleave(() => {
        console.log("Mouse leave ...");
    });

    $('#content').click( () => {
        console.log("click event 1");
    });

    $('#content').on('click', () => {

    });


    $("#content").on({
        click: () => {

        },
        mouseenter: () => {

        },
        mouseleave: () => {

        }
    });


    $('input#input-text').focus(
        () => {
            console.log("focus is in input!");
        }
    );

    $('input#input-text').blur(
        () => {
            console.log("focus is not in input!");
        }
    );

    $('input#input-text').on({
        keyup: (event) => {
            const { originalEvent, currentTarget } = event;
            console.log("originalEvent: ", originalEvent);
            console.log("target:", currentTarget);
        }
    });

    $("button#btn-click-hide").click(
        () => {
            $("div#content").hide(
                1000, 
                () => {
                    console.log("hide is done, now its time for callback function!");
                }
            );
        }
    );

    $("button#btn-click-show").click(
        () => {
            $("div#content").show(500);
        }
    );

    $("button#btn-click-toggle").click(
        () => {
            $("div#content").toggle(500);
            // $('div#content').hide(500).show(1000).hide(50).show(2000);
        }
    );

    // permbajtja e nje paragrafi:
    $("p#content").text();
    console.log($("body").html());
    $("input#text").val();

    // vendosja e vlerave ne elemente:
    $("p#content").text("new text ...");
    $("body").html("<div> .... </div>");
    $("input#text").val("test");

    // atributet:
    $("button#btn-click-toggle").attr('data-value');
    $("button#btn-click-toggle").attr('data-value', 'test');

    
    // append / prepand
    $("p#content").append(" World!");
    $("p#content").prepand("Hello ");

    $("p#content").after(
        "<div> paragrafi i shtuar pas </div>"
    );

    $("p#content").before(
        "<p> paragrafi i shtuar para </p>"
    );

    // 
    $("p").css("color", "red");
    $("p").css("font-size", "20");
    $("p").css("border", "1");
    // ===
    $("p").css({
        "color": "red",
        "font-size": "20",
        "border": "1"
    });
    $("p#content").css("color");

    // BOX modelin:
    // width() / height()   -> dimensionet e elementit
    // innerWidth() / innerHeight() -> elementi + padding
    // outerWidth() / outerHeight() -> elementi + padding + border
    // outerWidth(true) / outerHeight(true) -> elementi + padding + border + margin
    
    // parent:
    $("p#content").parent();
    $("p#content").parents(); 
    $("p#content").parentsUntil("body");
    $("p#content").parents(".parent"); 

    // children:
    $("body").children();
    $("body").children("p.children");

    $("body").find("span#test");
    $("body").find("*"); // $("body").children();

    // siblings
    $("p#content").siblings();

    $("p#content").next();
    $("p#content").nextAll();
    $("p#content").nextAllUntil("div");

    $("p#content").prev();
    $("p#content").prevAll();
    $("p#content").prevAllUntil("div");


    $("div").first();
    $("div").last();
    $("div").eq(1);
    $("div").filter(".class-a");
    $("div").not(".class-a");









});

const callback = () => {
    // logic
}

function play(time, callback){
    // ...

    callback();
}