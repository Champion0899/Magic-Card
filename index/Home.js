let slideIndex = 0;
showSlides();
var AlrSwitched = false;

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

function themeSwitcher() {

    switch (document.body.classList.contains("light")){
        case true:
            AlrSwitched = true;
            document.body.classList.remove("light");
            document.body.classList.toggle("dark");
            

            break;
        case false:
            AlrSwitched = false;
            document.body.classList.remove("dark");
            document.body.classList.toggle("light");
            
        default:
            break;
    }
}

/* function immer laden wenn neue seite */
function AlrSwitchedX(){
  if (AlrSwitched) {
    document.body.classList.remove("dark");
    document.body.classList.toggle("light");
  } else {
    document.body.classList.remove("light");
    document.body.classList.toggle("dark");
  }
}