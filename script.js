//Getal: bijv. 20
//Getallen 1 t/m 20 in array stoppen 
//Piramide in for loop 
//0
//01
//012
//0123
//1234
//12345
var numberArray=[];
var inputPrompt=prompt("Voer een getal in.");
var txt1=document.getElementById('text1');
var txt2=document.getElementById('text2');

for(var i=0;i<=inputPrompt;i++){
    numberArray=[];
    for(j=0;j<=i;j++){
        numberArray.push(j);
    };
    txt2.innerHTML+=numberArray.join("")+"<br>";
};
txt1.innerHTML="Array:  "+numberArray;