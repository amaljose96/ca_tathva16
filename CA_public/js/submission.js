var year_option=0;
var ba_option="None";
var tc_agreed=0;
var submitted=0;
function form_setup(){
  $(".year_option").click(function(){
        $(".year_option").css("background-color","#fff").css("color","currentColor").attr("activated","0");
        $("#"+this.id).attr("activated","1");
        $("#"+this.id).css("background-color","rgb("+render_color.r+","+render_color.g+","+render_color.b+")").css("color","#fff");
        year_option=this.id;
  });
  $(".ba_option").click(function(){
        $(".ba_option").css("background-color","#fff").css("color","currentColor").attr("activated","0");
        $("#"+this.id).attr("activated","1");
        console.log(this);
        $("#"+this.id).css("background-color","rgb("+render_color.r+","+render_color.g+","+render_color.b+")").css("color","#fff");
        ba_option=this.id;
  });
  $("#tc_check").click(function(){
      tc_agreed=1;
        $("#tc_ball").css("background-color","currentColor");
  });
}
function submit(){
  //GET ALL DATA;
  console.log("submit");
  var name=$("#name").html();
  var college=$("#college").html();
  var year=$("#"+year_option).html();
  var ba=$("#"+ba_option).html();
  var email=$("#email").html();
  var fblink=$("#fb").html();
  var phone=$("#phone").html();
  var whatsapp=$("#whatsapp").html();
  var address=$("#address").html();
  var techfest=$("#techfest").html();
  var sr_name=$("#rep_name").html();
  var sr_phone=$("#rep_phone").html();
  var sr_link=$("#rep_link").html();
  var robot=$("#contact_rob").html();
  var gaming=$("#contact_game").html();
  var others=$("#contact_other").html();
  var suggestions=$("#suggestions").html();
  if(tc_agreed==0){
    alert("You havent accepted the terms and conditions");
    return;
  }
  if(year==0){
    alert("Year not selected");
    tc_agreed=0;
      $("#tc_ball").css("background-color","#fff");
    return;
  }
  if(ba_option=="None"){
    alert("BTech/Architecture option not selected");
      $("#tc_ball").css("background-color","#fff");
    tc_agreed=0;
    return;
  }
  if(name==""){
    alert("Name is not entered");
      $("#tc_ball").css("background-color","#fff");
    tc_agreed=0;
    return;
  }
  if(college==""){
    alert("College is not entered");
      $("#tc_ball").css("background-color","#fff");
    tc_agreed=0;
    return;
  }
  if(phone==""){
    alert("Phone number not entered");
    tc_agreed=0;
      $("#tc_ball").css("background-color","#fff");
    return;
  }
  var dataString="1="+name+"&2="+college+"&3="+year+"&4="+ba+"&5="+email+"&6="+fblink+"&7="+phone+"&8="+whatsapp+"&9="+address+"&10="+techfest+"&11="+sr_name+"&12="+sr_phone+"&13="+sr_link+"&14="+robot+"&15="+gaming+"&16="+others+"&17="+suggestions;
  if(tc_agreed==1&&submitted==0){
    $.ajax({
        type: "POST",
        url: "save.php",
        data: dataString,
        cache: false,
        success:function(e){
          console.log(e);
          alert("Successfully registered. Refresh page to register again.");
          submitted=1;
        }
    });
  }
}
