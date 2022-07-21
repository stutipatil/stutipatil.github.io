/* .js files add interaction to your website */

var factList = ["African American women earn 62 cents to every dollar men earn.","Hispanic/Latino women earn 54 cents to every dollar men earn.","Asian women earn 90 cents to every dollar men earn.","Native American women earn 57 cents to every dollar men earn.","Over a 40 year career, the money that Hispanic women lose out on adds up to $1,121,440."];

var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

myButton.addEventListener("click", displayFact);

function displayFact(){

  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }

    
}



