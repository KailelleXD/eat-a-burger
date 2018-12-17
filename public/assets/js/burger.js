// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    console.log("Button has been clicked!");

    var newBurger = {
      name: $("#burger-info").val().trim(),
      devoured: 0
    };

    // Send the POST request.
    $.ajax("/api/burger", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".change-devour").on("click", function (event) {
    var id = $(this).data("id");

    var newDevour = $(this).data("newdevour");

    if (newDevour === 0) {
      newDevour = 1;
    } else if (newDecour === 1) {
      newDevour = 0;
    }

    var newDevourState = {
      devour: newDevour
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(
      function () {
        console.log("changed devour to", newDevour);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-burger").on("click", function(event) {
    // Get the ID from the corresponding button's data attribute
    var id = $(this).data("burger-id");
    // AJAX call to send the DELETE request.
    $.ajax("/api/burger/" + id, {
        type: "DELETE"
    // Promise.
    }).then(function() {
        console.log("deleted id#" + id);
        // Reload the page to update the WatchList.
        location.reload();
    });
  });
});