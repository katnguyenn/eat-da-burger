
$(".devburger").on("click", function () {

    const id = $(this).data("id");
    console.log(id);
    const devour = {
        devoured: true
    };

    // Set the PUT request
    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devour
    }).then(() => {
        console.log("Burger has been devoured");
        // Reload page to get updated list
        location.reload();
    });
});



$("#createburger").on("submit", function(event) {
    event.preventDefault();


    let newBurger = {
        burger_name: $("#textbox").val().trim(),
        devoured: 0
    };


    // Send the PORT request
    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(function() {
        console.log("Created new burger");
        // Reload page to get updated list
        location.reload();
    });


});

