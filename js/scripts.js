
$(document).ready(function() {
  $.getScript('../bower_components/instafeed.js/instafeed.min.js', function()
  {
  });
});

$(document).ready(function() {
  // Nav bar- logo and social links sizing
    var industriesHeight = $("#industries-logo-img").outerHeight();
      $("#social-link-list .fa").css("font-size", industriesHeight*.6);
});
