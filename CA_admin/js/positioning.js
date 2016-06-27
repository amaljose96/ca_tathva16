var logo_detail;
var mobile_mode;
var render_color;
function positioner(){
      var screen_height=screen.height;
      if($("#front_block").height()<screen_height){
        var to_add=(screen_height-$("#front_block").height())/2;
        $("#front_block").css("padding-top",to_add);
        $("#front_block").css("padding-bottom",to_add);
        $("#logo").css("top",to_add);
      }
      $("#contacts_space").height($("#names").height()+100);
      if($("#contacts").height()<screen_height/3){
        var to_add=((screen_height/3)-$("#contacts").height())/2;
        $("#contacts").css("padding-top",to_add);
        $("#contacts").css("padding-bottom",to_add);
      }
      else{
        $("#contacts").css("padding-top","100px");
        $("#contacts").css("padding-bottom","100px");
      }
    $("#tathva_title").corner();
    $("#tathva_title").click(function(){window.location.href="http://www.tathva.org";})
      $("#logo").load(function(){
        logo_detail={width:$("#logo").width(),height:$("#logo").height()};
      })
}
function load_panel(id){
  $("#tc").fadeIn(function(){
    load_data(id);
  });
}

$('document').ready(function(){
  //MOBILE MODE CHECKER
  mobile_mode=1;
  if(navigator.userAgent.search("Mobile")==-1){
    mobile_mode=0;
    //alert("DESKTOP");
  }
  else{
  //  alert("MOBILE");
  }
    positioner();
    $('#tc').corner("dog cc:#0ff 50px");
    scrollTo(0,0);
    form_setup();
    starField = new StarField('background_container').render(50, 6);

});
