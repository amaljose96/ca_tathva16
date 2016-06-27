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
      if($("#about_block").height()<screen_height){
        var to_add=(screen_height-$("#about_block").height())/2;
        $("#about_block").css("padding-top",to_add);
        $("#about_block").css("padding-bottom",to_add);
      }
      else{
        $("#about_block").css("padding-top","100px");
        $("#about_block").css("padding-bottom","100px");
      }
      if($("#benefits_block").height()<screen_height-100){
        var to_add=(screen_height-$("#benefits_block").height())/2;
        $("#benefits_block").css("padding-top",to_add);
        $("#benefits_block").css("padding-bottom",to_add);
      }
      else{
        $("#benefits_block").css("padding-top","100px");
        $("#benefits_block").css("padding-bottom","100px");
      }
      if($("#responsibilities_block").height()<screen_height){
        var to_add=(screen_height-$("#responsibilities_block").height())/2;
        $("#responsibilities_block").css("padding-top",to_add);
        $("#responsibilities_block").css("padding-bottom",to_add);
      }
      else{
        $("#responsibilities_block").css("padding-top","100px");
        $("#responsibilities_block").css("padding-bottom","100px");
      }
      if($("#tc").height()<screen_height){
        var to_add=(screen_height-$("#tc").height())/2;
        $("#tc").css("padding-top",to_add);
        $("#tc").css("padding-bottom",to_add);
      }
      else{
        $("#tc").css("padding-top","100px");
        $("#tc").css("padding-bottom","100px");
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
    $('#tc').corner("dog cc:#c82 50px");
    $("#tathva_title").corner();
    $("#tathva_title").click(function(){window.location.href="http://www.tathva.org";})
      $("#logo").load(function(){
        logo_detail={width:$("#logo").width(),height:$("#logo").height()};
      })
}
var prev_block;
var front_page=1;
function scroll_control(){
  YFactor=scrollY;
  var percent=(YFactor/document.height);
  var render;
  if(YFactor>$("#front_page").height()){
    front_page=0;
  }
  else{
    front_page=1;
  }
  var startcolor;
  var endcolor;
  //BLOCK DIVISION
  var block=0;
  var cutoff1=-10;
  var cutoff2=$("#cutoff2").position().top;
  var cutoff3=$("#cutoff3").position().top;
  var cutoff4=$("#cutoff4").position().top;
  var cutoff5=$("#cutoff5").position().top;
  if(front_page!=1){
    cutoff1=$("#front_page").height()-10;
    cutoff2=$("#front_page").height()+$("#join_form").height()*2/5;
    cutoff3=$("#front_page").height()+$("#join_form").height()*3/5;
    cutoff4=$("#front_page").height()+$("#join_form").height()*4/5;
    cutoff5=$("#front_page").height()+$("#join_form").height();
  }
  if(YFactor>cutoff4){
    block=4;
    percent=(YFactor-cutoff4)/(cutoff5-cutoff4);
    startcolor={r:255,g:200,b:0};
    endcolor={r:210,g:30,b:0};
  }
  else if(YFactor>cutoff3){
    block=3;
    percent=(YFactor-cutoff3)/(cutoff4-cutoff3);
    startcolor={r:0,g:0,b:255};
    endcolor={r:255,g:200,b:80};
  }
  else if(YFactor>cutoff2){
    block=2;
    percent=(YFactor-cutoff2)/(cutoff3-cutoff2);
    startcolor={r:0,g:180,b:0};
    endcolor={r:0,g:0,b:255};
  }
  else if(YFactor>cutoff1){
    block=1;
    percent=(YFactor-cutoff1)/(cutoff2-cutoff1);
    startcolor={r:210,g:30,b:0};
    endcolor={r:0,g:180,b:0};
  }
  else{
    percent=0;
  }
  //BLOCK POSITION DETERMINATION
  //BLOCK COLOR SELECTION
  //RENDER DETERMINATION
  var difference={r:endcolor.r-startcolor.r,g:endcolor.g-startcolor.g,b:endcolor.b-startcolor.b};
  render={r:Math.floor(startcolor.r+(difference.r*percent)),g:Math.floor(startcolor.g+(difference.g*percent)),b:Math.floor(startcolor.b+(difference.b*percent))};
  $('body').css("background-color","rgb("+render.r+","+render.g+","+render.b+")");
        $('body').css("color","rgb("+render.r+","+render.g+","+render.b+")");
        $(".menu_link_bars").attr("fill","rgb("+render.r+","+render.g+","+render.b+")");
        $("#"+ba_option).css("background-color","rgb("+render.r+","+render.g+","+render.b+")");
        $("#"+year_option).css("background-color","rgb("+render.r+","+render.g+","+render.b+")");
        if(tc_agreed){
          $("#tc_ball").css("background-color","rgb("+render.r+","+render.g+","+render.b+")");
        }
        $("#tathva_sidebar").css("filter","hue-rotate("+(percent*360)+"deg)");
        $("hr").css("background-image","linear-gradient(to right, rgba(255,255,255, 0), rgba("+render.r+", "+render.g+", "+render.b+", 1), rgba(255,255,255, 0))");
  if(YFactor<cutoff2&&front_page==1){
    $("#top_bar").fadeOut();
  }
  else{
    $("#top_bar").fadeIn();
  }
  render_color=render;
}
function close_menu(){
  if(sidebar_in==1){
    $("#sidebar").toggleClass("sidebar_in");
    $("#dimmer").fadeOut();
    sidebar_in=0;
  }
}
function show_menu(){
  $("#sidebar").toggleClass("sidebar_in");
  $("#dimmer").fadeIn();

  sidebar_in=1;
  $("#dimmer").click(function(){
      close_menu();
  });
}
function topbar_setup(){
  $("#home").click(function(){
    window.scrollTo(0,0);
  });
  $("#about").click(function(){
      scrollTo(0,$("#cutoff2").position().top);
  });
  $("#benefits").click(function(){
      scrollTo(0,$("#cutoff3").position().top);
  });
  $("#responsibilities").click(function(){
      scrollTo(0,$("#cutoff4").position().top);
  });
  $("#form").click(function(){
      scrollTo(0,$("#cutoff5").position().top);
  });
  scroll_control();
}
function ffx(){
  return (/firefox/i).test(window.navigator.userAgent);
}

var starField;
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
    scrollTo(0,0);
    topbar_setup();
    form_setup();
  //    setInterval(function(){scroll_control();},1000/30);


    $("#close_tc").click(function(){
        $("#tc").fadeOut();
    });
    $("#terms").click(function(){
        $("#tc").fadeIn();
        $("#tc").left(0);
    });
    starField = new StarField('background_container').render(50, 6);

});
