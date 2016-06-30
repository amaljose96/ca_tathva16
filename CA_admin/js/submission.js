var unlocked=0;
var pass;
function form_setup(){
  $("#password").keydown(function(e){
    if(e.which==13){
      unlocked=1;
      pass=$("#password").html();
      refresher();
      setInterval(function(){refresher();},10000);
      e.preventDefault();
    }
  });
}
function refresher(){
  if(unlocked==1){
    var dataString="KEY="+pass;
    console.log("LOADING ALL");
        $.ajax({
            type: "POST",
            url: "retrive_all.php",
            data: dataString,
            cache: false,
            success:function(e){
              console.log(e);
              $("#contacts_list").html(e);
            }
        });
  }
}
function load_data(id){
  var dataString="ID="+id;
    $.ajax({
        type: "POST",
        url: "retrieve_one.php",
        data: dataString,
        cache: false,
        success:function(e){
          console.log(e);
          $("#tc_contents").html(e);
          scrollTo(0,$("#tc").position().top);
        }
    });
}
