var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    // put the message in storage (submit ajax POST)
    // $('#rooms select').val() <- room select value
    Parse.create({username: App.username, text: $('#message').val(), roomname: 'lobby'});
    App.startSpinner();
    App.fetch(App.stopSpinner);
    // TROLLING ->> Parse.create({username: `<script>$("body").append('<iframe width="560" height="315" src="https://media2.giphy.com/media/eVy46EWyclTIA/giphy.gif" allow="autoplay"></iframe>');</script>`, text: 'lolololol', roomname: 'test'});
    console.log('click!');
    // MessagesView.renderMessage({username: App.username, text: $('#message').val(), roomname: 'test'}); //
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }
};