function autoReply() {
  var threads = GmailApp.getInboxThreads();
  var body = “Message Here”;
  var alias = GmailApp.getAliases();
  
  for (var i = 0; i < threads.length; i++) {
    // Ignore email conversations
    if (threads[i].getMessageCount() == 1) {
      var msg = threads[i].getMessages()[0];
      threads[i].reply(body,{cc:msg.getFrom(),from:alias[0]})
    }
  }
}