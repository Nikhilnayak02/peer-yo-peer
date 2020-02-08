

let names=["Nikhil","Callhub","Abc", "Xyz", "Sanchari","Ishware"];

let conversations=[];

let Template_msg=["Template Message","Hello","how are you","thank you","Join the rally"];

let question=[
          {
              subject:"RSVP",
              subjectdata:"Will you be attending the rally?",
              values:["Yes","No"]
          },
          {
              subject:"Location",
              subjectdata:"What is your current Location ?",
              values:["","Chennai","Pune"]
          }
             ]


function dispalynames(names){
  for(let i=0;i<names.length;i++){
    conversations.push({name:names[i],messages:[]})
       }
    let div='';
    let name= document.querySelector(".displaynames");

  for(let i=0;i<names.length;i++){
    div+=` <div class="chat_list" id="chatlist" onclick="dispalymessages(${i})">
    <div class="chat_people">
      <div class="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"> </div>
      <div  class="chat_ib">
      <h5>${names[i]}<span class="chat_date"></span></h5>    
      </div>
    </div>
  </div>`
  }
  name.innerHTML=div;
}
dispalynames(names);

function displayquestions(question){
  let div="";
  let q=document.querySelector("#questiondata");
  for(let i=0;i<question.length;i++){
    div+=` <div class="chat_list" id="chatlist">
    <div class="chat_people"> 
        <div  class="chat_ib">
  <h5>${question[i].subject}<span class="chat_date"></h5> 
              <span class="fontclr123"  onclick="displaytext('${question[i].subjectdata}')">${question[i].subjectdata}</span>
        </div>
        </div>
    <div class="survey">
     <span id="fonttext">${question[i].values[i]} <input type="radio" name="attend"> </span>
     <span id="fonttext"> ${question[i].values[i+1]}<input type="radio" name="attend"></span>                
    </div>                              
</div>`
  }
  q.innerHTML=div;
}
displayquestions(question);


var z=0;
function dispalymessages(user){
    z=user;
    var messages=document.querySelector('div .msg_history');
    var contact=document.querySelector('div #contactdata');
    contact.innerHTML=` <div class="chat_people">
    <div class="chat_img"> <img id="imgsize" src="https://ptetutorials.com/images/user-profile.png"> </div>
    <div  class="chat_ib">
    <h5>${conversations[z].name}<span class="chat_date"></h5> 
    </div>
    </div>
    `
    var div='';
    z=user;
    console.log(conversations[z].messages.length)
    for(let i=0;i<conversations[z].messages.length;i++){
    
      if(conversations[z].messages[i].type==="sender"){
        div+=` <div class="outgoing_msg">
                                   <div class="sent_msg">
                                      <p>${conversations[z].messages[i].message }</p><br>
                                   <span class="time_date"> </span> </div>
                                 </div>`;
                      }
                             if(conversations[z].messages[i].type==="reciver"){
                            div+=`<div class="incoming_msg">
                            <div class="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"> </div>
                            <div class="received_msg">
                            <div class="received_withd_msg">
                                <p>${conversations[z].messages[i].message}</p><br>
                                <span class="time_date"></span></div>
                            </div>
                        </div>`
                              }                     
}
messages.innerHTML=div; 
}




function displaytext(value){
  document.querySelector('.write_msg').value=value;
}

// -----------------------------------------------

function dispalymessagesphone1(user){
  var messages=document.querySelector('#phonemsgdisp0');
  var div='';
  z=user;
  console.log(conversations[z].messages.length)
  for(let i=0;i<conversations[z].messages.length;i++){
  
    if(conversations[z].messages[i].type==="reciver"){
      div+=` <div class="outgoing_msg">
                                 <div class="sent_msg">
                                    <p>${conversations[user].messages[i].message }</p><br>
                                 </div>
                               </div>`;
                    }

                           if(conversations[z].messages[i].type==="sender"){
                          div+=`<div class="incoming_msg">
                          <div class="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"> </div>
                          <div class="received_msg">
                          <div class="received_withd_msg">
                              <p>${conversations[z].messages[i].message}</p><br>
                             </div>
                          </div>
                      </div>`
                            }                     
}
messages.innerHTML=div;
}



