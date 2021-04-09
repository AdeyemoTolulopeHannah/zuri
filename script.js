let responsive = document.querySelector('.toggle');
let view = document.querySelector('.nav-links');



responsive.addEventListener("click" , function () {
  if (view.style.display === "none"){
    view.style.display = 'block';
    
  }
  else{
    view.style.display = 'none';
  }
});