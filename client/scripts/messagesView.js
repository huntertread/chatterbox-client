var MessagesView = {

  $chats: $('#chats'),
  $message: $('#message').val(),

  initialize: function () {


  },

  renderMessage: function (msg) {
    MessagesView.$chats.append(MessageView.render(msg));
  }

};