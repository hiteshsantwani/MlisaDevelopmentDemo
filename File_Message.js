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
                'Authorization': ''
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
