var vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"]

function convertToPuzzle(inputText) {
  var textSplit = inputText.split("");
  vowelSeeker:
  for (var i = 0; i < textSplit.length; i++) {
    for (var j = 0; j < vowels.length; j++) {
      if (textSplit[i] == vowels[j]) {
        textSplit[i] = "-";
        console.log(textSplit);
        continue vowelSeeker;
      }
    }
  }
  var textRejoined = textSplit.join("");
  return textRejoined;
}

$(document).ready(function() {
  $("form#origin-text").submit(function(event) {
    event.preventDefault();
    var string = $("input#text-in").val();
    var result = convertToPuzzle(string);
    console.log(result);
    $("#puzzle").text(result);
    $("#results").show();
    $("#input-form").hide();
  });
});
