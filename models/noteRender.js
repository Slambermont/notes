document.addEventListener("DOMContentLoaded", function() {
  var notes = ['Note1', 'Note2'];

  var noteContainer = document.getElementById("notes")

  notes.forEach(function(note){
    var newDiv = document.createElement('div')
    var text = document.createTextNode(note);
    newDiv.appendChild(text);
    noteContainer.appendChild(newDiv);
  });
});
