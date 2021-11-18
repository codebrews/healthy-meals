'use strict'

// sets the height of an image to 
function imageRatio() {
    $(".image-ratio").each(function () {
        var thisColumn = $(this);  // the parent column of the image given the above class
        var width = thisColumn.width();
        var height = width * (9 / 16);
        var recipeId = thisColumn.data("recipeid");  // id from API given to parent column
        $("#img-" + recipeId).height(height);  // class name given to child image
    });
}

$(document).ready(function () {
    imageRatio();
    $(window).resize(function () {
        imageRatio();
    });
});



