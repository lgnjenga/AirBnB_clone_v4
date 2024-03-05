$(document).ready(function () {
  // Variable to store Amenity IDs
  var amenityIDs = [];

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
    var amenitiesText = amenityIDs.map(function (id) {
      return $('[data-id="' + id + '"]').data('name');
    }).join(', ');

    $('.popover .popover_content h4').text(amenitiesText);
  });
});
