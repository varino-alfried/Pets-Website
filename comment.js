function render(data){
    var html = "<div class='commentBox'>                                                                                                                               <div class='leftPanelImg'><img src='images5/male.jpg' /></div>                                                                                       <div class='rightPanel'><span>"+data.name+"</span>                                                                                                   <div class='date'>"+data.date+"</div>                                                                                                               <p>"+data.body+"</p></div>                                                                                                                           <div class='clear'></div>                                                                                                                         </div>";
    $('#container').append(html);
}

$(document).ready(function(){

 var comment = [
    {"name": "Varino Alfried", "date": "2000-10-19", "body":"This is my first comment &amp; we are happy for your comments"}
    ];

    for(var i=0;i<comment.length;i++){
        render(comment[i]);
    }    
 $('#addComment').click(function(){
     var addObj = {
             "name":$('#name').val(),
             "date":$('#date').val(),
             "body":$('#bodyText').val()
     };
     
     comment.push(addObj);
     
     render(addObj);
     
     $('#name').val('');
     $('#date').val('dd/mm/yyyy');
     $('#bodyText').val('');
   });   
     
});



