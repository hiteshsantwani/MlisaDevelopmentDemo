function fileMessage() {
  
    var ID = $('#pfId')[0].innerText;

    var url = new URL("http://localhost:55530/api/mlisa/pf_FixtureMessagesFront");
    $("#FileMessageInput").toggle();
        $.ajax({

            url: url,    //Your api url
            type: 'POST',   //type is any HTTP method
            mode: 'cors', // no-cors, cors, *same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit,

            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiaWN0LnVzQG1jcXVpbGxpbmcuY29tIiwic3ViIjoiaWN0LnVzQG1jcXVpbGxpbmcuY29tIiwiYXVkIjoiQW55IiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiQWRtaW5pc3RyYXRvciIsIm5iZiI6MTU3MDAyNTUzOSwiZXhwIjoxNTcwMTExOTM5LCJpc3MiOiJodHRwczovL2F0bGlzLm1jcXVsbGluZy5jb20ifQ.kv41FqX_YNFxLKa2FQGxbogQQMcU1tIotJbpE5PWcio'
            },
            
            data: JSON.stringify({ 

                ID: uuidv4(),
                pfFixtureID: ID,
                MessageDate: document.getElementById("MessageDate").innerText, // get it from the message i.e email datas
                SystemMsgReference: document.getElementById("MessageId").innerText, //get it from the message i.e email datas
                DisplayMsgReference: 'US12669782', // not sure
                CommsSystemCode: 'F',
                DisplayCompany: 'OpsUS',
                Subject:  document.getElementById("Subject").value, // get this from the plugin
                Description:  document.getElementById("Description").value, // get this from the plugin
                DisplayStatus:  document.getElementById("Status").value, // get this from the plugin
                UpdateUserCode: 'AB',
                UpdateDate: '2019-04-10 08:39:39.007', // current date
                RecipientsDisplay: document.getElementById("SenderRecipients").value,
                ExternalAttachmentID: null,
                pfFixtureFolderID: null

             }),
             success: function(e){
              
             },
            error: function(e) {
                console.log(e);
              },
            dataType: "json",
            contentType: "application/json"

        });
        PopulateData("Messages", document.getElementById("pfId").innerHTML)
}

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
  
  console.log(uuidv4());


  function ShowHideDetails() {

    $("#FileMessageInput").toggle();

  }