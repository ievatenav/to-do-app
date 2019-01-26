// Make a Task Done by clicking on it
$("ul").on("click", "li", function(){
    $(this).toggleClass("taskDone");
});

// Click to delete the Task
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
})

// Add a new Task
$("input").on("keypress", function(event){
    if(event.which === 13){
        // grab new todo text from input
        let toDoText = $(this).val();
        // create a new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + toDoText + "</li>");
        // clearing the input
        $(this).val("");
    }
})

// Open or close input field
$(".fa-plus").on("click", function(){
    $("input").fadeToggle();
});