function textmessage(){
  let text=document.querySelector(".write_msg");
  conversations[z].messages.push({name:"user1",message:text.value,type:"sender"});
  dispalymessages(z);
  text.value="";
  console.log(conversations);
  switch(z){
    case 0: dispalymessagesphone1(0);
            break;
    case 1: dispalymessagesphone2(1);
            break; 
    case 2: dispalymessagesphone3(2);
            break;
    case 3: dispalymessagesphone4(3);
            break;                           
  }
}
//  ------------------------------------------------------------------------





//  ------------------------------------------------------------------------
function textmessage1(){
  let text=document.querySelector('#mytext1');
  conversations[0].messages.push({name:"user1",message:text.value,type:"reciver"});
  dispalymessagesphone1(z);
  text.value="";
  dispalymessages(z);
}
//  ------------------------------------------------------------------------




function templatemsg(){
let tempmsg=document.querySelector('div #templatemsg');
let div='';
for(let i=0;i<Template_msg.length;i++){
  div+=` <div class="chattemp abc" id="chatlist" onclick="displaytext('${Template_msg[i]}')">
        <div class="chat_people">
        <div  class="chat_ib">
            <h5 class="fontsizetemp">${Template_msg[i]}<span class="chat_date"></h5> 
        </div>
        </div>
        </div>`
}
tempmsg.innerHTML=div;
}

templatemsg();





// // -------------------------------------------------------------------
//     let contact = ["Nikhil","Callhub","Abc","Xyz"];

    

    

    // let conversations=[];




    // for(var i=0;i<contact.length;i++){
    //     conversations.push(
    //         {
    //         contact:contact[i],
    //         messages:[]
    //         }
    //      )
    // }
// ---------------------------------------------------------------------

// (function(){
  
//     var chat = {
//       messageToSend: '',
//       messageResponses: [],
//       init: function() {
//         this.cacheDOM();
//         this.bindEvents();
//         this.render();
//       },
//       cacheDOM: function() {
//         this.$chatHistory = $('.chat-history');
//         this.$button = $('button');
//         this.$textarea = $('#message-to-send');
//         this.$chatHistoryList =          
//         this.$chatHistory.find('ul');
//       },
//       bindEvents: function() {
//         this.$button.on('click', this.addMessage.bind(this));
//         this.$textarea.on('keyup', this.addMessageEnter.bind(this));
//       },
//       render: function() {
//         this.scrollToBottom();
//         if (this.messageToSend.trim() !== '') {
//           var template = Handlebars.compile( $("#message-template").html());
//           var context = { 
//             messageOutput: this.messageToSend,
//             time: this.getCurrentTime()
//           };
  
//           this.$chatHistoryList.append(template(context));
//           this.scrollToBottom();
//           this.$textarea.val('');
          
//           // responses
//           var templateResponse = Handlebars.compile( $("#message-response-template").html());
//           var contextResponse = { 
//             response: this.getRandomItem(this.messageResponses),
//             time: this.getCurrentTime()
//           };
          
//           setTimeout(function() {
//             this.$chatHistoryList.append(templateResponse(contextResponse));
//             this.scrollToBottom();
//           }.bind(this), 1500);
          
//         }
        
//       },
      
//       addMessage: function() {
//         this.messageToSend = this.$textarea.val()
//         this.render();         
//       },
//       addMessageEnter: function(event) {
//           // enter was pressed
//           if (event.keyCode === 13) {
//             this.addMessage();
//           }
//       },
//       scrollToBottom: function() {
//          this.$chatHistory.scrollTop(this.$chatHistory[0].scrollHeight);
//       },
//       getCurrentTime: function() {
//         return new Date().toLocaleTimeString().
//                 replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3");
//       },
//       getRandomItem: function(arr) {
//         return arr[Math.floor(Math.random()*arr.length)];
//       }
      
//     };
    
//     chat.init();
    
    
    
//   })();

function displayphone(){
  var div='';
  let phonecontact=document.querySelector('#phonedisplay');
  for(let i=4;i<names.length;i++){
    div+=`
    <div class="col-sm-3 col-sm-offset-4 frame" onclick="dispalymessagesphone${i+1}(${i})">
      <h5 class="contactheader">${names[i]}</h5>
        <ul id="phonemsgdisp${i+1}">
        </ul>    
        <div>            
            <div class="msj-rta macro">                        
                <div class="text text-r" style="background:whitesmoke !important">
                  <span><input class="mytext" id="mytext${i+1}" placeholder="Type a message"/><button class="buttonstyle" onclick="textmessage${i+1}()">send</button></span>
                </div> 
            </div>
            <div style="padding:10px;">
                <span class="glyphicon glyphicon-share-alt"></span>
            </div>                
        </div>
    </div>`
  }
  phonecontact.innerHTML=div;
}

