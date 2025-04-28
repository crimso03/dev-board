document.getElementById('randomColor').addEventListener('click',function(){
    var letters = "0123456789ABCDEF";
    var randomColor = "#";
    for (var i = 0; i < 6; i++) {
      randomColor += letters[Math.floor(Math.random() * letters.length)];
    }
  
    document.body.style.backgroundColor = randomColor;

});
