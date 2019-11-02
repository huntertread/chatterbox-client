var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event, callback = ()=>{}) {
    // Stop the browser from submitting the form
    // event.preventDefault();
    // Parse.create(($('#message').val()) => {
    //   //MessagesView.renderMessage({username: 'test', text: $('#message').val(), roomname: 'test'});
    //   console.log()
    //   callback();
    // });
    // console.log('click!');
  },

  // fetch: function(callback = ()=>{}) {
  //   Parse.readAll((data) => {
  //     // examine the response from the server request:
  //     console.log(data);
  //     for (var i = 0; i < data.results.length; i++) {
  //       MessagesView.renderMessage({username: data.results[i].username, text: data.results[i].text, roomname: data.results[i].roomname});
  //       // Messages[i] = {username: data.results[i].username, text: data.results[i].text, roomname: data.results[i].roomname};
  //       // ({roomname: data.result[i].roomname})
  //     }

  //     callback();
  //   });
  // },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }
};