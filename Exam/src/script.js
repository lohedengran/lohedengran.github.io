$(document).ready(function () {
  $(".heading").slick({
    dots: true,
    arrows: false,
    vertical: true,
    verticalSwiping: true,
  });
});

$(document).ready(function () {
  $(".news-slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,
    prevArrow:
      ' <span class= "slide-arrow prev-arrow"><i class="fas fa-angle-left"></i></span>',
    nextArrow:
      ' <span class = "slide-arrow next-arrow"><i class="fas fa-angle-right"></i></span>',
  });
});

$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      let target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");

      if (target.length) {
        event.preventDefault();
        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          500,
          function () {
            let $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
              return false;
            } else {
              $target.attr("tabindex", "-1");
              $target.focus();
            }
          }
        );
      }
    }
  });

let map = new google.maps.Map(document.getElementById("map"), {
  center: { lat: 55.60894, lng: 12.99596 },
  zoom: 14,
  disableDefaultUI: true,
  styles: [
    {
      elementType: "geometry",
      stylers: [
        {
          color: "#f5f5f5",
        },
      ],
    },
    {
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#616161",
        },
      ],
    },
    {
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#f5f5f5",
        },
      ],
    },
    {
      featureType: "administrative.land_parcel",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#bdbdbd",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [
        {
          color: "#eeeeee",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#757575",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [
        {
          color: "#e5e5e5",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#9e9e9e",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [
        {
          color: "#ffffff",
        },
      ],
    },
    {
      featureType: "road.arterial",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#757575",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [
        {
          color: "#dadada",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#616161",
        },
      ],
    },
    {
      featureType: "road.local",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#9e9e9e",
        },
      ],
    },
    {
      featureType: "transit.line",
      elementType: "geometry",
      stylers: [
        {
          color: "#e5e5e5",
        },
      ],
    },
    {
      featureType: "transit.station",
      elementType: "geometry",
      stylers: [
        {
          color: "#eeeeee",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        {
          color: "#c9c9c9",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#9e9e9e",
        },
      ],
    },
  ],
});

let icon = {
  url: "https://www.iconsdb.com/icons/preview/violet/map-marker-2-xxl.png",
  scaledSize: new google.maps.Size(40, 40),
};
let marker = new google.maps.Marker({
  position: { lat: 55.60894, lng: 12.99596 },
  map: map,
  icon: icon,
});

// $(document).ready(function () {
//   $("form[name='form']").validate({
//     rules: {
//       name: "required",
//       email: {
//         required: true,
//         email: true,
//       },
//     },
//     messages: {
//       name: "Please enter your name",
//       email: "Please enter a valid email address",
//     },
//     submitHandler: function (form) {
//       form.submit();
//     },
//   });
// });

// $(document).ready(function () {
//   $("form[name='form']").validate({
//     rules: {
//       name: "required",
//       email: "required",
//     },
//     messages: {
//       name: "Please enter your name",
//       email: "Please enter a valid email address",
//     },
//     submitHandler: function (form) {
//       form.submit();
//       return (document.getElementById("demo").innerHTML =
//         "Thank you we, will contact you");
//     },
//   });
// });

// $(form).ready(function () {
//   $("#btn-submit").click(function () {
//     return "Thank you, we will contact you!";
//   });
//   $("#btn-submit").click(function (event) {
//     $(".form-fill-in").html(event.result);
//   });
// });

$(form).ready(function () {
  $("form[name='form']").validate({
    rules: {
      name: "required",
      email: {
        required: true,
        email: true,
      },
    },
    messages: {
      name: "Please enter your name",
      email: "Please enter a valid email address",
    },
    submitHandler: function (form) {
      $(form).ready(function () {
        $("#btn-submit").click(function () {
          return "Thank you, we will contact you!";
        });
        $("#btn-submit").click(function (event) {
          $(".form-fill-in").html(event.result);
        });
      });
    },
  });
});
