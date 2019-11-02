var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  $selectVal: $('#rooms select').val(),

  initialize: function() {
    // jquery event that initializes the RoomsView.render method (via the buttons above ^)
    // on page load -> should render ALL messages <- do not need to do anything, this is default functionality
    // if a room has been selected in the selector
    // if ()
    // run the render function on the selected room
    RoomsView.$button.on('click', function() {
      // run the render function here
      console.log('rooms was selected');
      RoomsView.render(room);
    });
  },

  render: function(room) {
    // need to filter the chat messages shown on screen by the rooms property
    // append only messages with selected room to the body of the HTML
    $select.append(Rooms.render(room));
  }

};
