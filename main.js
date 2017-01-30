var listLink = $("#link-list");
var listView = $("#list-view");

listLink.click(function(event) {
    event.preventDefault();

    listView.addClass("visible");
    listView.removeClass("hidden");
});
