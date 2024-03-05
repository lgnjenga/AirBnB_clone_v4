$(document).ready(function () {
  // Variable to store Amenity IDs
  var amenityIDs = [];

  // Function to update Amenities text
  function updateAmenitiesText() {
    var amenitiesText = amenityIDs.map(function (id) {
      return $('[data-id="' + id + '"]').data('name');
    }).join(', ');

    $('.popover .popover_content h4').text(amenitiesText);
  }

  // Listen for changes on each input checkbox tag
  $('input[type="checkbox"]').change(function () {
    var amenityID = $(this).data('id');
    var amenityName = $(this).data('name');

    // Check if the checkbox is checked
    if ($(this).is(':checked')) {
      // Store Amenity ID in the variable
      amenityIDs.push(amenityID);
    } else {
      // Remove Amenity ID from the variable
      amenityIDs = amenityIDs.filter(function (id) {
        return id !== amenityID;
      });
    }

    // Update the h4 tag inside the div Amenities with the list of Amenities checked
    updateAmenitiesText();
  });

  // Request API status
  $.get('http://0.0.0.0:5001/api/v1/status/', function (data) {
    // Check if the status is "OK"
    if (data.status === 'OK') {
      // Add the class "available" to div#api_status
      $('#api_status').addClass('available');
    } else {
      // Remove the class "available" from div#api_status
      $('#api_status').removeClass('available');
    }
  });
});
