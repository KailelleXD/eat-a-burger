// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-devour").on("click", function(event) {
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
        function() {
          console.log("changed devour to", newDevour);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
  });
  