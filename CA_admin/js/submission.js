
function form_setup(){
  $("#password").keydown(function(e){
    if(e.which==13){
      var dataString="KEY="+$("#password").html();
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
        e.preventDefault();
    }
  });
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
