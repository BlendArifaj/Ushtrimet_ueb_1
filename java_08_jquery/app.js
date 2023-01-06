$( () => {
    $('#input-text').on('focus', () => {
        console.log("Focused element!");
    });


    $('#input-text').on('blur', () => {
        console.log("Blur element!");
    });

    $('#click-div').mouseenter( () => {
        console.log(
            $('#click-div').css('color')
        );
        // $('#click-div').css('color', 'red');
    });

    $('#click-div').mouseleave( () => {
        // ..
    });

    $('#input-text').on({
        keypress: ({ originalEvent }) => {
            console.log(originalEvent);
        },
        keydown: () => {},
        keyup: () => {},
    });

    $('#btn-click-hide').on(
        'click',
        () => {
            // $('#click-div').hide(500, function(){

            // });
            $('#click-div').hide(500, () => {
                console.log("element is hidden!");
            });
        }
    );

    $('#btn-click-show').on(
        'click',
        () => {
            $('#click-div').show(1000);
        }
    );

    $('#btn-click-toggle').on(
        'click',
        () => {
            $('#click-div').hide(500).show(1000).hide(500).show(10);
        }
    );

    // Leximi i permbajtjes se elementit
    $("p").text();

    $("div").html();

    $("input").val();

    //Vendosja e vlerave:
    $("p").text("text...");
    $("p").append("add some text...");
    $("p").prepend("add some text before other text ...");

    $("div").html("<p> </p>");
    $("div").append("<div> ... </div>");
    $("div").before("<a />");
    $("div").after("<span> ... </span>");

    $("input").val("input value...");

    // leximi dhe vendosja e vlerave per atributet e elementit:
    $("p").attr('class'); // lexojm
    $("p").attr('class', 'new-class'); // vendosim vlere

    // largimi i permbajtjes
    $("div").remove(); // largohet komplet elementi

    $("div").empty(); // largohet permbajtja e elementit


    // CSS:
    $("div").css("background-color", "red");
    $("div").css({"color": white, "font-size": 15, "padding": 0})

    $("div").css("color"); // leximi i vleres se atributit
    
    // Box modeli - vlerat:
    // width() dhe height(); -> leximi i dimensioneve te elementit
    // innerWidth() dhe innerHeight() -> elementi + padding
    // outerWidth() dhe outerHeight() -> elementi + padding + borderWidth
    // outerWidth(true) dhe outerHeight(true) 
    //    -> elementi + padding + borderWidth + margin

    // Parent:
    $("div#children-1").parent();

    $("div#children-1").parents(); 

    $("div#children-1").parentsUntil("body");

    // Children:
    $("div#parent").children();

    $("div#parent").children(".children");

    $("div#parent").find("span");

    // $("div#parent").find("*") == $("div#parent").children();

    // Elementet e nivelit te njejt

    $("div#children-1").siblings();

    $("div#children-1").siblings(".siblings");

    $("div#children-2").next(); // children-3
    $("div#children-2").prev(); // children-1

    $("div#children-2").nextAll(); //
    $("div#children-2").prevAll(); //

    $("div#children-2").nextAllUntil("span");
    $("div#children-2").prevAllUntil("span");

    // Filtering:
    $("div").first();
    $("div").last();
    $("div").eq(2);
    $("div").filter(".test");
    $("div").not(".test");

});