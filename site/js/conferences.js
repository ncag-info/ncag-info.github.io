$(document).ready(function() {
  var today = new Date();

  $("dl#conferences dt").each(function() {
    var end = new Date($(this).data("end"));

    if (end < today) {
      $(this).addClass("past");
      $(this).nextAll().addClass("past"); // slightly redundant
    }

  });

  $("dl#conferences dt.past").first().prev().css("margin-bottom", "1em"); // this seems hard with just selectors
});
