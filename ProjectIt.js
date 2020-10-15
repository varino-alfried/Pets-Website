// var total cost to count the products customer bought 
var totalcost=0; 
var myInputOne =  document.getElementById("input"),
myInputTwo =  document.getElementById("inputTwo"),
myInputThree =  document.getElementById("inputThree"),
myInputFour =  document.getElementById("inputFour"),
myInputFive =  document.getElementById("inputFive"),
myInputSix =  document.getElementById("inputSix"),
myInputSeven =  document.getElementById("inputSeven"),
myInputEight =  document.getElementById("inputEight"),
myInputNine =  document.getElementById("inputNine"),
myDiv = document.getElementById("div");
myDiv.innerHTML="The Cost Of The Accessories , You Have Added To The Cart , Cost "+totalcost+"<br>Please, Choose How you Going To Pay:"

myInputOne.onclick = function(){
  "use strict";
  totalcost=totalcost +10;
  myDiv.innerHTML="The Cost Of The Accessories , You Have Added To The Cart , Cost "+totalcost+"<br>Please, Choose How you Going To Pay:"
 
};
myInputTwo.onclick = function(){
  "use strict";
  totalcost=totalcost + 5;
  myDiv.innerHTML="The Cost Of The Accessories , You Have Added To The Cart , Cost "+totalcost+"<br>Please, Choose How you Going To Pay:"
 
};

myInputThree.onclick = function(){
  "use strict";
  totalcost=totalcost + 25;
  myDiv.innerHTML="The Cost Of The Accessories , You Have Added To The Cart , Cost "+totalcost+"<br>Please, Choose How you Going To Pay:"
 
};
myInputFour.onclick = function(){
  "use strict";
  totalcost=totalcost + 75;
  myDiv.innerHTML="The Cost Of The Accessories , You Have Added To The Cart , Cost "+totalcost+"<br>Please, Choose How you Going To Pay:"
  
};

myInputFive.onclick = function(){
  "use strict";
  totalcost=totalcost + 75;
  myDiv.innerHTML="The Cost Of The Accessories , You Have Added To The Cart , Cost "+totalcost+"<br>Please, Choose How you Going To Pay:"
 
};
myInputSix.onclick = function(){
  "use strict";
  totalcost=totalcost + 100;
  myDiv.innerHTML="The Cost Of The Accessories , You Have Added To The Cart , Cost "+totalcost+"<br>Please, Choose How you Going To Pay:"
 
};
myInputSeven.onclick = function(){
  "use strict";
  totalcost=totalcost + 40;
  myDiv.innerHTML="The Cost Of The Accessories , You Have Added To The Cart , Cost "+totalcost+"<br>Please, Choose How you Going To Pay:"
 
};
myInputEight.onclick = function(){
  "use strict";
  totalcost=totalcost + 15;
  myDiv.innerHTML="The Cost Of The Accessories , You Have Added To The Cart , Cost "+totalcost+"<br>Please, Choose How you Going To Pay:"
 
};
myInputNine.onclick = function(){
  "use strict";
  totalcost=totalcost + 65;
  myDiv.innerHTML="The Cost Of The Accessories , You Have Added To The Cart , Cost "+totalcost+"<br>Please, Choose How you Going To Pay:"
 
};

