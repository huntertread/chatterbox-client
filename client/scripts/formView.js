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
    Parse.create({username: App.username, text: $('#message').val(), roomname: $('#rooms_select').val()});
    App.startSpinner();
    App.fetch(App.stopSpinner);
    // TROLLING ->> Parse.create({username: `<script>$("body").append('<iframe width="560" height="315" src="https://media.tenor.com/images/329bb31ebcd189af89fc649b1753dacb/tenor.gif" allow="autoplay"></iframe>');</script>`, text: 'lolololol', roomname: 'test'});
    console.log('click!');
    // MessagesView.renderMessage({username: App.username, text: $('#message').val(), roomname: 'test'}); //
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }
};