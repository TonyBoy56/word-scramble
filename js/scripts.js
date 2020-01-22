$(document).ready(function() {
  $("form#default").submit(function(event){
    event.preventDefault();

    var input = $("#input").val();
    // create var as empty string to store user input //
    var result = "";

    for (var i=0; i<=input.length-1;i++) {
      if(input[i] === "e" || input[i] === "a" || input[i] === "o" || input[i] === "i" || input[i] === "u") {
        result += "-";
        // alert(result)
      }
      else {
        result += input[i];
        // alert(result)
      }
    }
    $("#output").text(result);
  });
});