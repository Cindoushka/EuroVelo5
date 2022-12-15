
$(document).ready(function () {
    $(".gps").click(function () {
            $(".gps").toggleClass("actif");
            $(".gps").toggleClass("inactif");
            $(".etapes").toggleClass("actif");
            $(".etapes").toggleClass("inactif");
    });
  });

  $(document).ready(function () {
    $(".etapes").click(function () {
        $(".gps").toggleClass("actif");
        $(".gps").toggleClass("inactif");
        $(".etapes").toggleClass("actif");
        $(".etapes").toggleClass("inactif");
    });
  });

