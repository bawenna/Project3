$(document).ready(function() {
  $('#zipform').on('submit', function(event) {
    var loc = $('#zipcode').val();
    var lat;
    var lng;
    var x;
    $.get(
      'https://www.zipcodeapi.com/rest/js-rTyMicsfWrUvifDkyeNHgt1EysudYy0pszcKLFZH6Udp9QJI5wqlZs0yUuMS3Niw/info.json/'+loc+'/degrees',
      function (data) {
        lat = data.lat;
        lng = data.lnt;
        x = "https://www.google.com/maps/search/auto+shop/@" + lat +"," + lng +",11z/data=!3m1!4b1";
        $('#link').append(
        x
      );
        });
      event.preventDefault();
  });
});

$(document).ready(function(){
  $("#brand").mouseenter(function(){
    $("#dropdown").slideDown();
  });
  $("#dropdown").mouseleave(function(){
    $("#dropdown").slideUp();
  });
});

function formFunction() {
    if (confirm("Press Yes if you want to send this to us") == true) {
        window.confirm("You submission has been sent successfully!");
    } else {
        window.alert("You pressed Cancel :C");
    }
    formFunction.preventDefault();
}
