var constants = ['B','C','D','F','G','H','J','K','L','M','P','Q','R','S','T','V','X','Y','Z'];
var vowels = ['A','E','I','O','U'];

console.log(constants.length,vowels.length);


var  generateWord =  function(length){
   var word = '';
   var toggle =0;
   for(var i=1;word.length<length;i++){
         if(toggle ===0 && word.length<length){
         var letter1 = Math.floor((Math.random()*18)); 
           word = word+constants[letter1];
          toggle =1;
             }
         else if(toggle ===1 && word.length<length){
         var letter2 = Math.floor((Math.random()*4)); 
           word = word+vowels[letter2];
           toggle =0;
          }
         
   }
  return word;
};

var makeBranding = function(){
    var wordLength = Number(document.getElementById("worldlength").value);
    var brandName = generateWord(wordLength);
    document.getElementById("brandname").innerHTML = brandName;
}

window.onload = function(event){
 makeBranding();
}

window.onkeypress = function(event) {
   if (event.keyCode == 32) {
      makeBranding();
   }
}