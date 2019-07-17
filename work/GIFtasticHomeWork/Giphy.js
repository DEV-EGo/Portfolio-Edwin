////event listener for my elements
var topic = ["TheMatrix", "car", "tequila", "fastandfurious", "gt86", "boats",
    "berniesanders", "pizza", "space",
    "tesla", "bitcoin", "iluminati"];

////"this" keyword linking to the button that was clicked

$("#submitButton").on("click", function () {
    event.preventDefault();
    $("#buttonDisplay").empty();
    thisInput = $("#topic").val().trim();
    topic.push(thisInput);

    renderButtons();
})


function renderButtons() {
    for (i = 0; i < topic.length; i++) {
        var thisButton = $("<button>");
        thisButton.addClass("topic");
        thisButton.text(topic[i]);
        $("#buttonDisplay").append(thisButton);
    }
    giphy();
}

function giphy() {
    $(".topic").on("click", function () {
        var item = $(this).attr("");
        var item = $(this).text();


        var queryURL = "https://api.giphy.com/v1/gifs/search?q="
            + item + "&api_key=dc6zaTOxFJmzC&limit=10";

        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {
                console.log(queryURL);
                console.log(response);
                ////results variable
                var results = response.data;
                /////loop for result item
                for (var i = 0; i < results.length; i++) {
                    ////pg13 rating
                    if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
                        ////div for gif
                        var gifDiv = $("<div>");
                        ///storing results of item rating
                        var rating = results[i].rating;
                        //////create paragraph tag with the results
                        var p = $("<p>").text("Rating: " + rating);
                        /////image tagg created
                        var topicImage = $("<img>");
                        ///search attribute for prperty being pulled
                        topicImage.attr("src", results[i].images.fixed_height.url);

                        gifDiv.append(p);

                        gifDiv.append(topicImage);

                        $("#gifs-area").prepend(gifDiv);
                    }
                }
            });
    });
};

var thisButn = $(this).attr("vehicles");

renderButtons();