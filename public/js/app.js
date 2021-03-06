// Grab the articles as a json
// $.getJSON("/articles", function(data) {
//   // For each one
//   for (var i = 0; i < data.length; i++) {
//     // Display the apropos information on the page
//     // $("#articles").append("<p data-id='" + data[i]._id + "'>" + data[i].title + "<br />" + data[i].link + "</p>");

//     $('#articles').append(`<div class="row">
//     <div id="login-card" class="card col s12">
//       <div class="card-content">
//         <span class="card-title">${data[i].title}</span>
//         <div class="row">  
//           <p>${data[i].excerpt}</p>
//         </div>
//         <div class="row center">  
//           <input class="btn center note-button" type="submit" value="Add Note">
//         </div>    
//       </div>
//     </div>`);
//   }
// });

// Whenever someone clicks a p tag
// $(document).on("click", "p", function() {
//   // Empty the notes from the note section
//   $("#notes").empty();
//   // Save the id from the p tag
//   var thisId = $(this).attr("data-id");

//   // Now make an ajax call for the Article
//   $.ajax({
//     method: "GET",
//     url: "/articles/" + thisId
//   })
//     // With that done, add the note information to the page
//     .done(function(data) {
//       console.log(data);
//       // The title of the article
//       $("#notes").append("<h2>" + data.title + "</h2>");
//       // An input to enter a new title
//       $("#notes").append("<input id='titleinput' name='title' >");
//       // A textarea to add a new note body
//       $("#notes").append("<textarea id='bodyinput' name='body'></textarea>");
//       // A button to submit a new note, with the id of the article saved to it
//       $("#notes").append("<button data-id='" + data._id + "' id='savenote'>Save Note</button>");

//       // If there's a note in the article
//       if (data.note) {
//         // Place the title of the note in the title input
//         $("#titleinput").val(data.note.title);
//         // Place the body of the note in the body textarea
//         $("#bodyinput").val(data.note.body);
//       }
//     });
// });

// When you click the savenote button
$(document).on("click", ".note-button", function() {
  // Grab the id associated with the article from the submit button
  var thisId = $(this).attr("data-id");

  console.log($(this).parent().parent().find(".note-input").val());
  // Run a POST request to change the note, using what's entered in the inputs
  $.ajax({
    method: "POST",
    url: "/articles/" + thisId,
    data: {
      // Value taken from title input
      title: "",
      // Value taken from note textarea
      body: $(this).parent().parent().find(".note-input").val()
    }
  })
    // With that done
    .done(function(data) {
      // Log the response
      console.log(data);
      window.location.reload();
      

    });

    
  // Also, remove the values entered in the input and textarea for note entry
  // $(".note-text").val("");
});
