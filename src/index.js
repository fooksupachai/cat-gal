import './service.js';
import './index.scss';
import './main.scss';

/*
  GetImage ==> Service.getImageItems(number)
*/

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('logo').src = './images/logo.svg';
  // code...
  var submit = document.getElementById("sendData");

  //if click on sendData button
  submit.addEventListener("click", function(){
    clearImageItems();
    var numberOfImages = parseInt(document.getElementById("inputData").value);
    getImage(numberOfImages);
  });
  
  //user can press enter.
  document.getElementById("inputData").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        submit.click();
    }
  });

});

//Create the image tag in <div id = "Display">
function getImage(number){
  var i;
  if(number >= 1 && number <= 15){
    for(i = 1; i <= number ; i++){
      var src = document.getElementById("Display");
      var img = document.createElement("img");
      img.setAttribute("class", "images");
      img.src = "../../images/" + i + ".jpg";
      src.appendChild(img);
      document.getElementById("status").innerHTML = "SUCCESS";
      document.getElementById("status").style.color = "green";
    }
  }
  else{
    document.getElementById("status").innerHTML = "FAILED";
    document.getElementById("status").style.color = "red";
  }

}

//Clear the image tag in <div id = "Display">
function clearImageItems(){
  var imgList = document.getElementById("Display");
  while (imgList.hasChildNodes()) {
      imgList.removeChild(imgList.firstChild);
  }
}