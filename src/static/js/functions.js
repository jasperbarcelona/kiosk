var timer = null

function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
  }

function post(){
    if (timer != null) {
        clearTimeout(timer);
    }
    
    $('.info-container').hide();
    $('.logo-container').animate({"left":"0"},300);
    var number = $("#number").val()

    $.post('/login',{number:number},
    function(data){
        $("#number").val('');
        $('.info-container').html(data);
        $('.logo-container').animate({"left":"-70%"},300);
        $('.info-container').fadeIn(500);
        
        timer = setTimeout(function() {
          $('.logo-container').animate({"left":"-100"},300);
          $('.info-container').hide();
      }, 10000);
    });
}

$('form').submit(function(e) {
    e.preventDefault();
});

function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();

if (h >= 12){
	ap = "PM"
}else{
	ap = "AM"
}

if (h > 12) {
        h -= 12;
    } else if (h === 0) {
        h = 12;
    }


// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('time').innerHTML=h+":"+m+" "+ap;
t=setTimeout('startTime()',500);
}
function checkTime(i)
{
if (i<10)
{
i="0" + i;
}
return i;
}

function retry(){
   setTimeout(function(){
      $.post('/sync/retry',
      function(data){
        retry()
      });
  }, 900000);
};

function status_report(){
   setTimeout(function(){
      $.post('/report/status/send',
      function(data){
        status_report();
      });
  }, 1800000);
};