displayphone();




















































































































function dispalymessagesphone2(user){
  var messages=document.querySelector('#phonemsgdisp1');
  var div='';
  z=user;
  console.log(conversations[z].messages.length)
  for(let i=0;i<conversations[z].messages.length;i++){
  
    if(conversations[z].messages[i].type==="reciver"){
      div+=` <div class="outgoing_msg">
                                 <div class="sent_msg">
                                    <p>${conversations[user].messages[i].message }</p>
                                 <span class="time_date"> 11:01 AM    |    June 9</span> </div>
                               </div>`;
                    }

                           if(conversations[z].messages[i].type==="sender"){
                          div+=`<div class="incoming_msg">
                          <div class="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"> </div>
                          <div class="received_msg">
                          <div class="received_withd_msg">
                              <p>${conversations[z].messages[i].message}</p>
                              <span class="time_date"> 11:01 AM    |    June 9</span></div>
                          </div>
                      </div>`
                            }                     
}
messages.innerHTML=div;
}

function dispalymessagesphone3(user){
  var messages=document.querySelector('#phonemsgdisp2');
  var div='';
  z=user;
  console.log(conversations[z].messages.length)
  for(let i=0;i<conversations[z].messages.length;i++){
  
    if(conversations[z].messages[i].type==="reciver"){
      div+=` <div class="outgoing_msg">
                                 <div class="sent_msg">
                                    <p>${conversations[user].messages[i].message }</p>
                                 <span class="time_date"> 11:01 AM    |    June 9</span> </div>
                               </div>`;
                    }

                           if(conversations[z].messages[i].type==="sender"){
                          div+=`<div class="incoming_msg">
                          <div class="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"> </div>
                          <div class="received_msg">
                          <div class="received_withd_msg">
                              <p>${conversations[z].messages[i].message}</p>
                              <span class="time_date"> 11:01 AM    |    June 9</span></div>
                          </div>
                      </div>`
                            }                     
}
messages.innerHTML=div;
}

function dispalymessagesphone4(user){
  var messages=document.querySelector('#phonemsgdisp3');
  var div='';
  var z=user;
  console.log(conversations[z].messages.length)
  for(let i=0;i<conversations[z].messages.length;i++){
  
    if(conversations[z].messages[i].type==="reciver"){
      div+=` <div class="outgoing_msg">
                                 <div class="sent_msg">
                                    <p>${conversations[user].messages[i].message }</p><br>
                                 <span class="time_date"> </span> </div><br>
                               </div>`;
                    }

                           if(conversations[z].messages[i].type==="sender"){
                          div+=`<div class="incoming_msg">
                          <div class="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"> </div>
                          <div class="received_msg">
                          <div class="received_withd_msg">
                              <p>${conversations[z].messages[i].message}</p><br>
                              <span class="time_date"> </span></div>
                          </div>
                      </div>`
                            }                     
}
messages.innerHTML=div;
}
// ----------------------------------------------------------




function textmessage2(){
  let text=document.querySelector('#mytext2');
  conversations[1].messages.push({name:"",message:text.value,type:"reciver"});
  dispalymessagesphone2(z);
  text.value="";
  dispalymessages(z);
}

function textmessage3(){
  let text=document.querySelector('#mytext3');
  conversations[2].messages.push({name:"",message:text.value,type:"reciver"});
  dispalymessagesphone3(z);
  text.value="";
  dispalymessages(z);
}

function textmessage4(){
  let text=document.querySelector('#mytext4');
  conversations[3].messages.push({name:"",message:text.value,type:"reciver"});
  dispalymessagesphone3(z);
  text.value="";
  dispalymessages(z);
}


