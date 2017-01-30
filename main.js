var listLink = $("#link-list");
var listView = $("#list-view");
let bologna = {};

listLink.click(function(event) {
    event.preventDefault();

    listView.addClass("visible");
    listView.removeClass("hidden");
});
