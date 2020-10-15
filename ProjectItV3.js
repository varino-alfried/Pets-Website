var slideIndex = 1;
var slideIndex0 = 1;


showSlides(slideIndex);
information(slideIndex0);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
  information(slideIndex0 += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
  information(slideIndex0 = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      dots[i].className = dots[i].className.replace(" active", "");
    }
  
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}





function information(n) {
    var k;
    var slidesss = document.getElementsByClassName("mySlides1");
    
    if (n > slidesss.length) {slideIndex0 = 1}
    if (n < 1) {slideIndex0 = slidesss.length}
    for (k = 0; k < slidesss.length; k++) {
        slidesss[k].style.display = "none";
       
      }
    
    slidesss[slideIndex0-1].style.display = "block";
   
  }



























  var slideIndexB = 1;
  var slideIndex0B = 1;
  
  
  showSlidesB(slideIndexB);
  informationB(slideIndex0B);
  
  // Next/previous controls
  function plusSlidesB(nB) {
    showSlidesB(slideIndexB += nB);
    informationB(slideIndex0B += nB);
  }
  
  // Thumbnail image controls
  function currentSlideB(nB) {
    showSlidesB(slideIndexB = nB);
    informationB(slideIndex0B = nB);
  }
  
  function showSlidesB(nB) {
    var iB;
    var slidesB = document.getElementsByClassName("mySlidesB");
    var dotsB = document.getElementsByClassName("dotB");
    if (nB > slidesB.length) {slideIndexB = 1}
    if (nB < 1) {slideIndexB = slidesB.length}
    for (iB = 0; iB < slidesB.length; iB++) {
        slidesB[iB].style.display = "none";
        dotsB[iB].className = dotsB[iB].className.replace(" activeB", "");
      }
    
    slidesB[slideIndexB-1].style.display = "block";
    dotsB[slideIndexB-1].className += " activeB";
  }
  
  
  
  
  
  function informationB(nB) {
      var kB;
      var slidesssB = document.getElementsByClassName("mySlides3B");
      
      if (nB > slidesssB.length) {slideIndex0B = 1}
      if (nB < 1) {slideIndex0B = slidesssB.length}
      for (kB = 0; kB < slidesssB.length; kB++) {
          slidesssB[kB].style.display = "none";
         
        }
      
      slidesssB[slideIndex0B-1].style.display = "block";
     
    }




















  
    var slideIndex1B = 1;
    var slideIndex2B = 1;
    
    
    showSlides1B(slideIndex1B);
    information1B(slideIndex2B);
    
    // Next/previous controls
    function plusSlides1B(n1B) {
      showSlides1B(slideIndex1B += n1B);
      information1B(slideIndex2B += n1B);
    }
    
    // Thumbnail image controls
    function currentSlide1B(n1B) {
      showSlides1B(slideIndex1B = n1B);
      information1B(slideIndex2B = n1B);
    }
    
    function showSlides1B(n1B) {
      var i1B;
      var slides1B = document.getElementsByClassName("mySlides1B");
      var dots1B = document.getElementsByClassName("dot1B");
      if (n1B > slides1B.length) {slideIndex1B = 1}
      if (n1B < 1) {slideIndex1B = slides1B.length}
      for (i1B = 0; i1B < slides1B.length; i1B++) {
          slides1B[i1B].style.display = "none";
          dots1B[i1B].className = dots1B[i1B].className.replace(" active1B", "");
        }
      
      slides1B[slideIndex1B-1].style.display = "block";
      dots1B[slideIndex1B-1].className += " active1B";
    }
    
    
    
    
    
    function information1B(n2B) {
        var k2B;
        var slidesss2B = document.getElementsByClassName("mySlides2B");
        
        if (n2B > slidesss2B.length) {slideIndex2B = 1}
        if (n2B < 1) {slideIndex2B = slidesss2B.length}
        for (k2B = 0; k2B < slidesss2B.length; k2B++) {
            slidesss2B[k2B].style.display = "none";
           
          }
        
        slidesss2B[slideIndex2B-1].style.display = "block";
       
      }


    























  var slideIndex1 = 1;
  var slideIndex2 = 1;

showSlides1(slideIndex1);
information1(slideIndex2);

// Next/previous controls
function plusSlides1(z) {
  showSlides1(slideIndex1 += z);
  information1(slideIndex2 += z);
}

// Thumbnail image controls
function currentSlide1(z) {
  showSlides1(slideInde1 = z);
  information1(slideIndex2 = z);
}




  function showSlides1(z) {
    var i1;
    var slides1 = document.getElementsByClassName("mySlides2");
    var dots1 = document.getElementsByClassName("dot2");
    if (z > slides1.length) {slideIndex1 = 1}

    if (z < 1) {slideIndex1 = slides1.length}
    
    for (i1 = 0; i1 < slides1.length; i1++) {
        slides1[i1].style.display = "none";
        dots1[i1].className = dots1[i1].className.replace(" active2", "");
      }
    
    slides1[slideIndex1-1].style.display = "block";
    dots1[slideIndex1-1].className += " active2";
  }
  
  
  
  
  
  function information1(z) {
      var k2;
      var slidesss2 = document.getElementsByClassName("mySlides3");
      
      if (z > slidesss2.length) {slideIndex2 = 1}
      if (z < 1) {slideIndex2 = slidesss2.length}
      for (k2 = 0; k2 < slidesss2.length; k2++) {
          slidesss2[k2].style.display = "none";
         
        }
      
      slidesss2[slideIndex2-1].style.display = "block";
     
    }

    


















    var x=1;
    function myFunction()
{   
  x=x*(-1);
  if(x<0){
document.getElementById("background").style.backgroundImage="none";
document.getElementById("background").style.backgroundColor="black";
document.getElementById("firstSection").style.display="none";
document.getElementById("secondSection").style.display="none";
document.getElementById("background").style.fontStyle="inherit";
document.getElementById("firstSectionB").style.display="block";
document.getElementById("sideDiv1B").style.display="block";
document.getElementById("leftDiv2B").style.display="block";
document.getElementById("leftDiv3B").style.display="block";
document.getElementById("pagination").style.backgroundColor="white";
document.getElementById("pagination2").style.backgroundColor="white";
document.getElementById("pagination3").style.backgroundColor="white";
document.getElementById("pagination4").style.backgroundColor="white";





  }
  else{
    document.getElementById("background").style.backgroundColor="none";
    document.getElementById("background").style.backgroundImage = "url('../IMAGES4/background3.jpg')";
    
    document.getElementById("firstSection").style.display="block";
    document.getElementById("secondSection").style.display="block";

    document.getElementById("firstSectionB").style.display="none";
    document.getElementById("sideDiv1B").style.display="none";
    document.getElementById("leftDiv2B").style.display="none";
    document.getElementById("leftDiv3B").style.display="none";
    document.getElementById("pagination").style.backgroundColor="transparent";
    document.getElementById("pagination2").style.backgroundColor="transparent";
    document.getElementById("pagination3").style.backgroundColor="transparent";
    document.getElementById("pagination4").style.backgroundColor="transparent";
    document.getElementById("background").style.fontStyle="oblique";
  }
}























