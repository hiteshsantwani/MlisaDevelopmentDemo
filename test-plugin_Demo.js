var conversation;

Front.on('conversation', function (data) {
  console.log('Message', data.message);

  timestamp = data.message.date;

  var date = new Date(timestamp);

  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();

  document.getElementById("MessageId").innerHTML = data.message.id;
  document.getElementById("MessageDate").innerHTML = year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds;
  document.getElementById("SenderRecipients").value = data.message.recipients.map(function(elem){ return elem.handle;}).join(",");
  document.getElementById("Subject").value = data.message.subject;
  document.getElementById("Description").value = data.message.text;

  conversation = data.conversation;
});
