$(document).ready(function () {
    var foods = [
        'pasta',
        'pizza',
        'cake',
        'hot dog',
        'ice cream',
        'milkshake'
    ]

    //prints all buttons from array
    var l = foods.length;
    for (var i = 0; i < l; i++) {
        var newButton = $("<button class='btn btn-light' type='button'>").text(foods[i]).attr("data-food", foods[i]);
        $("#buttons").append(newButton).append(" ");
    }

    //adds button of choice
    $("input[type='text']").keyup(function (e) {
        if (e.which == 13) {
            event.preventDefault();
            var foodVal = $("input[type='text']").val();
            foods.push(foodVal);
            console.log(foodVal);
            console.log(foods);
            $("input[type='text']").val("");
            var newButton = $("<button class='btn btn-light' type='button'>").text(foodVal).attr("data-food", foodVal);
            $("#buttons").append(newButton);

            var foodURL = "https://api.giphy.com/v1/gifs/search?q=" +
            foodVal + "&api_key=dc6zaTOxFJmzC&limit=10";
            console.log(foodURL);

            $.ajax({
                url: foodURL,
                method: "GET"
            }).then(function (response) {
                var foodResults = response.data;
                //append the corresponding image to the page
    
                for (var i = 0; i < foodResults.length; i++) {
    
                    var result = foodResults[i];
                    console.log(result);
    
                    var image = result.images["480w_still"].url;
                    var rating = result.rating;
                    var gif = result.images.fixed_height.url;
                    var title = result.title;
                    console.log(image);
                    console.log(rating);
                    console.log(title);
                    console.log(gif);
    
                    var pRating = $("<p>").text("Rating: " + rating);
                    var pTitle = $("<p>").text("Title: " + title);
                    var foodImg = $("<img>");
                    foodImg.attr("src", image);
                    foodImg.attr("imgsrc", image);
                    foodImg.attr("gif", gif)
    
                    foodImg.prepend(pTitle);
                    foodImg.append(pRating);
    
                    $("#gifs-here").append(foodImg);
    
                }
    
                //switching from gif to image 
                $('img').on('click', function () {
                    imgVal = $(this).attr('imgsrc');
                    console.log(imgVal)
                    gifVal = $(this).attr('gif');
                    console.log(gifVal);
                    gifVersion = $("<img>");
                    gifVersion.attr('src', gifVal)
                    var source = $(this).attr("src");
                    var imageTag = "480w"
                    console.log(source);
                    if (source.indexOf(imageTag) != -1) {
                        console.log("this is an image");
                        $(this).attr("src", gifVal);
                    } else if (source.indexOf(imageTag) == -1) {
                        $(this).attr("src", imgVal);
                    }
                });
            })

        }
    })

    //console logs the value of the food button
    $('button').on('click', function () {
        var food = $(this).attr("data-food");
        console.log(food);
        $("#gifs-here").html('');

        //GIPHY API
        var foodURL = "https://api.giphy.com/v1/gifs/search?q=" +
            food + "&api_key=dc6zaTOxFJmzC&limit=10";
        console.log(foodURL);

        //AJAX
        $.ajax({
            url: foodURL,
            method: "GET"
        }).then(function (response) {
            var foodResults = response.data;
            //append the corresponding image to the page

            for (var i = 0; i < foodResults.length; i++) {

                var result = foodResults[i];
                console.log(result);

                var image = result.images["480w_still"].url;
                var rating = result.rating;
                var gif = result.images.fixed_height.url;
                var title = result.title;
                console.log(image);
                console.log(rating);
                console.log(title);
                console.log(gif);

                var pRating = $("<p>").text("Rating: " + rating);
                var pTitle = $("<p>").text("Title: " + title);
                var foodImg = $("<img>");
                foodImg.attr("src", image);
                foodImg.attr("imgsrc", image);
                foodImg.attr("gif", gif)

                foodImg.prepend(pTitle);
                foodImg.append(pRating);

                $("#gifs-here").append(foodImg);

            }

            //switching from gif to image 
            $('img').on('click', function () {
                imgVal = $(this).attr('imgsrc');
                console.log(imgVal)
                gifVal = $(this).attr('gif');
                console.log(gifVal);
                gifVersion = $("<img>");
                gifVersion.attr('src', gifVal)
                var source = $(this).attr("src");
                var imageTag = "480w"
                console.log(source);
                if (source.indexOf(imageTag) != -1) {
                    console.log("this is an image");
                    $(this).attr("src", gifVal);
                } else if (source.indexOf(imageTag) == -1) {
                    $(this).attr("src", imgVal);
                }
            });
        })

    });





















});





// var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
//         animal + "&api_key=dc6zaTOxFJmzC&limit=10";

//       $.ajax({
//         url: queryURL,
//         method: "GET"
//       }).then(function(response) {