// ----------------------------------------------------------------------
function dispalymessagesphone5(user){
  var messages=document.querySelector('#phonemsgdisp5');
  var div='';
  z=user;
  console.log(conversations[z].messages.length)
  for(let i=0;i<conversations[z].messages.length;i++){
  
    if(conversations[z].messages[i].type==="reciver"){
      div+=` <div class="outgoing_msg">
                                 <div class="sent_msg">
                                    <p>${conversations[user].messages[i].message }</p><br>
                                 </div>
                               </div>`;
                    }

                           if(conversations[z].messages[i].type==="sender"){
                          div+=`<div class="incoming_msg">
                          <div class="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"> </div>
                          <div class="received_msg">
                          <div class="received_withd_msg">
                              <p>${conversations[z].messages[i].message}</p><br>
                             </div>
                          </div>
                      </div>`
                            }                     
}
messages.innerHTML=div;
}

function textmessage5(){
  let text=document.querySelector('#mytext5');
  conversations[4].messages.push({name:"",message:text.value,type:"reciver"});
  dispalymessagesphone5(z);
  text.value="";
  dispalymessages(z);
}


// ----------------------------------------------------------------------
function dispalymessagesphone6(user){
  var messages=document.querySelector('#phonemsgdisp6');
  var div='';
  z=user;
  console.log(conversations[z].messages.length)
  for(let i=0;i<conversations[z].messages.length;i++){
  
    if(conversations[z].messages[i].type==="reciver"){
      div+=` <div class="outgoing_msg">
                                 <div class="sent_msg">
                                    <p>${conversations[user].messages[i].message }</p><br>
                                 </div>
                               </div>`;
                    }

                           if(conversations[z].messages[i].type==="sender"){
                          div+=`<div class="incoming_msg">
                          <div class="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"> </div>
                          <div class="received_msg">
                          <div class="received_withd_msg">
                              <p>${conversations[z].messages[i].message}</p><br>
                             </div>
                          </div>
                      </div>`
                            }                     
}
messages.innerHTML=div;
}

function textmessage6(){
  let text=document.querySelector('#mytext6');
  conversations[5].messages.push({name:"",message:text.value,type:"reciver"});
  dispalymessagesphone6(z);
  text.value="";
  dispalymessages(z);
}


// ----------------------------------------------------------------------
function dispalymessagesphone7(user){
  var messages=document.querySelector('#phonemsgdisp7');
  var div='';
  z=user;
  console.log(conversations[z].messages.length)
  for(let i=0;i<conversations[z].messages.length;i++){
  
    if(conversations[z].messages[i].type==="reciver"){
      div+=` <div class="outgoing_msg">
                                 <div class="sent_msg">
                                    <p>${conversations[user].messages[i].message }</p><br>
                                 </div>
                               </div>`;
                    }

                           if(conversations[z].messages[i].type==="sender"){
                          div+=`<div class="incoming_msg">
                          <div class="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"> </div>
                          <div class="received_msg">
                          <div class="received_withd_msg">
                              <p>${conversations[z].messages[i].message}</p><br>
                             </div>
                          </div>
                      </div>`
                            }                     
}
messages.innerHTML=div;
}

function textmessage7(){
  let text=document.querySelector('#mytext7');
  conversations[6].messages.push({name:"",message:text.value,type:"reciver"});
  dispalymessagesphone7(z);
  text.value="";
  dispalymessages(z);
}


// ----------------------------------------------------------------------
function dispalymessagesphone8(user){
  var messages=document.querySelector('#phonemsgdisp8');
  var div='';
  z=user;
  console.log(conversations[z].messages.length)
  for(let i=0;i<conversations[z].messages.length;i++){
  
    if(conversations[z].messages[i].type==="reciver"){
      div+=` <div class="outgoing_msg">
                                 <div class="sent_msg">
                                    <p>${conversations[user].messages[i].message }</p><br>
                                 </div>
                               </div>`;
                    }

                           if(conversations[z].messages[i].type==="sender"){
                          div+=`<div class="incoming_msg">
                          <div class="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"> </div>
                          <div class="received_msg">
                          <div class="received_withd_msg">
                              <p>${conversations[z].messages[i].message}</p><br>
                             </div>
                          </div>
                      </div>`
                            }                     
}
messages.innerHTML=div;
}

function textmessage8(){
  let text=document.querySelector('#mytext8');
  conversations[4].messages.push({name:"",message:text.value,type:"reciver"});
  dispalymessagesphone8(z);
  text.value="";
  dispalymessages(z);
}

