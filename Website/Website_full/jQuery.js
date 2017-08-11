$("#developerSkills").click(function(){
    $("#developer").load("developerSkills.html");
});

$(document).ready(function(){
    $("#developerSkills").click(function(){
        $.get("developerSkills.html", function(data, status){
            alert("Data: " + data + "\nStatus: " + status);
        });
    });
});

$(document).ready(function(){
    $("img").mouseenter(function(){
        $("img").css('transform', 'scale(1.5)');
    });
    $("img").mouseleave(function(){
        $("img").css('transform', 'scale(1)');
    });
});
