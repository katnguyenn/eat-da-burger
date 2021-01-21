// Make sure everything loads first
$(() => {
    $(".devburger").on("click", (event) => {
        event.preventDefault();

        const id = $(this).data("id");
        const devour = {
            devoured: true
        };

        // Set the PUT request
        $.ajax("/api/burgers" + id, {
            type: "PUT",
            data: devour
        }).then(() => {
            console.log("Burger has been devoured");
            // Reload page to get updated list
            location.reload("/");
        });
    });

});

$("#createburger").on("submit", (event) => {
    event.preventDefault();

    let newBurger = {
        burger_name: $("#textbox").val().trim(),
        devoured: false
    };

    // Send the PORT request
    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(() => {
        console.log("Created new burger");
        // Reload page to get updated list
        location.reload();
    });


});