// Get the modal
var modalOne = document.getElementById("itemOneModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var imgOne = document.getElementById("itemOneImg");
var modalImgOne = document.createElement("img01");
var captionTextOne = document.getElementById("captionOne");
imgOne.onclick = function(){
    "use strict";
  modalOne.style.display = "block";
  img01.src = "../IMAGES4/item1.jpeg";
  captionTextOne.innerHTML = "Item：Captain America Dog Collar&Leash<br>Size：XL，S，M，L<br>Color：Gray，Red，Green，Yellow<br>Materials：bamboo fiber/breathable cotton fiber<br>Weight：22g – 175g <br>shipping Time:24 Houss" 
  + "<br>Place of Origin:China<br>Model Number:BY-A001<br>Price=10$";
}

// Get the <span> element that closes the modal
var spanOne = document.getElementsByClassName("closeOne")[0];

// When the user clicks on <span> (x), close the modal
spanOne.onclick = function() {
    "use strict";
  modalOne.style.display = "none";
}








var modalTwo = document.getElementById("itemTwoModal");

var imgTwo = document.getElementById("itemTwoImg");
var modalImgTwo = document.createElement("img02");
var captionTextTwo = document.getElementById("captionTwo");
imgTwo.onclick = function(){
    "use strict";
  modalTwo.style.display = "block";
  img02.src = "../IMAGES4/item2.jpg";
  captionTextTwo.innerHTML = "Item：Hello Kitty Cat Belt<br>Size：S，M，L<br>Color：Gray，Red，Green，Yellow , Purble, Black<br>"
  +"Materials：bamboo fiber/breathable cotton fiber<br>Weight：10g – 100g <br>shipping Time:24 Hours" 
  + "<br>Place of Origin:China<br>Model Number:BY-A002<br>Price=5$";
}


var spanTwo = document.getElementsByClassName("closeTwo")[0];


spanTwo.onclick = function() {
    "use strict";
  modalTwo.style.display = "none";
}

   

var modalThree = document.getElementById("itemThreeModal");

var imgThree = document.getElementById("itemThreeImg");
var modalImgThree = document.createElement("img03");
var captionTextThree = document.getElementById("captionThree");
imgThree.onclick = function(){
    "use strict";
  modalThree.style.display = "block";
  img03.src = "../IMAGES4/item3.jpg";
  captionTextThree.innerHTML = "Item：Cat's Food Plate<br>Size：XL, M，L<br>Color：Gray，Red，Green, Black<br>"
  +"Materials：%100 Plastic<br>Weight：200g – 400g<br>shipping Time:3 Days " 
  + "<br>Place of Origin:China<br>Model Number:BY-A003<br>Price=25$";
}


var spanThree = document.getElementsByClassName("closeThree")[0];


spanThree.onclick = function() {
    "use strict";
  modalThree.style.display = "none";
}

var modalFour = document.getElementById("itemFourModal");

var imgFour = document.getElementById("itemFourImg");
var modalImgFour = document.createElement("img04");
var captionTextFour = document.getElementById("captionFour");
imgFour.onclick = function(){
    "use strict";
  modalFour.style.display = "block";
  img04.src = "../IMAGES4/item4.jpg";
  captionTextFour.innerHTML = "Item：Cat's Bed<br>Size：XL, M，L<br>Color：Gray，Red，BabyBlue, Pink,Green, Black<br>"
  +"Materials：%100 Cotton&Fibers<br>Weight：500g – 1000g<br>shipping Time:10 Days " 
  + "<br>Place of Origin:China<br>Model Number:BY-A004<br>Price=75$";
}


var spanFour= document.getElementsByClassName("closeFour")[0];


spanFour.onclick = function() {
    "use strict";
  modalFour.style.display = "none";
}



var modalFive = document.getElementById("itemFiveModal");

var imgFive = document.getElementById("itemFiveImg");
var modalImgFive = document.createElement("img05");
var captionTextFive = document.getElementById("captionFive");
imgFive.onclick = function(){
    "use strict";
  modalFive.style.display = "block";
  img05.src = "../IMAGES4/item5.jpg";
  captionTextFive.innerHTML = "Item：Simple Bird House<br>Size：XL, M, S,L<br>Color：Gray，BabyBlue, Black<br>"
  +"Materials：Aluminium +Plastic +Wood<br>Weight：500g – 1500g<br>shipping Time:5 Days " 
  + "<br>Place of Origin:China<br>Model Number:BY-A005<br>Price=50$";
}


var spanFive= document.getElementsByClassName("closeFive")[0];


spanFive.onclick = function() {
    "use strict";
  modalFive.style.display = "none";
}


var modalSix = document.getElementById("itemSixModal");

var imgSix= document.getElementById("itemSixImg");
var modalImgSix = document.createElement("img06");
var captionTextSix = document.getElementById("captionSix");
imgSix.onclick = function(){
    "use strict";
  modalSix.style.display = "block";
  img06.src = "../IMAGES4/item6.jpg";
  captionTextSix.innerHTML = "Item：Advanced Bird House<br>Can fit 10-15 Bird <br>Color：Antique White<br>"
  +"Materials：100% Wood<br>Weight：5000g<br>shipping Time:15 Days " 
  + "<br>Place of Origin:China<br>Model Number:BY-A006<br>Price=100$";
}


var spanSix= document.getElementsByClassName("closeSix")[0];


spanSix.onclick = function() {
    "use strict";
  modalSix.style.display = "none";
}



var modalSeven = document.getElementById("itemSevenModal");

var imgSeven= document.getElementById("itemSevenImg");
var modalImgSeven = document.createElement("img07");
var captionTextSeven = document.getElementById("captionSeven");
imgSeven.onclick = function(){
    "use strict";
  modalSeven.style.display = "block";
  img07.src = "../IMAGES4/item7.jpeg";
  captionTextSeven.innerHTML = "Item：FishBowl<br>Size: XL, L, M <br>"
  +"Materials：Glass +Small Pieces Of Corals<br>Weight：3000g<br>shipping Time:9 Days " 
  + "<br>Place of Origin:China<br>Model Number:BY-A007<br>Price=40$";
}


var spanSeven= document.getElementsByClassName("closeSeven")[0];


spanSeven.onclick = function() {
    "use strict";
  modalSeven.style.display = "none";
}





var modalEight = document.getElementById("itemEightModal");

var imgEight= document.getElementById("itemEightImg");
var modalImgEight = document.createElement("img08");
var captionTextEight = document.getElementById("captionEight");
imgEight.onclick = function(){
    "use strict";
  modalEight.style.display = "block";
  img08.src = "../IMAGES4/item8.jpg";
  captionTextEight.innerHTML = "Item：Dog Bone Toy <br>Color：Red, Pink, Yellow, Grey, Blue, White<br>"
  +"Materials：100% Silicon<br>Weight：100g<br>shipping Time:48 Hours " 
  + "<br>Place of Origin:China<br>Model Number:BY-A008<br>Price=15$";
}


var spanEight= document.getElementsByClassName("closeEight")[0];


spanEight.onclick = function() {
    "use strict";
  modalEight.style.display = "none";
}



var modalNine = document.getElementById("itemNineModal");

var imgNine= document.getElementById("itemNineImg");
var modalImgNine = document.createElement("img09");
var captionTextNine = document.getElementById("captionNine");
imgNine.onclick = function(){
    "use strict";
  modalNine.style.display = "block";
  img09.src = "../IMAGES4/item9.png";
  captionTextNine.innerHTML = "Item：Dog Seat<br>Size: Xl, L, M, S <br>Color：White, Aqua, Grey, Brown, Pink<br>"
  +"Materials：100% Fibers+cotton<br>Weight：2500g<br>shipping Time:12 Days " 
  + "<br>Place of Origin:China<br>Model Number:BY-A009<br>Price=65$";
}


var spanNine= document.getElementsByClassName("closeNine")[0];


spanNine.onclick = function() {
    "use strict";
  modalNine.style.display = "none";
}


var captionTextZero = document.getElementById("captionZero");
captionTextZero.innerHTML = "Looking For Nice Accessories For Your Lovely Pet?!<br>At Our Shop You Will Find Everything You Need With The Cheapest Prices<br><br>"+
                            "What Pet Sections Do We Have At Our Shop?!<br>We Have Accessories For Dogs, Cats, Birds And Fishes<br><br>"+
                            "How Much Does Shipping The Accessories Cost?!<br>We Ship to All The Countries For Absloutly Free,Sir<br><br>"+
                            "Is Our Prdoucts Safe For Your Pets?!<br>Ofcouse Because We Make All Our Accessories With Natural Materials That Cause No Harm To Your Pet , And We Have All Size Kinds<br><br>"
                            +"NOTE:<br>If You Didn't Like The Accessory Or There Was Something wrong With It , You Can Call The Help Center And Get Your Money Back, Sir";
 








                            var x=1;
                            function myFunction()
                        {   
                          x=x*(-1);
                          if(x<0){
                        document.getElementById("body").style.backgroundImage="none";
                        document.getElementById("body").style.backgroundColor="dimgray";
                        document.getElementById("head").style.backgroundColor="black";
                        document.getElementById("dM").style.color = "white";
                        
                        document.getElementById("parent1").style.borderColor = "white";
                        document.getElementById("parent2").style.borderColor = "white";
                        document.getElementById("parent3").style.borderColor = "white";
                        document.getElementById("parent4").style.borderColor = "white";
                        document.getElementById("parent5").style.borderColor = "white";
                        document.getElementById("parent6").style.borderColor = "white";
                        document.getElementById("parent7").style.borderColor = "white";
                        document.getElementById("parent8").style.borderColor = "white";
                        document.getElementById("parent9").style.borderColor = "white";

                        
                          }
                          else{
                            document.getElementById("body").style.backgroundColor="transparent";
                            document.getElementById("body").style.backgroundImage = "url('../IMAGES4/background.jpg')";
                            document.getElementById("head").style.backgroundColor="lightcoral";
                            document.getElementById("dM").style.color = "black";

                            document.getElementById("parent1").style.borderColor = "black";
                            document.getElementById("parent2").style.borderColor = "black";
                            document.getElementById("parent3").style.borderColor = "black";
                            document.getElementById("parent4").style.borderColor = "black";
                            document.getElementById("parent5").style.borderColor = "black";
                            document.getElementById("parent6").style.borderColor = "black";
                            document.getElementById("parent7").style.borderColor = "black";
                            document.getElementById("parent8").style.borderColor = "black";
                            document.getElementById("parent9").style.borderColor = "black";
                        
                        
                        
                          }
                        }
                        