var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  pageLoadNum: 0,

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
    // setTimeout(RoomsView.initialize(), 3000);
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);
      // if first page load -> render all messages
      if (App['pageLoadNum'] === 0) {
        for (var i = 0; i < data.results.length; i++) {
          MessagesView.renderMessage({username: data.results[i].username, text: data.results[i].text, roomname: data.results[i].roomname});
          // push unique room names in to a separate array (located in rooms.js)
          if (Rooms.uniqueRooms.includes(data.results[i].roomname) === false) {
            Rooms.uniqueRooms.push(data.results[i].roomname);
          }
          App.pageLoadNum++;
        }
      // if a room has been selected
      } else if (RoomsView.roomSelected === true) {
        for (var i = 0; i < data.results.length; i++) {
          if (data.results[i].roomname === ($('#rooms_select').val())) {
            MessagesView.renderMessage({username: data.results[i].username, text: data.results[i].text, roomname: $('#rooms_select').val()});
          }
        }
      }
      RoomsView.initialize();
      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
