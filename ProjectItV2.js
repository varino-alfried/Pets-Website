var cap = document.getElementById("captionZeroZero");
cap.innerHTML = "Looking For Healthy Snacks For Your Pet?!<br>At Our Shop You Will Find Everything You Need With The Cheapest Prices & 100% guarentee <br><br>"+
                            "What Food Sections Do We Have At Our Shop?!<br>We Have Food For Dogs, Cats, Birds And Fishes<br><br>"+
                            "How Much Does Shipping The Food Cost?!<br>We Are Sorry , Sir . But Delivering Food Service Is Broken Right Now<br><br>"+
                            "Is Our Prdoucts Safe For Your Pets?!<br>Ofcouse Because We Make All Our Food With Natural Materials"+
                            " That Cause No Harm To Your Pet , But Very Healthy.<br><br>"
                            +"NOTE:<br>If You Didn't Like The Food Or There Was Something wrong With It(like Being over Expire Date),"+
                            " You Can Call The Help Center And Get Your Money Back, Sir";



var totalcost=0;
var myInputOneZero =  document.getElementById("inputZeroOne"),
myInputTwoZero =  document.getElementById("inputZeroTwo"),
myInputThreeZero =  document.getElementById("inputZeroThree"),
myInputFourZero =  document.getElementById("inputZeroFour"),
myInputFiveZero =  document.getElementById("inputZeroFive"),
myInputSixZero =  document.getElementById("inputZeroSix"),
myInputSevenZero =  document.getElementById("inputZeroSeven"),
myInputEightZero =  document.getElementById("inputZeroEight"),
myInputNineZero =  document.getElementById("inputZeroNine"),
myDiv = document.getElementById("div");
myDiv.innerHTML="The Cost Of The Food , You Have Added To The Cart , Cost "+totalcost+"<br>Please, Choose How you Going To Pay:"; 
myInputOneZero.onclick = function(){
  "use strict";
  totalcost=totalcost +35;
  myDiv.innerHTML="The Cost Of The Food , You Have Added To The Cart , Cost "+totalcost+"<br>Please, Choose How you Going To Pay:"
 
};
myInputTwoZero.onclick = function(){
  "use strict";
  totalcost=totalcost + 30;
  myDiv.innerHTML="The Cost Of The Food , You Have Added To The Cart , Cost "+totalcost+"<br>Please, Choose How you Going To Pay:"
 
};

myInputThreeZero.onclick = function(){
  "use strict";
  totalcost=totalcost + 15;
  myDiv.innerHTML="The Cost Of The Food , You Have Added To The Cart , Cost "+totalcost+"<br>Please, Choose How you Going To Pay:"
 
};
myInputFourZero.onclick = function(){
  "use strict";
  totalcost=totalcost + 20;
  myDiv.innerHTML="The Cost Of The Food , You Have Added To The Cart , Cost "+totalcost+"<br>Please, Choose How you Going To Pay:"
  
};

myInputFiveZero.onclick = function(){
  "use strict";
  totalcost=totalcost + 30;
  myDiv.innerHTML="The Cost Of The Food , You Have Added To The Cart , Cost "+totalcost+"<br>Please, Choose How you Going To Pay:"
 
};
myInputSixZero.onclick = function(){
  "use strict";
  totalcost=totalcost + 45;
  myDiv.innerHTML="The Cost Of The Food , You Have Added To The Cart , Cost "+totalcost+"<br>Please, Choose How you Going To Pay:"
 
};
myInputSevenZero.onclick = function(){
  "use strict";
  totalcost=totalcost + 45;
  myDiv.innerHTML="The Cost Of The Food , You Have Added To The Cart , Cost "+totalcost+"<br>Please, Choose How you Going To Pay:"
 
};
myInputEightZero.onclick = function(){
  "use strict";
  totalcost=totalcost + 25;
  myDiv.innerHTML="The Cost Of The Food , You Have Added To The Cart , Cost "+totalcost+"<br>Please, Choose How you Going To Pay:"
 
};
myInputNineZero.onclick = function(){
  "use strict";
  totalcost=totalcost + 45;
  myDiv.innerHTML="The Cost Of The Food , You Have Added To The Cart , Cost "+totalcost+"<br>Please, Choose How you Going To Pay:"
 
};

var x=1;
    function myFunction()
{   
  x=x*(-1);
  if(x<0){
document.getElementById("body").style.backgroundImage="none";

document.getElementById("body").style.backgroundColor="black";

document.getElementById("head").style.backgroundColor="black";
document.getElementById("flip-box01").style.borderColor = "white";
document.getElementById("flip-box02").style.borderColor = "white";
document.getElementById("flip-box03").style.borderColor = "white";
document.getElementById("flip-box04").style.borderColor = "white";
document.getElementById("flip-box05").style.borderColor = "white";
document.getElementById("flip-box06").style.borderColor = "white";
document.getElementById("flip-box07").style.borderColor = "white";
document.getElementById("flip-box08").style.borderColor = "white";
document.getElementById("flip-box09").style.borderColor = "white";
document.getElementById("sss").style.color = "white";

document.getElementById("flip-box-back01").style.backgroundColor = "white";
document.getElementById("flip-box-back02").style.backgroundColor = "white";
document.getElementById("flip-box-back03").style.backgroundColor = "white";
document.getElementById("flip-box-back04").style.backgroundColor = "white";
document.getElementById("flip-box-back05").style.backgroundColor = "white";
document.getElementById("flip-box-back06").style.backgroundColor = "white";
document.getElementById("flip-box-back07").style.backgroundColor = "white";
document.getElementById("flip-box-back08").style.backgroundColor = "white";
document.getElementById("flip-box-back09").style.backgroundColor = "white";

  }
  else{
    document.getElementById("body").style.backgroundColor="none";
    document.getElementById("body").style.backgroundImage = "url('../IMAGES4/background02.jpg')";
    document.getElementById("head").style.backgroundColor="khaki";
    document.getElementById("flip-box01").style.borderColor = "black";
    document.getElementById("flip-box02").style.borderColor = "black";
    document.getElementById("flip-box03").style.borderColor = "black";
    document.getElementById("flip-box04").style.borderColor = "black";
    document.getElementById("flip-box05").style.borderColor = "black";
    document.getElementById("flip-box06").style.borderColor = "black";
    document.getElementById("flip-box07").style.borderColor = "black";
    document.getElementById("flip-box08").style.borderColor = "black";
    document.getElementById("flip-box09").style.borderColor = "black";

document.getElementById("flip-box-back01").style.backgroundColor = "transparent";
document.getElementById("flip-box-back02").style.backgroundColor = "transparent";
document.getElementById("flip-box-back03").style.backgroundColor = "transparent";
document.getElementById("flip-box-back04").style.backgroundColor = "transparent";
document.getElementById("flip-box-back05").style.backgroundColor = "transparent";
document.getElementById("flip-box-back06").style.backgroundColor = "transparent";
document.getElementById("flip-box-back07").style.backgroundColor = "transparent";
document.getElementById("flip-box-back08").style.backgroundColor = "transparent";
document.getElementById("flip-box-back09").style.backgroundColor = "transparent";



  }
}
