var numberArray=[];
var inputText=document.getElementById('inputText');
var inputBtn=document.getElementById('btn');
var txt1=document.getElementById('text1');
var txt2=document.getElementById('text2');

inputText.value="Voer een getal in.";
inputBtn.value="Laat zien";

inputBtn.addEventListener("click", function(){
    for(var i=inputText.value;i>=0;i--){  
        numberArray=[];
        for(j=0;j<=i;j++){           
            numberArray.push(j);     
        };
        txt2.innerHTML+=numberArray.join("")+"<br>";
    };
});
txt1.innerHTML="Array:  "+numberArray;