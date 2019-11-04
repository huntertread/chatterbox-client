var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms_select'),
  $selectVal: $('#rooms_select').val(),
  roomSelected: false,

  initialize: function() {
    // jquery event that initializes the RoomsView.render method (via the buttons above ^)
    // on page load -> should render ALL rooms/messages <- do not need to do anything, this is default functionality
    for (var i = 0; i < Rooms.uniqueRooms.length; i++) {
      RoomsView.renderRooms({roomname: Rooms.uniqueRooms[i]});
    }
    // if a room has been selected in the selector
    // run the render function on the selected room
    RoomsView.$select.on('change', function() {
      // run the render function here
      console.log('room was changed');
      // RoomsView.renderRooms(room);
    });

    RoomsView.$button.on('click', function() {
      console.log('go to room was selected');
      RoomsView.roomSelected = true;
      $('#chats').html('');
      App.startSpinner();
      App.fetch(App.stopSpinner);
    });
  },

  renderRooms: function(room) {
    // need to filter the chat messages shown on screen by the rooms property
    // append only messages with selected room to the body of the HTML
    RoomsView.$select.append(Rooms.render(room));
  }

};
