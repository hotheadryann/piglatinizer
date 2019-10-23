$( "document" ).ready(function(){
$("#button").click(function(){
    var userInput = $(".input").val();
    var piglatinWord = piglatinizer(userInput);
    $(".output").text(piglatinWord);
    });
});


function piglatinizer(userInput){
    return userInput.slice(1) + userInput[0] + "ay";
}