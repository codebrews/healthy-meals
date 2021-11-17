'use strict'

function imageRatio(h, w) {
    $(".image-ratio").each(function () {
        var thisColumn = $(this);
        var width = thisColumn.width();
        var height = width * (9 / 16);
        var recipeId = thisColumn.data("recipeid");
        $("#img-" + recipeId).height(height);
    });
}

$(document).ready(function () {
    imageRatio();
    $(window).resize(function () {
        imageRatio();
    });
});
