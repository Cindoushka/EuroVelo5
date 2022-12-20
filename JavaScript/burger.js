$(document).ready(function () {
  $(".burger").click(function () {
    $(".menuburger").toggleClass("open");
    $(".cross").toggleClass("hidden");
  });
});

$(document).ready(function () {
  $(".cross").click(function () {
    $(".menuburger").toggleClass("open");
    $(".cross").toggleClass("hidden");
  });
});
