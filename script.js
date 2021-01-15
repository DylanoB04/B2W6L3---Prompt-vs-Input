
var numberArray=[];
var output="";

var number=prompt("Voer een getal in");
for(var i=0;i<=number;i++){
    numberArray.push(i);
    for(var j=0;j<=i;j++){
        output+=j+"";
    }
    console.log(output);
    output="";
}